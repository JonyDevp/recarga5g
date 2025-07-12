import { Injectable } from "@angular/core";
import { BenefitsListModel } from "src/app/interfaces/benefits-list.interface";

@Injectable({ 
    providedIn: 'root'
})
export class ReasonForSellingService {


  private razones: BenefitsListModel[] = [

        {
            id: 1,
            nameIcon: "monetization_on",
            title: "Generación de ingresos adicionales",
            description: " La venta de recargas electrónicas puede ser una fuente adicional de ingresos para el negocio.",
            svgIcon: {
                viewBox: '0 0 24 24',
                strokeLineCap: 'round',
                strokeLineJoin: 'round',
                draw: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941'
            }
        },

        {
            id: 2,
            nameIcon: "settings_accessibility",
            title: "Atrae a nuevos clientes",
            description: "Los clientes pueden visitar el negocio para recargar sus dispositivos electrónicos y también pueden descubrir otros productos y servicios que el negocio ofrece.",
            svgIcon: {
                viewBox: '0 0 24 24',
                strokeLineCap: 'round',
                strokeLineJoin: 'round',
                draw: 'M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21C7.043 21 4.862 20.355 3 19.234Z'
            }
        },

        {
            id: 3,
            nameIcon: "devices",
            title: "Diferentes métodos de venta",
            description: "Vende recargas electrónicas desde tu smartphone, tablet o desktop.",
            svgIcon: {
                viewBox: '0 0 24 24',
                strokeLineCap: 'round',
                strokeLineJoin: 'round',
                draw: 'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25'
            }
        },

        {
            id: 4,
            nameIcon: "supervisor_account",
            title: "Diferenciación de la competencia",
            description: "La venta de recargas electrónicas puede diferenciar al negocio de su competencia y darle una ventaja en el mercado.",
            svgIcon: {
                viewBox: '0 0 24 24',
                strokeLineCap: 'round',
                strokeLineJoin: 'round',
                draw: 'M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
            }
        },
        
        {
            id: 5,
            nameIcon: "add_task",
            title: "Aumento del tráfico de la tienda",
            description: "Los clientes pueden visitar el negocio con más frecuencia para recargar sus dispositivos electrónicos, lo que aumenta el tráfico en la tienda y puede impulsar las ventas de otros productos y servicios.",
            svgIcon: {
                viewBox: '0 0 24 24',
                strokeLineCap: 'round',
                strokeLineJoin: 'round',     
                draw: 'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605'
            }
        },

        {
            id: 6,
            nameIcon: "payments",
            title: "Múltiples medios de pago y bancos",
            description: "Puedes depositar transferencias bancarias y depósitos en efectivo en HSBC, Banorte, Santander, Bancomer y Banco Azteca.",
            svgIcon: {
                viewBox: '0 0 24 24',
                strokeLineCap: 'round',
                strokeLineJoin: 'round',
                draw: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
            }
        },


        {
            id: 7,
            nameIcon: "system_update",
            title: "Aplicación de depósitos automático",
            description: "Genera una referencia para tus depósitos y transferencias bancarias para la aplicación de tus compras de manera automática sin necesidad de notificarlos en tu portal.",
            svgIcon: {
                viewBox: '0 0 24 24',
                strokeLineCap: 'round',
                strokeLineJoin: 'round',
                draw: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
            }

        },

        
        {
            id: 8,
            nameIcon: "public",
            title: "Ampliación del alcance",
            description: "La venta de recargas electrónicas permite a los negocios llegar a un público más amplio, incluyendo a personas que no tienen acceso a una cuenta bancaria o una tarjeta de crédito para recargar en línea",
            svgIcon: {
                viewBox: '0 0 24 24',
                strokeLineCap: 'round',
                strokeLineJoin: 'round',
                draw: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
            }
        },


        {
            id: 9,
            nameIcon: "format_list_bulleted_add",
            title: "Ampliación de la oferta de productos y servicios",
            description: "Ofrece recargas a cualquier compañía: Telcel, Movistar, Bait, Unefon, AT&T, cobra +200 compañías de servicios: CFE, IZZI, Telmex, Televia",
            svgIcon: {
                viewBox: '0 0 24 24',
                strokeLineCap: 'round',
                strokeLineJoin: 'round',
                draw: 'M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z'
            }
        },
    
    ]


    getReasonForSelling(): BenefitsListModel[] {
        return this.razones;
    }
}