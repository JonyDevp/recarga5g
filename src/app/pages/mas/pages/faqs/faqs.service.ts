import { ViewportScroller } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

constructor() { }

private viewScroll = inject(ViewportScroller);

faqsMenuOne: MenuFaq[] = [
    {
      label: 'Preguntas generales',
      id: 'preguntas-generales',
      menu: [
        { label: 'Beneficios', id: 'beneficios'},
        { label: 'Monto de inversión', id: 'monto-inversion' },
        { label: 'Comisiones', id: 'comisiones' },
        { label: 'Como registrarse', id: 'como-registrarse' },
        { label: 'Como comprar saldo', id: 'como-comprar-saldo' },
        { label: 'Equipo para vender recargas', id: 'equipo-recargas' },
        { label: 'Tiempo de aplicación de saldo', id: 'tiempo-saldo' },
        { label: 'Contratación', id: 'contratacion' },
      ],
    },

    { label: 'Asesoria', id: 'asesoria' },
];

faqsMenuTwo: MenuFaq[] = [
  {
    label: 'Pagaqui',
    id: 'pagaqui',
    menu: [
      { label: 'Que es Pagaqui', id: 'que-es-pagaqui'},
      { label: 'Que puedes hacer', id: 'que-hacer-pagaqui'},
      { label: 'Como ver mi comisión', id: 'ver-comisiones-pagaqui'},
      { label: 'Cuentas Pagaqui', id: 'cuentas-pagaqui'},
      { label: 'Comprar saldo Pagaqui', id: 'comprar-saldo-pagaqui'},
      { label: 'Pagar servicio Pagaqui', id: 'pagar-servicio-pagaqui'},
      { label: 'Contacto Pagaqui', id: 'contacto-pagaqui'},
    
    ]
  }
];

faqsMenuThree: MenuFaq[] = [
  {
    label: 'Planetaemx',
    id: 'planetaemx',
    menu: [
      { label: 'Que es Planetaemx', id: 'que-es-planetaemx'},
      { label: 'Que puedes hacer en Planetaemx', id: 'que-hacer-planetaemx'},
      { label: 'Como ver mi comisión en Planetaemx', id: 'ver-comisiones-planetaemx'},
      { label: 'Cuentas Planetaemx', id: 'cuentas-planetaemx'},
      { label: 'Comprar saldo en Planetaemx', id: 'comprar-saldo-planetaemx'},
      { label: 'Pagar servicio en Planetaemx', id: 'pagar-servicio-planetaemx'},
      { label: 'Contacto Planetaemx', id: 'contacto-planetaemx'},
    ]
  }
];

faqsMenuFour: MenuFaq[] = [
  {
    label: 'Terminales',
    id: '',
    menu: [
      { label: 'Que es', id: 'que-s-'},
      { label: 'Que puedes hacer', id: 'que-hcer'},
    
    
    ]
  }
];


private faqSections: {[key: string]: TitleSection[]} = {
  generales: [
    { label: '¿Qué Beneficios tengo al registrarme con Recarga5g.com?', id: 'beneficios' },
    { label: '¿Cuanto invertir para vender recargas?',  id: 'monto-inversion' },
    { label: '¿Que comisiones ofrecemos para vender tiempo aire?',  id: 'comisiones' },
    { label: '¿Como registrarme para vender recargas electrónicas en mi negocio?',  id: 'como-registrarse' },
    { label: '¿Como comprar saldo?',  id: 'como-comprar-saldo' },
    { label: '¿Qué necesito para vender recargas?',  id: 'equipo-recargas' },
    { label: '¿En cuánto tiempo puedo disponer de mi saldo?',  id: 'tiempo-saldo' },
    { label: '¿Debo firmar contrato o utilizar el servicio por algún tiempo determinado?',  id: 'contratacion' },
    // ... otros items
  ],
  pagaqui: [
    { label: '¿Qué es Pagaqui?', id: 'que-es-pagaqui' },
    { label: '¿Que puedo hacer en Pagaqui?',  id: 'que-hacer-pagaqui' },
    { label: 'Como ver mi comision en pagaqui',  id: 'ver-comisiones-pagaqui' },
    { label: 'Cuentas para depósitar o transferir en pagaqui',  id: 'cuentas-pagaqui' },
    { label: '¿Como comprar saldo en pagaqui?',  id: 'comprar-saldo-pagaqui' },
    { label: '¿Como pagar un servicio con pagaqui?', id: 'pagar-servicio-pagaqui'},
    { label: 'Reportar problema pagaqui', id: 'contacto-pagaqui'}
    // ... otros items
  ],

  planetaemx: [
    { label: '¿Qué es Planetaemx?', id: 'que-es-planetaemx' },
    { label: '¿Que puedo hacer en Planetaemx?',  id: 'que-hacer-planetaemx' },
    { label: 'Como ver mi comision en Planetaemx',  id: 'ver-comisiones-planetaemx' },
    { label: 'Cuentas para depósitar o transferir en Planetaemx',  id: 'cuentas-planetaemx' },
    { label: '¿Como comprar saldo en Planetaemx?',  id: 'comprar-saldo' },
    { label: '¿Como pagar un servicio con plnaetemx?', id: 'pagar-servicios-planetaemx'},
    { label: 'Reportar problema planetaemx', id: 'contacto-planetaemx'}
  ],

  terminales: [
    { label: '¿Que terminal es mejor para mi negocio?', id: 'mejor-terminal'}
  ]

  // ... otras secciones
};

getMenuOne(): MenuFaq[] {
  return this.faqsMenuOne;
}

getMenuTwo(): MenuFaq[] {
  return this.faqsMenuTwo;
}

getMenuThree(): MenuFaq[] {
  return this.faqsMenuThree;
}

getMenuFour(): MenuFaq[] {
  return this.faqsMenuThree;
}

getFaqSection(sectionKey: string): TitleSection[] {
  return this.faqSections[sectionKey] || [];
}

getAllFaqSections(): {[key: string]: TitleSection[]} {
  return this.faqSections;
}

scrollToAnchor(anchorID: string) {
  this.viewScroll.setOffset([0, 80]); // [x-offset, y-offset]
  this.viewScroll.scrollToAnchor(anchorID);
}

}

export interface MenuFaq {
  label: string;
  id: string;
  link?: string;
  menu?: MenuFaq[];
}

export interface TitleSection {
  label: string;
  id: string;
}