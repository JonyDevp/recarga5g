import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink, NgClass],
  templateUrl: `products.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent { 

  bgBtn = input.required<string>();

  ourProduct: products[] = [
    {
      id: 1, 
      subtitle: 'Excelentes comisiones',
      title: 'Venta de recargas telefónicas',
      description: 'Venta de recargas telefónicas para todos los operadores móviles, incluyendo Telcel, Movistar, AT&T, y más. Con nosotros, podrás realizar recargas al instante, las 24 horas del día, los 7 días de la semana, desde la comodidad de tu hogar o negocio.',
      link: '/productos/recargas',
      companies: [
        {
          company: 'Telcel',
          title: 'Vende recargas Telcel',
          linkCompany: 'https://www.telcel.com/',
          img: {
            src: 'assets/img/companies/recargas/telcel.webp',
            alt: 'Venta de recargas telcel',
          }
        },

        {
          company: 'Movistar',
          linkCompany: 'https://www.movistar.com.mx/',
          title: 'Vende recargas Movistar',
          img: {
            src: 'assets/img/companies/recargas/movistar.webp',
            alt: 'Venta de recargas Movistar'
          }
        },

        {
          company: 'Bait',
          title: 'Vende recargas Bait',
          linkCompany:'https://mibait.com/',
          img: {
            src: 'assets/img/companies/recargas/bait.webp',
            alt: 'Venta de recargas Bait'
          }
        },

        {
          company: 'Virgin Mobile',
          title: 'Vende recargas Virgin',
          linkCompany: 'https://virginmobile.mx/',
          img: {
            src: 'assets/img/companies/recargas/virgin.webp',
            alt: 'Venta de recargas virgin Mobile'
          }
        },

        {
          company: 'ATT',
          title: 'Vende recargas AT&T',
          linkCompany: 'https://www.att.com.mx/',
          img: {
            src: 'assets/img/companies/recargas/att.webp',
            alt: 'Venta de recargas AT&T'
          }
        },

        {
          company: 'Axios Mobile',
          title: 'Vende recargas Axios',
          linkCompany: 'https://axiosmobile.mx/',
          img: {
            src: 'assets/img/companies/recargas/axios.webp',
            alt: 'Venta de recargas Axios Mobile'
          }
        },

        {
          company: 'Vasanta',
          title: 'Vende recargas Vasanta',
          linkCompany: 'https://tienda.vasanta.com.mx/',
          img: {
            src: 'assets/img/companies/recargas/vasanta.webp',
            alt: 'Venta de recargas Vasanta'
          }
        },

        {
          company: 'Unefon',
          title: 'Vende recargas Unefon',
          linkCompany: 'https://unefon.com.mx/',
          img: {
            src: 'assets/img/companies/recargas/unefon.webp',
            alt: 'Venta de recargas Unefon'
          }
        },

        {
          company: 'Internet del bienestar',
          title: 'Vende recargas internet del bienestar',
          linkCompany: 'https://internetparaelbienestar.mx/',
          img: {
            src: 'assets/img/companies/recargas/internetparaelbienestar.webp',
            alt: 'Venta de recargas Bienestar'
          }
        },
      ]
    },

    {
      id: 2, 
      subtitle: 'Excelentes comisiones',
      title: 'Pago de servicios',
      description: 'Podrás realizar recargas al instante, las 24 horas del día, los 7 días de la semana, desde la comodidad de tu hogar o negocio',
      link: '/productos/servicios',
      companies: [
        {
          company: 'CFE',
          title: 'Cobra todos los recibos CFE',
          linkCompany: 'https://www.cfe.mx/Pages/default.aspx',
          img: {
            src: 'assets/img/companies/servicios/cfe.webp',
            alt: 'cobro de servicios CFE'
          }
        },

        {
          company: 'Dish',
          title: 'Cobra todos los recibos Dish',
          linkCompany: 'https://www.dish.com.mx/',
          img: {
            src: 'assets/img/companies/servicios/dish.webp',
            alt: 'Cobro de servicios Dish'
          }
        },

        {
          company: 'Telmex',
          title: 'Cobra los recibos Telmex',
          linkCompany: 'https://telmex.com/',
          img: {
            src: 'assets/img/companies/servicios/telmex.webp',
            alt: 'Cobro de servicios Telmex'
          }
        },


        {
          company: 'Televia',
          title: 'Cobra los servicios Televia',
          linkCompany: 'https://www.televia.com.mx/',
          img: {
            src: 'assets/img/companies/servicios/televia.webp',
            alt: 'Cobro de servicios Televia'
          }
        },


        {
          company: 'Jafra',
          title: 'Cobra los recibos Jafra',
          linkCompany: 'https://www.jafra.com.mx/',
          img: {
            src: 'assets/img/companies/servicios/jafra.webp',
            alt: 'Cobro de servicios Jafra'
          }
        },


        {
          company: 'Vetv',
          title: 'Cobra los recibos VeTV SKY',
          linkCompany: 'https://www.sky.com.mx/servicios/satelital?plan=prepago',
          img: {
            src: 'assets/img/companies/servicios/vetv.webp',
            alt: 'Cobro de servicios Vetv'
          }
        },

        {
          company: 'Andrea',
          title: 'Cobra el catalago de tus zapatos',
          linkCompany: 'https://mx.andrea.com/',
          img: {
            src: 'assets/img/companies/servicios/calzadoandrea.webp',
            alt: 'Cobro de servicios Andrea'
          }
        },

        {
          company: 'Megacable',
          title: 'Cobra los recibos Megacable',
          linkCompany: 'https://www.megacable.com.mx/',
          img: {
            src: 'assets/img/companies/servicios/megacable.webp',
            alt: 'Cobro de servicios Megacable'
          }
        },
    
      ]
    },

    {
      id: 3,
      subtitle: 'Excelentes comisiones',
      title: 'Gift Card',
      description: 'Venta de pines electrónicos para videojuegos, plataformas de streaming y otros servicios digitales, ideales para negocios que buscan diversificar su oferta y aumentar sus ingresos.',
      link: '/productos/pines',
      companies: [
        {
          company: 'Netflix',
          title: 'Adquiere y vende tarjeta de regalo Netflix',
          linkCompany: 'https://www.netflix.com/mx/',
          img: {
            src: 'assets/img/companies/pines/netflix.png',
            alt: 'Venta de giftcard Netflix'
          }
        },

        {
          company: 'Google Play',
          title: 'Adquiere y vende tarjeta de regalo Google Play',
          linkCompany: 'https://play.google.com/store/games?hl=es_MX',
          img: {
            src: 'assets/img/companies/pines/googleplay100.webp',
            alt: 'Venta de giftcard Google Play'
          }
        },

        {
          company: 'Amazon Prime Video',
          title: 'Adquiere y vende tarjeta de regalo Amazon Prime Video',
          linkCompany: 'https://www.primevideo.com/offers/nonprimehomepage',
          img: {
            src: 'assets/img/companies/pines/amazonprimevideounmes.webp',
            alt: 'Venta de giftcard Amazon Prime Video'
          }
        }
      ]
    },

    {
      id: 4,
      subtitle: 'Proximamente..',
      title: 'Terminales para puntos de venta',
      description: 'Automiza y expande tus medios para el cobro de tus servicios, con excelentes comisiones, a traves de nuestras terminales',
      link: '/productos/terminales',
      img: { src: 'assets/img/terminales-thumbnail.webp', alt: 'Adquiere tu terminal con Recarga5g.com'}
    },

  ];
}


type products = {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  companies?: companies[];
  img?: {src: string; alt: string};
  link: string;
}

type companies = {
  company: string;
  title: string;
  linkCompany: string;
  img: {src: string; alt: string};

}