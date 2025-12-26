import { Routes } from "@angular/router";

export const PlataformasRoutes: Routes = [

    {
        path: 'pagaqui',
        loadComponent: () => import('@plataformas/pages/pagaqui/pagaqui.component')
    },

    {
        path: 'planetaemx',
        loadComponent: () => import('@plataformas/pages/planetaemx/planetaemx.component')
    },

    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/404',
    },
    
    {
        path: '**',
        redirectTo: '/404'
    },

]