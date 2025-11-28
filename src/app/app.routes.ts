import { Routes } from "@angular/router";

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./pages/home/home.component')
    },

    {
        path: 'registro',
        loadComponent: () => import('./pages/registro/registro.component')
    },

    {
        path: 'plataformas',
        loadChildren: () => import('@plataformas/plataformas.routes').then((r) => r.PlataformasRoutes)
    },

    {
        path: 'productos',
        loadChildren: () => import('@productos/productos.routes').then((consultRoute) => consultRoute.consultaRoutes)
    },

    {
        path: 'mas',
        loadChildren: () => import('@mas/mas.routes').then((masRoute) => masRoute.masRoutes)
    },

    {
        path: '404',
        loadComponent: () => import('@shared/not-found/not-found.component')
    },

    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
    },
]