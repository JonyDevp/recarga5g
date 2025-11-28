import { Routes } from "@angular/router";
import { postResolver } from "./pages/blog/utils/post-resolver.resolver";

export const masRoutes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/404'
    },

    {
        path: 'contacto',
        loadComponent: () => import('@mas/pages/contacto/contacto.component')
    },

    {
        path: 'faqs',
        loadComponent: () => import('@mas/pages/faqs/faqs.component')
    },

    {
        path: 'blog',
        loadComponent: () => import('@mas/pages/blog/blog.component')
    },

    {
        path: 'blog/post/:slug',
        loadComponent: () => import('@mas/pages/blog/pages/post/post.component'),
        resolve: { postData: postResolver }
    },

    {
        path: 'legal/politicas',
        loadComponent: () => import('@mas/pages/legal/pages/politicas/politicas.component')
    },

    {
        path: 'legal/condiciones',
        loadComponent: () => import('@mas/pages/legal/pages/condiciones/condiciones.component')
    }
]