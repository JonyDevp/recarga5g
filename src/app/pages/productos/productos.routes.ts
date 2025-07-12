import { Routes } from "@angular/router";


export const consultaRoutes: Routes = [

    {
        path: 'recargas',
        loadComponent: () => import('@productos/venta-recargas/venta-recargas.component')
    },

    {
        path: 'servicios',
        loadComponent: () => import('@productos/pago-servicios/pago-servicios.component')
    },

    {
        path: 'pines',
        loadComponent: () => import('@productos/venta-pines/venta-pines.component')
    }, 

    {
        path: 'terminales',
        loadComponent: () => import('@productos/terminales/terminales.component')
    }
];