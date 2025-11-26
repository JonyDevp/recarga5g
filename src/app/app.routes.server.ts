// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
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
  { path: 'mas/blog/post/:slug', renderMode: RenderMode.Server },

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