import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, type ResolveFn } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { catchError, map, of } from 'rxjs';
import { MapPostItem } from '../interfaces/post-types';

export const postResolver: ResolveFn<MapPostItem | null> = (route: ActivatedRouteSnapshot) => {
  const blogService = inject(ContentfulService);
  const router = inject(Router);
  const navigation = inject(Router).currentNavigation();

  const slugFromUrl = route.params['slug'];
  const idFromState = navigation?.extras.state?.['id'];

  // Si hay ID en el estado, buscamos por ID (navegación desde el blog)
  if (idFromState) {
    return blogService.getPostByID(idFromState).pipe(
      map(post => {
        if (!post || post.slug !== slugFromUrl) {
          router.navigate(['/404']);
          return null;
        }
        return post;
      })
    );
  } 
  // Si no hay ID, buscamos por slug (acceso directo por URL)
  else {
    return blogService.getPostBySlug(slugFromUrl).pipe(
      map(post => {
        if (!post) {
          router.navigate(['/404']);
          return null;
        }
        return post;
      })
    );
  }
};



