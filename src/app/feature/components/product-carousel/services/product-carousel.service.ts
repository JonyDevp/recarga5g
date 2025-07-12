import { Injectable, signal } from '@angular/core';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductCarouselService {
  constructor() {}

  #recargas = signal<ProductCarousel[]>([
    {
      id: 1,
      company: 'Telcel',
      typeService: 'Recargas',
      img: {
        id: 1,
        src: '/assets/img/companies/recargas/telcel.webp',
        alt: 'Venta de recargas Telcel',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.telcel.com/'
    },

    {
      id: 2,
      company: 'Bait',
      typeService: 'Recargas',
      img: {
        id: 2,
        src: '/assets/img/companies/recargas/bait.webp',
        alt: 'venta de recargas Bait',
        width: '300',
        height: '109'
      },
      siteweb: 'https://mibait.com/'
    },

    {
      id: 3,
      company: 'Unefon',
      typeService: 'Recargas',
      img: {
        id: 3,
        src: '/assets/img/companies/recargas/unefon.webp',
        alt: 'venta de recargas unefon',
        width: '300',
        height: '109'
      },
      siteweb: 'https://unefon.com.mx/'
    },

    {
      id: 4,
      company: 'AT&T',
      typeService: 'Recargas',
      img: {
        id: 4,
        src: '/assets/img/companies/recargas/att.webp',
        alt: 'venta de recargas AT&T',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.att.com.mx/'
    },

    {
      id: 5,
      company: 'Virgin Mobile',
      typeService: 'Recargas',
      img: {
        id: 5,
        src: '/assets/img/companies/recargas/virgin.webp',
        alt: 'venta de recargas Virgin',
        width: '300',
        height: '109'
      },
      siteweb: 'https://virginmobile.mx/'
    },

    {
      id: 6,
      company: 'Movistar',
      typeService: 'Recargas',
      img: {
        id: 6,
        src: '/assets/img/companies/recargas/movistar.webp',
        alt: 'venta de recargas Movistar',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.movistar.com.mx/'
    },

    {
      id: 7,
      company: 'Weex',
      typeService: 'Recargas',
      img: {
        id: 7,
        src: '/assets/img/companies/recargas/weex.webp',
        alt: 'venta de recargas Weex',
        width: '300',
        height: '109'
      },
      siteweb: 'https://weex.mx/'
    },

    {
      id: 8,
      company: 'Gugacom',
      typeService: 'Recargas',
      img: {
        id: 8,
        src: '/assets/img/companies/recargas/gugacom.webp',
        alt: 'https://queplan.mx/gugacom',
        width: '300',
        height: '109'
      },
    },

    {
      id: 9,
      company: 'Wimotelecom',
      typeService: 'Recargas',
      img: {
        id: 9,
        src: '/assets/img/companies/recargas/wimotelecom.webp',
        alt: 'Venta de recargas Wimotelecom',
        width: '300',
        height: '109'
      },
      siteweb:'https://www.wimotelecom.com/'
    },

    {
      id: 10,
      company: 'OUI',
      typeService: 'Recargas',
      img: {
        id: 10,
        src: '/assets/img/companies/recargas/oui.webp',
        alt: 'Venta de recargas Oui',
        width: '300',
        height: '109'
      },
      siteweb: 'https://ouimovil.com/'
    },

    {
      id: 11,
      company: 'Internet del bienestar',
      typeService: 'Recargas',
      img: {
        id: 11,
        src: '/assets/img/companies/recargas/internetparaelbienestar.webp',
        alt: 'Venta de recargas Internet para el Bienestar',
        width: '300',
        height: '109'
      },
      siteweb: 'https://internetparaelbienestar.mx/'
    },

    {
      id: 12,
      company: 'Flash Mobile MX',
      typeService: 'Recargas',
      img: {
        id: 12,
        src: '/assets/img/companies/recargas/flashmobile.webp',
        alt: 'Venta de recargas Flash Mobile Mx',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.miflashmobile.mx/homepage'
    },

    {
      id: 13,
      company: 'ABIB',
      typeService: 'Recargas',
      img: {
        id: 13,
        src: '/assets/img/companies/recargas/abib.webp',
        alt: 'Venta de recargas ABIB',
        width: '300',
        height: '109'
      },
      siteweb: 'https://abib.com.mx/#/inicio'
    },
  
    {
      id: 14,
      company: 'bigcel',
      typeService: 'Recargas',
      img: {
        id: 14,
        src: '/assets/img/companies/recargas/bigcel.webp',
        alt: 'Venta de recargas bigcel',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.bigcel.mx/?lang=es'
    },
    
    {
      id: 15,
      company: 'mimovil',
      typeService: 'Recargas',
      img: {
        id: 15,
        src: '/assets/img/companies/recargas/mimovil.webp',
        alt: 'Venta de recargas mimovil',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.mimovil.com.mx/'
    },
  
    {
      id: 16,
      company: 'newww',
      typeService: 'Recargas',
      img: {
        id: 16,
        src: '/assets/img/companies/recargas/newww.webp',
        alt: 'Venta de recargas newww',
        width: '300',
        height: '109'
      },
      siteweb: 'https://newww.mx/'
    },
    
    {
      id: 17,
      company: 'vasanta',
      typeService: 'Recargas',
      img: {
        id: 17,
        src: '/assets/img/companies/recargas/vasanta.webp',
        alt: 'Venta de recargas vasanta',
        width: '300',
        height: '109'
      },
      siteweb: 'https://tienda.vasanta.com.mx/'
    },

    {
      id: 18,
      company: 'Pillofon',
      typeService: 'Recargas',
      img: {
        id: 18,
        src: '/assets/img/companies/recargas/pillofon.webp',
        alt: 'Venta de recargas pillofon',
        width: '300',
        height: '109'
      },
      siteweb: 'https://pillofon.mx/'
    },

    {
      id: 19,
      company: 'Soriana',
      typeService: 'Recargas',
      img: {
        id: 19,
        src: '/assets/img/companies/recargas/sorianamovil.webp',
        alt: 'Venta de recargas Soriana movil',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.sorianamovil.com/'
    },
  

    {
      id: 20,
      company: 'Rincel',
      typeService: 'Recargas',
      img: {
        id: 20,
        src: '/assets/img/companies/recargas/rincel.webp',
        alt: 'Venta de recargas Rincel',
        width: '300',
        height: '109'
      },
      siteweb: 'https://rincel.com.mx/'
    },
  


    {
      id: 20,
      company: 'Axios',
      typeService: 'Recargas',
      img: {
        id: 20,
        src: '/assets/img/companies/recargas/axios.webp',
        alt: 'Venta de recargas Axios',
        width: '300',
        height: '109'
      },
      siteweb: 'https://axiosmobile.mx/'
    },
  


  ]);

  #servicios = signal<ProductCarousel[]>([
    {
      id: 100,
      company: 'Telmex',
      typeService: 'Servicios',
      img: {
        id: 100,
        src: '/assets/img/companies/servicios/telmex.webp',
        alt: 'Pago de servicio Telmex',
        width: '300',
        height: '109'
      },
      siteweb: 'https://telmex.com/'
    },

    {
      id: 101,
      company: 'TotalPlay',
      typeService: 'Servicios',
      img: {
        id: 101,
        src: '/assets/img/companies/servicios/totalplay.webp',
        alt: 'Compañia para cobro de servicio Total Play',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.totalplay.com.mx/'
    },

    {
      id: 102,
      company: 'Sky',
      typeService: 'Servicios',
      img: {
        id: 102,
        src: '/assets/img/companies/servicios/sky.webp',
        alt: 'Pago de servicio Sky',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.sky.com.mx/'
    },

    {
      id: 103,
      company: 'IZZI',
      typeService: 'Servicios',
      img: {
        id: 103,
        src: '/assets/img/companies/servicios/izzi.webp',
        alt: 'Pago de servicios IZZI',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.izzi.mx/home'
    },

    {
      id: 104,
      company: 'CFE',
      typeService: 'Servicios',
      img: {
        id: 104,
        src: '/assets/img/companies/servicios/cfe.webp',
        alt: 'Pago de servicios CFE',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.cfe.mx/Pages/default.aspx'
    },

    {
      id: 105,
      company: 'Dish',
      typeService: 'Servicios',
      img: {
        id: 105,
        src: '/assets/img/companies/servicios/dish.webp',
        alt: 'Pago de servicios Dish',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.dish.com.mx/'
    },

    {
      id: 106,
      company: 'Infonavit',
      typeService: 'Servicios',
      img: {
        id: 106,
        src: '/assets/img/companies/servicios/infonavit.webp',
        alt: 'Pago de servicios Infonavit',
        width: '300',
        height: '109'
      },
      siteweb: 'https://micuenta.infonavit.org.mx/'
    },

    {
      id: 107,
      company: 'Avon',
      typeService: 'Servicios',
      img: {
        id: 107,
        src: '/assets/img/companies/servicios/avon.webp',
        alt: 'Pago de servicios Avon',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.mx.avon.com/REPSuite/loginMain.page'
    },

    {
      id: 108,
      company: 'Jafra',
      typeService: 'Servicios',
      img: {
        id: 108,
        src: '/assets/img/companies/servicios/jafra.webp',
        alt: 'Pago de servicios Jafra',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.jafra.com.mx/'
    },

    {
      id: 109,
      company: 'Tupperware',
      typeService: 'Servicios',
      img: {
        id: 109,
        src: '/assets/img/companies/servicios/tupperware.webp',
        alt: 'Pago de servicios Tupperware',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.tupperware.com.mx/'
    },

    {
      id: 110,
      company: 'Gas natural Natury',
      typeService: 'Servicios',
      img: {
        id: 110,
        src: '/assets/img/companies/servicios/gas_natural.webp',
        alt: 'Pago de servicios gas natural Natury',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.naturgy.com.mx/'
    },

    {
      id: 111,
      company: 'Televia',
      typeService: 'Servicios',
      img: {
        id: 111,
        src: '/assets/img/companies/servicios/televia.webp',
        alt: 'Pago de servicios televia',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.televia.com.mx/'
    },

    {
      id: 112,
      company: 'Lbel',
      typeService: 'Servicios',
      img: {
        id: 112,
        src: '/assets/img/companies/servicios/lebel.webp',
        alt: 'Pago de servicios Lbel',
        width: '300',
        height: '109'
      },
      siteweb: 'https://lbel.tiendabelcorp.com.mx/'
    },

    {
      id: 113,
      company: 'Elektra',
      typeService: 'Servicios',
      img: {
        id: 113,
        src: '/assets/img/companies/servicios/elektraabonossemanales.webp',
        alt: 'Pago de servicios Elektra',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.elektra.mx/'
    },

    
    {
      id: 114,
      company: 'arabela',
      typeService: 'Servicios',
      img: {
        id: 114,
        src: '/assets/img/companies/servicios/arabela.webp',
        alt: 'Pago de servicios arabela',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.arabela.com/'
    },

    {
      id: 115,
      company: 'AT&T',
      typeService: 'Servicios',
      img: {
        id: 115,
        src: '/assets/img/companies/servicios/attfactura.webp',
        alt: 'Pago de servicios AT&T factura',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.att.com.mx/'
    },


    {
      id: 116,
      company: 'Belcorp',
      typeService: 'Servicios',
      img: {
        id: 116,
        src: '/assets/img/companies/servicios/belcorp.webp',
        alt: 'Pago de servicios Belcorp',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.somosbelcorp.com/'
    },


    {
      id: 117,
      company: 'Calzado Andrea',
      typeService: 'Servicios',
      img: {
        id: 117,
        src: '/assets/img/companies/servicios/calzadoandrea.webp',
        alt: 'Pago de servicios Calzado Andrea',
        width: '300',
        height: '109'
      },
      siteweb: 'https://mx.andrea.com/'
    },

    {
      id: 118,
      company: 'VETV',
      typeService: 'Servicios',
      img: {
        id: 118,
        src: '/assets/img/companies/servicios/vetv.webp',
        alt: 'Pago de servicios VETV',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.sky.com.mx/servicios/satelital?plan=prepago'
    },

    {
      id: 119,
      company: 'Gobierno de México',
      typeService: 'Servicios',
      img: {
        id: 119,
        src: '/assets/img/companies/servicios/gobiernomexico.webp',
        alt: 'Pago de servicios Gobierno de México',
        width: '300',
        height: '109'
      },
      siteweb: 'https://sfpya.edomexico.gob.mx/recaudacion/'
    },

    {
      id: 120,
      company: 'Fuller',
      typeService: 'Servicios',
      img: {
        id: 120,
        src: '/assets/img/companies/servicios/fuller.webp',
        alt: 'Pago de servicios Fuller',
        width: '300',
        height: '109'
      },
      siteweb: 'https://fuller.com.mx/'
    },

    {
      id: 121,
      company: 'Gobierno de Veracruz',
      typeService: 'Servicios',
      img: {
        id: 121,
        src: '/assets/img/companies/servicios/gobierno_veracruz.webp',
        alt: 'Pago de servicios Gobierno de Veracruz',
        width: '300',
        height: '109'
      },
      siteweb: 'https://ovh.veracruz.gob.mx/ovh/loginTenencia.jsp'
    },

    {
      id: 122,
      company: 'Ilusion',
      typeService: 'Servicios',
      img: {
        id: 122,
        src: '/assets/img/companies/servicios/ilusion.webp',
        alt: 'Pago de servicios Ilusion',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.ilusion.com/'
    },

    {
      id: 123,
      company: 'Stanhome',
      typeService: 'Servicios',
      img: {
        id: 123,
        src: '/assets/img/companies/servicios/stanhome.webp',
        alt: 'Pago de servicios Stanhome',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.stanhome.com.mx/'
    },

    {
      id: 124,
      company: 'Betterware',
      typeService: 'Servicios',
      img: {
        id: 124,
        src: '/assets/img/companies/servicios/betterware.webp',
        alt: 'Pago de servicios Betterware',
        width: '300',
        height: '109'
      },
      siteweb: 'https://betterware.com.mx/'
    },


    {
      id: 124,
      company: 'Price Shoes',
      typeService: 'Servicios',
      img: {
        id: 124,
        src: '/assets/img/companies/servicios/priceshoes.webp',
        alt: 'Pago de servicios Price shoes',
        width: '300',
        height: '109'
      },
      siteweb: 'https://www.priceshoes.com//'
    },



  ]);

  #pines = signal<ProductCarousel[]>([
    {
      id: 200,
      company: 'Google Play',
      typeService: 'Pines',
      img: {
        id: 200,
        src: '/assets/img/companies/pines/googleplay100.webp',
        alt: 'Venta de pines google play',
        width: '241',
        height: '351'
        
      },
      siteweb: 'https://play.google.com/store/games?hl=es_MX'
    },

    {
      id: 201,
      company: 'Spotify',
      typeService: 'Pines',
      img: {
        id: 201,
        src: '/assets/img/companies/pines/spotify115.png',
        alt: 'Venta de pines spotify',
         width: '241',
        height: '351'
      },
      siteweb: 'https://open.spotify.com/intl-es'
    },


    {
      id: 202,
      company: 'Netflix',
      typeService: 'Pines',
      img: {
        id: 202,
        src: '/assets/img/companies/pines/netflix.png',
        alt: 'Venta de pines Netflix',
         width: '241',
        height: '351'
      },
      siteweb: 'https://www.netflix.com/mx/'
    },

    {
      id: 203,
      company: 'Steam',
      typeService: 'Pines',
      img: {
        id: 203,
        src: '/assets/img/companies/pines/steam215.webp',
        alt: 'Venta de pines Steam',
         width: '241',
        height: '351'
      },
      siteweb: 'https://store.steampowered.com/?l=spanish'
    },

    {
      id: 204,
      company: 'Cinepolis',
      typeService: 'Pines',
      img: {
        id: 204,
        src: '/assets/img/companies/pines/cinepolis_vip.png',
        alt: 'Venta de pines Cinepolis',
         width: '241',
        height: '351'
      },
      siteweb: 'https://store.steampowered.com/?l=spanish'
    },

    {
      id: 205,
      company: 'Nintendo',
      typeService: 'Pines',
      img: {
        id: 205,
        src: '/assets/img/companies/pines/nintendo.webp',
        alt: 'venta de pines Nintendo',
         width: '241',
        height: '351'
      },
      siteweb: 'https://www.nintendo.com/es-mx/'
    },

    {
      id: 206,
      company: 'Amazon',
      typeService: 'Pines',
      img: {
        id: 206,
        src: '/assets/img/companies/pines/amazon_gift300.png',
        alt: 'Venta de pines Amazon',
        width: '241',
        height: '351'
      
      },
      siteweb: 'https://www.amazon.com.mx/'
    },

    {
      id: 207,
      company: 'STARBUCKS',
      typeService: 'Pines',
      img: {
        id: 207,
        src: '/assets/img/companies/pines/starbucks_card200.png',
        alt: 'Venta de pines STARBUCKS',
         width: '241',
        height: '351'
      },
      siteweb: 'https://www.starbucks.com.mx/'
    },

    {
      id: 208,
      company: 'Free Fire',
      typeService: 'Pines',
      img: {
        id: 208,
        src: '/assets/img/companies/pines/free_fire199.webp',
        alt: 'Venta de pines Free Fire',
         width: '241',
        height: '351'
      },
      siteweb: 'https://play.google.com/store/apps/details?id=com.dts.freefiremax&hl=es_MX'
    },

    {
      id: 209,
      company: 'Microsoft 365 Empresas',
      typeService: 'Pines',
      img: {
        id: 209,
        src: '/assets/img/companies/pines/microsoft365empresa3949.webp',
        alt: 'Venta de pines Microsoft 365 Empresas',
         width: '241',
        height: '351'
      },
      siteweb: 'https://www.microsoft.com/es-mx/microsoft-365/business'
    },

    {
      id: 210,
      company: 'Roblox',
      typeService: 'Pines',
      img: {
        id: 210,
        src: '/assets/img/companies/pines/roblox200.webp',
        alt: 'Venta de pines Roblox',
         width: '241',
        height: '351'
      },
      siteweb: 'https://www.roblox.com/es'
    },

    {
      id: 211,
      company: 'Uber eats',
      typeService: 'Pines',
      img: {
        id: 211,
        src: '/assets/img/companies/pines/uber_eats300.webp',
        alt: 'Venta de pines Uber Eats',
         width: '241',
        height: '351'
      },
      siteweb: 'https://www.ubereats.com/mx'
    },

    {
      id: 212,
      company: 'Cinemex',
      typeService: 'Pines',
      img: {
        id: 212,
        src: '/assets/img/companies/pines/cinemex120.webp',
        alt: 'Venta de pines Cinemex',
         width: '241',
        height: '351'
      },
      siteweb: 'https://www.cimex.com.mx/es/'
    },

    {
      id: 213,
      company: 'Liverpool',
      typeService: 'Pines',
      img: {
        id: 213,
        src: '/assets/img/companies/pines/liverpool2000.png',
        alt: 'Venta de pines Liverpool',
         width: '241',
        height: '351'
      },
      siteweb: 'https://www.liverpool.com.mx/tienda/home'
    },

    {
      id: 214,
      company: 'Razer gold',
      typeService: 'Pines',
      img: {
        id: 214,
        src: '/assets/img/companies/pines/rixty600.webp',
        alt: 'Venta de pines Razer gold',
         width: '241',
        height: '351'
      },
      siteweb: 'https://gold.razer.com/mx/es'
    },

    {
      id: 214,
      company: 'Yotube Premium',
      typeService: 'Pines',
      img: {
        id: 214,
        src: '/assets/img/companies/pines/youtube139.webp',
        alt: 'Venta de pines YouTube Premium',
         width: '241',
        height: '351'
      },
      siteweb: 'https://www.youtube.com/'
    },
  ]);

  #carosuel = signal<ProductCarousel[]>([
    ...this.#recargas(),
    ...this.#servicios(), 
  ]);

  #allProducts = signal<ProductCarousel[]>([
    ...this.#recargas(),
    ...this.#servicios(),
    ...this.#pines()
  ]);

  getRecargas(): ProductCarousel[] {
    return this.#recargas();
  }

  getServicios(): ProductCarousel[] {
    return this.#servicios();
  }

  getPines(): ProductCarousel[] {
    return this.#pines();
  }


  getProductCarousel(): ProductCarousel[] {
    	return this.#carosuel()
  }

  getAllProducts(): ProductCarousel[] {
    return this.#allProducts();
  }
}
