import { Injectable } from '@angular/core';
import { registerStepsModel } from 'src/app/interfaces/register-steps-model';


@Injectable({
    providedIn: 'root'
})
export class RegisterStepsService {


    private stepsHome: registerStepsModel[] = [
     {
        item: [
                   {
            img: "/assets/img/register-registro.png",
            alt: "registro para la venta de recargas sin costo alguno",
            description: "Registrate para vender recargas",

        },

        {
            img: "/assets/img/register-correo.png",
            alt: "Ingresa a tu plataforma con los datos de acceso que podras encontrar en el correo de bienvenida",
            description: "Espera nuestro correo con tus datos de acceso",

        },

        {
            img: "/assets/img/register-deposito.png",
            alt: "Notificiación de depositos Pagaqui",
            description: "Deposita y notifica tus depositos en la plataforma",

        },

        {
            img: "/assets/img/register-ganancias.png",
            alt: "Genera ingresos extras veniendo recargas con recarga5g.com",
            description: "Listo, difruta De Los Beneficios",

        } 
        ]
     }
    ];

    private stepsPagaqui: registerStepsModel[] = [

        {
            item: [
                {
                    img: "/assets/img/register-registro.png",
                    alt: "registro para la venta de recargas con Pagaqui sin costo alguno",
                    description: "Regístrate para vender recargas con Pagaqui",
        
                },
        
                {
                    img: "/assets/img/register-correo.png",
                    alt: "Ingresa a Pagaqui con los datos de acceso que podras encontrar en el correo de bienvenida",
                    description: "Espera nuestro correo con tus datos de acceso",
        
                },
        
                {
                    img: "/assets/img/register-deposito.png",
                    alt: "Notificiación de depositos Pagaqui",
                    description: "Deposita y notifica tus depósitos Pagaqui en la plataforma",
        
                },
        
                {
                    img: "/assets/img/register-ganancias.png",
                    alt: "Genera ingresos extras veniendo recargas con pagaqui",
                    description: "¡Listo! podrás generar ganancias por cada venta que realices",
        
                }
            ]
        }
    ]

    private stepsPlanetaemx: registerStepsModel[] = [

      {
        item: [
            {
                img: "/assets/img/register-registro.png",
                alt: "registro para la venta de recargas con Planetaemx sin costo alguno",
                description: "Regístrate para vender recargas con Planetaemx.",
    
            },
    
            {
                img: "/assets/img/register-correo.png",
                alt: "Ingresa a Planetaemx con los datos de acceso que podras encontrar en el correo de bienvenida",
                description: "Espera nuestro correo con tus datos de acceso.",
    
            },
    
            {
                img: "/assets/img/register-deposito.png",
                alt: "Notificiación de depositos Planetaemx",
                description: "Deposita y notifica tus depósitos Planetaemx en la plataforma.",
    
            },
    
            {
                img: "/assets/img/register-ganancias.png",
                alt: "Genera ingresos extras por cada deposito que reportes",
                description: "¡Listo! podrás generar ganancias por cada deposito que realices y notifiques.",
    
            }
        ]
      }
    ];

    private stepsRecargas: registerStepsModel[] = [
   
        {
            item: [
                {
                    img: "/assets/img/register-registro.png",
                    alt: "registro para la venta de recargas nacional sin costo alguno",
                    description: "Regístrate para vender recargas multirregión",
        
                },
        
                {
                    img: "/assets/img/register-correo.png",
                    alt: "Ingresa a la plataforma con los datos de acceso que podras encontrar en el correo de bienvenida",
                    description: "Espera nuestro correo con tus datos de acceso",
        
                },
        
                {
                    img: "/assets/img/register-deposito.png",
                    alt: "Notificiación tu deposito en la plataforma",
                    description: "Deposita y notifica tus depósitos en la plataforma",
        
                },
        
                {
                    img: "/assets/img/register-ganancias.png",
                    alt: "Genera ingresos extras veniendo recargas con | Recarga5g.com",
                    description: "¡Listo! podrás generar ganancias por la venta de tus recargas",
        
                }
            ]
        }
    ];

    private stepsServicios: registerStepsModel[] = [
   {
    item: [
        {
            img: "/assets/img/register-registro.png",
            alt: "registro para la venta de recargas sin costo alguno",
            description: "Regístrate para vender recargas a cualquier compañía",

        },

        {
            img: "/assets/img/register-correo.png",
            alt: "Ingresa a tu plataforma con los datos de acceso que podras encontrar en el correo de bienvenida",
            description: "Espera nuestro correo con tus datos de acceso",

        },

        {
            img: "/assets/img/register-deposito.png",
            alt: "Notificiación de depositos",
            description: "Deposita y notifica tus depósitos en la plataforma",

        },

        {
            img: "/assets/img/register-ganancias.png",
            alt: "Genera ingresos extras veniendo recargas",
            description: "¡Listo! podrás generar ganancias por cada venta que realices",

        }
    ]
   }
    ];


    private stepsPines: registerStepsModel[] = [
  
        {
            item: [
                {
                    img: "/assets/img/register-registro.png",
                    alt: "registro para la venta de tarjetas de regalo",
                    description: "Regístrate para vender tarjetas de regalo",
        
                },
        
                {
                    img: "/assets/img/register-correo.png",
                    alt: "Ingresa a la plataforma con los datos de acceso para vender pines",
                    description: "Espera nuestro correo con tus datos de acceso",
        
                },
        
                {
                    img: "/assets/img/register-deposito.png",
                    alt: "Notificiación de depositos Pagaqui",
                    description: "Deposita y notifica tus depósitos para saldo de servicios",
        
                },
        
                {
                    img: "/assets/img/register-ganancias.png",
                    alt: "Genera ingresos extras veniendo tarjetas",
                    description: "¡Listo! podrás generar ganancias por cada venta de pin electrónico",
        
                }
            ]
        }
    ];


    getStepsHome(): registerStepsModel[] {
        return this.stepsHome;
    }

    getStepsPagaqui(): registerStepsModel[] {
        return this.stepsPagaqui;
    }

    getStepsPlanetaemx(): registerStepsModel[] {
        return this.stepsPlanetaemx;
    }

    getStepsRecargas(): registerStepsModel[] {
        return this.stepsRecargas;
    }

    getStepsServicios(): registerStepsModel[] {
        return this.stepsServicios;
    }

    getStepsPines(): registerStepsModel[] {
        return this.stepsPines;
    }



}



