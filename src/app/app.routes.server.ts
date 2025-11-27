// app.routes.server.ts
import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ContentfulService } from '@mas/pages/blog/services/contentful.service';
import { firstValueFrom } from 'rxjs';
export const serverRoutes: ServerRoute[] = [

     // Home
  { path: '', renderMode: RenderMode.Prerender },

  // Registro
  { path: 'registro', renderMode: RenderMode.Prerender },

  // Plataformas
  { path: 'plataformas', renderMode: RenderMode.Prerender },
  { path: 'plataformas/pagaqui', renderMode: RenderMode.Prerender },
  { path: 'plataformas/planetaemx', renderMode: RenderMode.Prerender },

  // Productos
  { path: 'productos', renderMode: RenderMode.Prerender },
  { path: 'productos/recargas', renderMode: RenderMode.Prerender },
  { path: 'productos/servicios', renderMode: RenderMode.Prerender },
  { path: 'productos/pines', renderMode: RenderMode.Prerender },
  { path: 'productos/terminales', renderMode: RenderMode.Prerender },

  // Sección "Más"
  { path: 'mas', renderMode: RenderMode.Prerender },
  { path: 'mas/contacto', renderMode: RenderMode.Prerender },
  { path: 'mas/faqs', renderMode: RenderMode.Prerender },
  { path: 'mas/blog', renderMode: RenderMode.Prerender },

  // Blog dinámico → SSR para SEO
  {
    path: 'mas/blog/post/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const contentful = inject(ContentfulService);

      // Convertimos el Observable a Promise para poder usar await
      const slugs = await firstValueFrom(contentful.getAllPostSlugs());

      // Angular generará un HTML para cada slug
      return slugs.map(slug => ({ slug }));
    },
  },
  // Legales
  { path: 'mas/legal/politicas', renderMode: RenderMode.Prerender },
  { path: 'mas/legal/condiciones', renderMode: RenderMode.Prerender },

  // Novedades
  { path: 'novedades', renderMode: RenderMode.Prerender },

  // Página 404
  { path: '404', renderMode: RenderMode.Prerender },

  // Cualquier otra ruta
  { path: '**', renderMode: RenderMode.Server },

];