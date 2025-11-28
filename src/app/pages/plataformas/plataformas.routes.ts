import { Routes } from "@angular/router";

export const PlataformasRoutes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/404'
    },

    {
        path: 'pagaqui',
        loadComponent: () => import('@plataformas/pages/pagaqui/pagaqui.component')
    },

    {
        path: 'planetaemx',
        loadComponent: () => import('@plataformas/pages/planetaemx/planetaemx.component')
    }
]