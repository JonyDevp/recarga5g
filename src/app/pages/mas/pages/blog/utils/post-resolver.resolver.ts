// post-resolver.resolver.ts

import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  type ActivatedRouteSnapshot,
  Router,
  type ResolveFn,
} from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ContentfulService } from '../services/contentful.service';
import { MapPostItem } from '../interfaces/post-types';

export const postResolver: ResolveFn<MapPostItem | null> = (
  route: ActivatedRouteSnapshot
) => {
  const blogService = inject(ContentfulService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);

  const slugFromUrl = route.params['slug'] as string | undefined;

  // En servidor NO hay navegación actual; sólo la leemos en navegador
  const navigation = isBrowser ? router.getCurrentNavigation() : null;
  const idFromState = navigation?.extras?.state?.['id'];

  const handleNotFound = () => {
    // Solo navegamos a /404 en navegador; en SSR devolvemos null sin redirigir
    if (isBrowser) {
      router.navigate(['/404']);
    }
    return null;
  };

  // Si no hay slug en la URL, no tiene sentido seguir
  if (!slugFromUrl) {
    return of(handleNotFound());
  }

  // 1) Venimos desde el listado del blog con id en el state (más rápido: busca por ID)
  if (idFromState) {
    return blogService.getPostByID(idFromState).pipe(
      map((post) => {
        // Si no hay post o el slug no coincide con la URL, mandamos a 404
        if (!post || post.slug !== slugFromUrl) {
          return handleNotFound();
        }
        return post;
      }),
      catchError((err) => {
        console.error('[postResolver] Error getPostByID', err);
        return of(handleNotFound());
      })
    );
  }

  // 2) Acceso directo por URL → buscamos por slug
  return blogService.getPostBySlug(slugFromUrl).pipe(
    map((post) => {
      if (!post) {
        return handleNotFound();
      }
      return post;
    }),
    catchError((err) => {
      console.error('[postResolver] Error getPostBySlug', err);
      return of(handleNotFound());
    })
  );
};
