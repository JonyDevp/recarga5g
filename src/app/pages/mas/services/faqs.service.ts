import { Injectable } from "@angular/core";
import { faqHead } from "src/app/interfaces/faqs.model";

@Injectable()
export class FaqsService {


private titleFaq: faqHead[] = [

    {
        title: "Que beneficios tengo a afiliarme a Recarga5g.com",
      
    },

    {
        title: "Que servicios puedo vender con Recarga5g.com",
      
    },

    {
        title: "Como me registro para empezar a vender recargas",
      
    },

    {
        title: "Debo firmar algún contracto para vender recargas",
      
    },

    {
        title: "Tengo que pagar alguna mensualidad o anualidad para empezar a vender recargas",
      
    },

    {
        title: "Cuales son los montos mínimos y máximos para depósitos y/o transferencias para vender recargas",
     
    },

    {
        title: "Como puedo obtener un aumento en mi comision",
       
    },

    {
        title: "Cual es la comision por pago de servicio",
       
    },

    {
        title: " Cual es la comision por pin electrónico",
      
    },

    {
        title: "No puedo realizar una recarga",
     
    },

    {
        title: "Se me olvido mi contraseña",
     
    },

    {
        title: "Que puedo hacer con pagaqui",
       
    },

    {
        title: "Como ingreso a Pagaqui",
       
    },

    {
        title: "Como funciona la comision en pagaqui",
     
    },

    {
        title: "Realice una venta y no se reflejo mi comisión en Pagaqui",
      
    },

    {
        title: "Donde puedo consultar los manuales Pagaqui",
      
    },

    {
        title: "Como descargo pagaqui para mi celular",
      
    },

    {
        title: "En donde puedo consultar las cuentas para depositar o transferir para recargar saldo en Pagaqui",
      
    },

    {
        title: "En donde reporto mis depositos en Pagaqui",
      
    },

       {
        title: "Como puedo consultar mi saldo en Pagaqui",
      
    },

    {
        title: "Que puedo hacer en Recargaki/Planetaemx",
      
    },

    {
        title: " Como ingreso a Planetaemx",
      
    },

    {
        title: "Como funciona la comision en Planetaemx",
      
    },

    {
        title: "En donde puede consutar los manuales de planetaemx",
    
    },

    {
        title: " Como puedo descargar Recargaki para mi teléfono celular",
    
    },

    {
        title: "Donde puedo consultar las cuentas para depositar o transferir para recargar saldo en Planetaemx",
      
    },

    {
        title: "En donde reporto mis depositos en Planetaemx",
     
    },
];

getTitleFaqs(): faqHead[] {
    return this.titleFaq;
}

}

