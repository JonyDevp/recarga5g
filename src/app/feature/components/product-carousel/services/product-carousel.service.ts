import { Injectable, signal } from '@angular/core';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductCarouselService {

  #recargas = signal<ProductCarousel[]>([
    {
      id: '0626406a-feac-466d-8dcd-5affd18b15ce',
      company: 'Telcel',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/telcel.webp',
        alt: 'Vende recargas telefonicas Telcel y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.telcel.com/'
    },

    {
      id: 'a5dfa0ae-67d1-4e9e-ac61-b4076b03fa16',
      company: 'Bait',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/bait.webp',
        alt: 'Vende recargas telefonicas Bait y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://mibait.com/'
    },

    {
      id: 'd88de639-c5b4-4ab4-9191-245eac205d71',
      company: 'Unefon',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/unefon.webp',
        alt: 'Vende recargas telefonicas Unefon y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://unefon.com.mx/'
    },

    {
      id: 'ca8e891e-822a-4c8f-b25c-febe836d1aed',
      company: 'AT&T',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/att.webp',
        alt: 'Vende recargas telefonicas AT&T y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.att.com.mx/'
    },

    {
      id: '0d1d7021-a167-42fd-aad7-04161b161bd1',
      company: 'Virgin Mobile',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/virgin.webp',
        alt: 'Vende recargas telefonicas Virgin mobile y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://virginmobile.mx/'
    },

    {
      id: '2b19e879-d1f0-467a-9887-5a9577dca10e',
      company: 'Movistar',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/movistar.webp',
        alt: 'Vende recargas telefonicas Movistar y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.movistar.com.mx/'
    },

    {
      id: 'bdc436db-f72b-4366-b1c8-17d7975a2ed0',
      company: 'Weex',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/weex.webp',
        alt: 'Vende recargas telefonicas Weex y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://weex.mx/'
    },

    {
      id: '7268cf6c-a589-4ddd-9991-82efc85336b5',
      company: 'Gugacom',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/gugacom.webp',
        alt: 'Vende recargas telefonicas Gugacom y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://queplan.mx/gugacom'
    },

    {
      id: 'f9d5f779-5ab8-4794-abbd-9ac4ed41b64e',
      company: 'Wimotelecom',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/wimotelecom.webp',
        alt: 'Vende recargas telefonicas Wimotelecom y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.wimotelecom.com/'
    },

    {
      id: 'b0a00613-57fc-4459-9451-192f84e62f8c',
      company: 'OUI',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/oui.webp',
        alt: 'Vende recargas telefonicas OUI y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://ouimovil.com/'
    },

    {
      id: 'fc677f93-ca1e-4b4f-bb9c-a830bbb4151e',
      company: 'Internet para el Bienestar',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/internetparaelbienestar.webp',
        alt: 'Vende recargas telefonicas Internet para el Bienestar y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://internetparaelbienestar.mx/'
    },

    {
      id: '073df8f5-cefb-4564-bdbd-476804447646',
      company: 'Flash Mobile MX',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/flashmobile.webp',
        alt: 'Vende recargas telefonicas Flash Mobile MX y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.miflashmobile.mx/homepage'
    },

    {
      id: 'd87d2dcc-54eb-4c1a-b565-6528dfe33cb7',
      company: 'ABIB',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/abib.webp',
        alt: 'Vende recargas telefonicas ABIB y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://abib.com.mx/#/inicio'
    },

    {
      id: '518e5aab-62a2-40a3-94e1-1231323d394a',
      company: 'bigcel',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/bigcel.webp',
        alt: 'Vende recargas telefonicas bigcel y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.bigcel.mx/?lang=es'
    },

    {
      id: '91d4ee01-8d18-4322-9180-6f5b717d1b47',
      company: 'mimovil',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/mimovil.webp',
        alt: 'Vende recargas telefonicas mimovil y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.mimovil.com.mx/'
    },

    {
      id: 'bed479d2-3b84-44f6-89f6-e23eda30119c',
      company: 'Newww',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/newww.webp',
        alt: 'Vende recargas telefonicas Newww y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://newww.mx/'
    },

    {
      id: '6a0af2b7-b995-47d3-ab27-e8dc62b58ee4',
      company: 'vasanta',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/vasanta.webp',
        alt: 'Vende recargas telefonicas Vasanta y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://tienda.vasanta.com.mx/'
    },

    {
      id: '64adaed4-9393-4e60-99f9-7b1311b244ff',
      company: 'Pillofon',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/pillofon.webp',
        alt: 'Vende recargas telefonicas Pillofon y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://pillofon.mx/'
    },

    {
      id: 'b92a5191-c19f-49a0-a2f8-aa0fa4f16e8a',
      company: 'Soriana',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/sorianamovil.webp',
        alt: 'Vende recargas telefonicas Soriana y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.sorianamovil.com/'
    },

    {
      id: '39045cf1-0834-4c4b-8e26-f70c75f926fb',
      company: 'Rincel',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/rincel.webp',
        alt: 'Vende recargas telefonicas Rincel y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://rincel.com.mx/'
    },

    {
      id: 'b05b5351-c1ec-4dbb-82db-21a95768b6b5',
      company: 'Axios',
      typeService: 'Recargas',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/recargas/axios.webp',
        alt: 'Vende recargas telefonicas Axios y gana excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://axiosmobile.mx/'
    },
  ]);

  #servicios = signal<ProductCarousel[]>([
    {
      id: '3622e62d-e9e5-4f07-aaa6-5c564013dc71',
      company: 'Telmex',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/telmex.webp',
        alt: 'Cobra pago de servicio Telmex y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://telmex.com/'
    },

    {
      id: '16f474a2-446c-4fd6-8808-d483dbef81c5',
      company: 'TotalPlay',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/totalplay.webp',
        alt: 'Cobra pago de servicio TotalPlay y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.totalplay.com.mx/'
    },

    {
      id: '00939f0a-3eb0-4855-8663-74332a3e2879',
      company: 'Sky',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/sky.webp',
        alt: 'Cobra pago de servicio SKY y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.sky.com.mx/'
    },

    {
      id: 'b71aa425-c588-4292-93fa-d772cf79c35d',
      company: 'IZZI',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/izzi.webp',
        alt: 'Cobra pago de servicio IZZI y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.izzi.mx/home'
    },

    {
      id: 'c57e9e7b-969e-4beb-be9a-4cb5b66cd045',
      company: 'CFE',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/cfe.webp',
        alt: 'Cobra pago de servicio CFE y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.cfe.mx/Pages/default.aspx'
    },

    {
      id: 'b2b81617-6f84-4acc-a79f-5246eb3d4b92',
      company: 'Dish',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/dish.webp',
        alt: 'Cobra pago de servicio Dish y obten una comisión extra a tu negocio | recarga5g.com'
      },
      siteweb: 'https://www.dish.com.mx/'
    },

    {
      id: '97f5d5b3-b824-4f04-a537-b1539a23775b',
      company: 'Infonavit',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/infonavit.webp',
        alt: 'Cobra pago de servicio Infonavit y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://micuenta.infonavit.org.mx/'
    },

    {
      id: '42617fb1-19d3-4df3-858d-991cc7f6020c',
      company: 'Avon',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/avon.webp',
        alt: 'Cobra pago de servicio Avon y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.mx.avon.com/REPSuite/loginMain.page'
    },

    {
      id: '2aff58eb-f911-46e5-8daa-ccbbd86cfe1b',
      company: 'Jafra',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/jafra.webp',
        alt: 'Cobra pago de servicio Jafra y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.jafra.com.mx/'
    },

    {
      id: '62dd45a8-0e1d-40e8-be66-d47ea65b2fec',
      company: 'Tupperware',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/tupperware.webp',
        alt: 'Cobra pago de servicio Tupperware y obten una comisión extra a tu negocio | recarga5g.com',

      },
      siteweb: 'https://www.tupperware.com.mx/'
    },

    {
      id: '14054cfb-60d1-426b-90e4-66eabdee8977',
      company: 'Gas natural Natury',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/gas_natural.webp',
        alt: 'Cobra pago de servicio Gas natural Natury y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.naturgy.com.mx/'
    },

    {
      id: '577ade7d-6e53-4858-a9df-6eb1a4037523',
      company: 'Televia',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/televia.webp',
        alt: 'Cobra pago de servicio Televia y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.televia.com.mx/'
    },

    {
      id: 'be3a7503-352d-463b-8776-43dfda0d6f5f',
      company: 'LBEL',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/lebel.webp',
        alt: 'Cobra pago de servicio LBEL y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://lbel.tiendabelcorp.com.mx/'
    },

    {
      id: '0d4417de-81c8-4b6f-99cc-21a5618b2ca6',
      company: 'Elektra',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/elektraabonossemanales.webp',
        alt: 'Cobra pago de servicio Elektra y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.elektra.mx/'
    },

    {
      id: '75b65093-2a5d-4b84-8ba5-f4cfc64bb91a',
      company: 'Arabela',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/arabela.webp',
        alt: 'Cobra pago de servicio Arabela y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.arabela.com/'
    },

    {
      id: '5c46a058-9632-4930-8af7-333df0da5bc0',
      company: 'AT&T',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/attfactura.webp',
        alt: 'Cobra pago de servicio AT&T factura y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.att.com.mx/'
    },

    {
      id: '2a0ef49e-0560-4d12-873c-65d749d4da7f',
      company: 'Belcorp',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/belcorp.webp',
        alt: 'Cobra pago de servicio Belcorp y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.somosbelcorp.com/'
    },

    {
      id: '14a519b0-2ee7-4fe3-b9b0-68b6ac27242d',
      company: 'Calzado Andrea',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/calzadoandrea.webp',
        alt: 'Cobra pago de servicio Calzado Andrea y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://mx.andrea.com/'
    },

    {
      id: 'dd2737b2-cdd5-4a19-9c6c-c908d691c80c',
      company: 'VETV',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/vetv.webp',
        alt: 'Cobra pago de servicio VETV y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.sky.com.mx/servicios/satelital?plan=prepago'
    },

    {
      id: '75834655-c599-4b99-84f0-90cea53bcd49',
      company: 'Fuller',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/fuller.webp',
        alt: 'Cobra pago de servicio Fuller y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://fuller.com.mx/'
    },

    {
      id: 'a699d2ab-53f4-468c-8f6f-70ef41e729d3',
      company: 'Ilusion',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/ilusion.webp',
        alt: 'Cobra pago de servicio Ilusion y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.ilusion.com/'
    },

    {
      id: 'fd3a7fe2-7e97-411d-a689-9d1165246d03',
      company: 'Stanhome',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/stanhome.webp',
        alt: 'Cobra pago de servicio Stanhome y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.stanhome.com.mx/'
    },

    {
      id: '92c80323-64c5-4646-9151-bd5d55da053a',
      company: 'Betterware',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/betterware.webp',
        alt: 'Cobra pago de servicio Betterware y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://betterware.com.mx/'
    },

    {
      id: '062c488d-1d9e-4b2b-ad4b-e71f5f808e58',
      company: 'Price Shoes',
      typeService: 'Servicios',
      img: {
        width: '300',
        height: '109',
        src: '/assets/img/companies/servicios/priceshoes.webp',
        alt: 'Cobra pago de servicio Price Shoes y obten una comisión extra a tu negocio | recarga5g.com',
      },
      siteweb: 'https://www.priceshoes.com//'
    },
  ]);

  #pines = signal<ProductCarousel[]>([
    {
      id: 'bbc966cd-1e09-4e6c-be2a-af43eee1a74a',
      company: 'Google Play',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/googleplay100.webp',
        alt: 'Vende tarjetas de regalo Google Play en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://play.google.com/store/games?hl=es_MX'
    },

    {
      id: '75111a96-d4da-41be-8537-996a185cde15',
      company: 'Spotify',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/spotify115.png',
        alt: 'Vende tarjetas de regalo Spotify desde en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://open.spotify.com/intl-es'
    },

    {
      id: '8bc4e528-ec4e-4039-adf0-afa95f880876',
      company: 'Netflix',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/netflix.png',
        alt: 'Vende tarjetas de regalo Netflix en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.netflix.com/mx/'
    },

    {
      id: 'eec34537-e013-4a0c-a361-f335f8fb5596',
      company: 'Steam',
      typeService: 'Pines',
      img: {
        src: '/assets/img/companies/pines/steam215.webp',
        alt: 'Vende tarjetas de regalo Steam en tu negocio con excelentes comisiones | recarga5g.com',
        width: '241',
        height: '351'
      },
      siteweb: 'https://store.steampowered.com/?l=spanish'
    },

    {
      id: 'f86fb33d-b898-47b3-bd73-b85787bb2cb9',
      company: 'Cinepolis',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/cinepolis_vip.png',
        alt: 'Vende tarjetas de regalo Cinepolis en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://store.steampowered.com/?l=spanish'
    },

    {
      id: '1844f87d-46ba-4cf6-9714-ef7c45f93909',
      company: 'Nintendo',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/nintendo.webp',
        alt: 'Vende tarjetas de regalo Nintendo en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.nintendo.com/es-mx/'
    },

    {
      id: '2555a13e-cc50-4df2-ae2b-eeb27d6e7414',
      company: 'Amazon',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/amazon_gift300.png',
        alt: 'Vende tarjetas de regalo Amazon en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.amazon.com.mx/'
    },

    {
      id: '4ee811ce-3fb1-429b-8c2e-1bec4afe2d74',
      company: 'STARBUCKS',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/starbucks_card200.png',
        alt: 'Vende tarjetas de regalo STARBUCKS en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.starbucks.com.mx/'
    },

    {
      id: '62bd4f56-97ef-4f5d-b25b-71c432ee2758',
      company: 'Free Fire',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/free_fire199.webp',
        alt: 'Vende tarjetas de regalo Free Fire en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://play.google.com/store/apps/details?id=com.dts.freefiremax&hl=es_MX'
    },

    {
      id: '9766191f-283d-4726-9d96-4cf6ad3efd34',
      company: 'Microsoft 365 Empresas',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/microsoft365empresa3949.webp',
        alt: 'Vende tarjetas de regalo Microsoft 365 Empresas en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.microsoft.com/es-mx/microsoft-365/business'
    },

    {
      id: 'e9db5a34-5229-404f-82ea-d5d28c5301d6',
      company: 'Roblox',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/roblox200.webp',
        alt: 'Vende tarjetas de regalo Roblox en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.roblox.com/es'
    },

    {
      id: 'a1c27d3c-3708-4f8b-8f5c-624ce1f3a9b4',
      company: 'Uber eats',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/uber_eats300.webp',
        alt: 'Vende tarjetas de regalo Uber eats en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.ubereats.com/mx'
    },

    {
      id: '33b28817-09e4-4a74-8e67-edcd34976031',
      company: 'Cinemex',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/cinemex120.webp',
        alt: 'Vende tarjetas de regalo Cinemex en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.cimex.com.mx/es/'
    },

    {
      id: '65b6db7d-b4e8-4acf-821f-c27fad970ad3',
      company: 'Liverpool',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/liverpool2000.png',
        alt: 'Vende tarjetas de regalo Liverpool en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://www.liverpool.com.mx/tienda/home'
    },

    {
      id: 'b7a9f5ee-368f-4fa6-aaf9-90af9f9d3adf',
      company: 'Razer gold',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/rixty600.webp',
        alt: 'Vende tarjetas de regalo Razer gold en tu negocio con excelentes comisiones | recarga5g.com',
      },
      siteweb: 'https://gold.razer.com/mx/es'
    },

    {
      id: '70364b03-0b98-49f2-a4f8-2a4868248c32',
      company: 'Yotube Premium',
      typeService: 'Pines',
      img: {
        width: '241',
        height: '351',
        src: '/assets/img/companies/pines/youtube139.webp',
        alt: 'Vende tarjetas de regalo YouTube Premiun en tu negocio con excelentes comisiones | recarga5g.com',
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
