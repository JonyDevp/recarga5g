import { inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SalesChannel } from 'src/app/interfaces/sales-channel';

@Injectable({
  providedIn: 'root'
})
export class MetodosVentaService {

    private readonly sanitizer = inject(DomSanitizer);
  

  channels: SalesChannel[] = [

    { 
      id: 1, 
      img: { src: 'assets/img/smart-devices.webp', alt: 'Venta de recargas en mexíco desde navegador' },
      title: "Plataforma Web",
      description: "Vende recargas Telcel, con excelentes comisiones, con tu smartphone o computadora ingresa al portal con tu navegador de preferencia.",
      modalInfo: {
        subTitle: "¿Como vender recarga desde una computadora?",
        description: "Venta de recargas AT&T desde un equipo de  computo",
        listSteps: [

          {
            id: 10,
            svgIcon: this.getSvg(``),
            info: "Equipo de computo"
          },

          {
            id: 11,
            svgIcon: this.getSvg(``),
            info: "Conexión a internet"
          },

          {
            id: 12,
            svgIcon: this.getSvg(``),
            info: "Navegador de su preferencia"
          },

          {
            id: 13,
            svgIcon: this.getSvg(``),
            info: "Link de acceso a la plataforma"
          },

          {
            id: 14,
            svgIcon: this.getSvg(``),
            info: "Datos de acceso"
          }
        ],

      },

    },

    {
      id: 2,
      img: { src: 'assets/img/smartphone.webp', alt: 'Venta de recargas telefonícas para Android y IOS' },
      title: "App",
      description: "Descarga la app desde la tienda oficial para vender recargas telcel en tu dispositivo Android o IOS.",
      modalInfo: {
        subTitle: "¿Como puedo vender recargas electrónicas desde mi celular o tablet",
        description: "Venta de recargas AT&T desde la App",
        listSteps: [
          { 
            id: 20,
            svgIcon: this.getSvg(``),
            info: "Descarga la App desde la tienda oficial"
          },

          { 
            id: 21,
            svgIcon: this.getSvg(``),
            info: "Datos de acceso"
          },

          {
            id: 22,
            svgIcon: this.getSvg(``),
            info: "Saldo suficiente"
          },

          {
            id: 23,
            svgIcon: this.getSvg(``),
            info: "Listo!! podras comenzar a realizar recargar y pagar servicios a cualquier compañia"
          }
        ],

      },
    },

    {
      id: 3,
      img: { src: 'assets/img/sms.webp', alt: 'Venta de recargas telefonícas via SMS' },
      title: "Vía SMS",
      description: "Vender recargas electrónicas enviando un simple SMS. En tu telefono celular.",
      modalInfo: {

        subTitle: "¿Como puedo vender recargas electrónicas enviando un SMS?",
        description: "Venta de recargas vía SMS gratutito",
        listSteps: [
          {
            id: 30,
            svgIcon: this.getSvg(``),
            info: "Telefono celular"
          },

          {
            id: 31,
            svgIcon: this.getSvg(``),
            info: "Datos de acceso"
          },

          {
            id: 32,
            svgIcon: this.getSvg(``),
            info: "Vincular tu numero celular a la plataforma"
          },

          {
            id: 33,
            svgIcon: this.getSvg(``),
            info: "Saldo suficiente"
          },
        ],

      },
    },

  ];

  getmetodosVenta(): SalesChannel[] {
    return this.channels;
  }

  // openModal(item: any) {
  //   item.showModal = true;
  // }

  // closeModal(item: any) {
  //   item.showModal = false;
  // }

  getSvg(svgCode: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgCode);

  }

  constructor() { }



}
