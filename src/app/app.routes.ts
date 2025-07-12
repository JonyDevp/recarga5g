import { Routes } from "@angular/router";

export const routes: Routes = [
    
    {
        path: '',
        data: {
            title: 'Inicio',
            description: 'Bienvenido a Recarga5G, la mejor plataforma para realizar recargas electrónicas en México',
            keywords: 'Recargas electrónicas, Pago de servicios, Pines electrónicos, México'
        },
        loadComponent: () => import('./pages/home/home.component')
    },

    {
        path: 'registro',
        loadComponent: () => import('./pages/registro/registro.component')
    },

    {
        path: 'plataformas',
        loadChildren: () => import('@plataformas/plataformas.routes').then( (r) => r.PlataformasRoutes)
    },

    {
        path: 'productos',
        loadChildren: () => import('@productos/productos.routes').then ( (consultRoute) => consultRoute.consultaRoutes)
    },

    {
        path: 'mas',
        loadChildren: () => import('@mas/mas.routes').then ( (masRoute) => masRoute.masRoutes)
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