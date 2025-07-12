import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  ViewChildren,
  QueryList,
  signal,
  CUSTOM_ELEMENTS_SCHEMA,
  viewChild,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import {  Title } from '@angular/platform-browser';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';

//* Services
import { MetaTagService } from '@shared/services/meta-tag.service';
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';

//* Components
import { ProductsFilterComponent } from '@feature/components/products-filter/products-filter.component';
import AdvantageListComponent from '@feature/components/advantage-list/advantage-list.component';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { AppRecargasComponent } from '@feature/components/app-recargas/app-recargas.component';
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
//* Interfaces
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';

// import { SwiperOptions } from 'swiper/types';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';

import { CountUpModule } from 'ngx-countup';


import { BenefitsListModel } from 'src/app/interfaces/benefits-list.interface';
import { ReasonForSellingService } from '@shared/services/razones.service';
import { DoubtsComponent } from '@feature/components/doubts/doubts.component';
import { ProductComponent } from '@feature/components/product/product.component';
import { AdvantageListService } from './services/advantage-list.service';
import { AdvantageList } from '@interfaces/advantage-list.interface';
import { BusinessListService, BusinessType } from './services/business-list.service';
import { Testimonial, TestimonialService } from './services/testimonial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    NgOptimizedImage,
    RouterLink,
    ProductCarouselComponent,
    ProductsFilterComponent,
    SalesMethodComponent,
    AppRecargasComponent,
    AppRecargasComponent,
    AdvantageListComponent,
    RegisterStepsComponent,
    DoubtsComponent,
    ProductComponent,
    CountUpModule
],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('counter') countersElements!: QueryList<ElementRef>;
  typerWriterElement = viewChild<ElementRef>('typeWriter')
  // countersElements = viewChildren< QueryList<ElementRef> >('counter');
  private readonly platformId =inject(PLATFORM_ID);
  private readonly title = inject(Title);
  private readonly _metaTagService = inject(MetaTagService);
  private readonly _productCarouselService = inject(ProductCarouselService);
  private readonly reasonForSellingService = inject(ReasonForSellingService);
  private readonly advantageService = inject(AdvantageListService);
  private readonly bussinessListService = inject(BusinessListService);
  private readonly testimonialService = inject(TestimonialService);
  svgRef = viewChild.required<ElementRef>('svgContainer');

  allProducts:ProductCarousel[] = [];
  recargas:ProductCarousel[] = [];
  servicios:ProductCarousel[] = [];
  pines:ProductCarousel[] = [];
  listInversion: AdvantageList[] = [];
  businessList: BusinessType[] = [];
  reasonForSelling: BenefitsListModel[] = [];
  testimonialOne: Testimonial[] = [];
  testimonialTwo: Testimonial[] = [];
  testimonialThree: Testimonial[] = [];


  counterItems: Counter[] = [
    { label: 'Años en el mercado', value: 20 },
    { label: 'Clientes felices', value: 4000 },
    { label: 'Productos y compañías', value: 200 },
    { label: 'Puntos de venta', value: 5000 },
  ];

  initialValues = signal([0, 0, 0, 0]); // Valores iniciales de los contadores

  listApp = [
    {
      id: 1,
      title: 'Regístrate',
      label:
        'Llena un formulario con tus datos y espera nuestro correo con tus datos de acceso.',
    },

    {
      id: 2,
      title: 'Deposita',
      label:
        'Deposita desde una inversión mínima de $100, a una de las cuentas bancarias autorizadas.',
    },

    {
      id: 3,
      title: 'Notifica',
      label:
        'Notifica tu comprobante de pago en el portal, y obtén el monto correspondiente en saldo.',
    },

    {
      id: 4,
      title: 'Recibe',
      label: 'Obtén un porcentaje de comisión por cada venta que realices.',
    },

    // {
    //   id: 5,
    //   title: 'Recupera',
    //   label:
    //     '¡Listo! Así de fácil podrás recuperar tu inversión + una comisión extra a tu negocio, mientras ofrecer venta de recargas',
    // },
  ];

  carosuelAppImages: CarouselApp[] =[
    {
      id: 1,
      img: {
        src: '/assets/img/companies/recargas-app_light.webp',
        alt: 'App para venta de recargas',
      },
    },

    {
      id: 2,
      img: {
        src: '/assets/img/companies/servicios-app_light.webp',
        alt: 'App para pago de servicios',
      },
    },

    {
      id: 3,
      img: {
        src: '/assets/img/companies/pines-app_light.webp',
        alt: 'App para venta de pines electrónicos',
      },
    },
  ];

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com | Vende tiempo aire, pago de servicios y pines hasta un 7.5% de comisión'
    );

    this.allProducts = this._productCarouselService.getProductCarousel();
    this.listInversion = this.advantageService.listInversion;
    this.businessList = this.bussinessListService.businessList;
    this.recargas = this._productCarouselService.getRecargas();
    this.servicios = this._productCarouselService.getServicios();
    this.pines = this._productCarouselService.getPines();
    this.reasonForSelling = this.reasonForSellingService.getReasonForSelling();
    this.testimonialOne = this.testimonialService.testimonialListOne;
    this.testimonialTwo = this.testimonialService.testimonialListTwo;
    this.testimonialThree = this.testimonialService.testimonialListThree;

    this._metaTagService.updateMetaTag({
      title:
        'recarga5g.com | Vende recargas electrónicas, pago de servicios y pines hasta un 7.5% de comisión',
      description:
        'Descubre Recarga5G: gana hasta un 7.5% de comisión vendiendo recargas electrónicas, pago de servicios y pines. Fácil, rápido y rentable para tu negocio',
      keywords:
        'recarga5g, recarga5g.com, recargas electronicas 7.5% comision, recargas electronicas, comision 7.5 por la venta de recargas, sistema de recargas, pago de servicios, sistema de recargas, vender recargas multiregion, plataforma para vender recargas, venta de recargas, como vender recargas, app para recargas',
      url: 'https://recarga5g.com/',
      typeContent: 'website',
    });

  
  }

  ngAfterViewInit(): void {
 
  }

  //* FUNCTIONS FOR COUNTER RECORD SECTION
 

  //Función que maneja el incremento gradual de los números



}


 type Counter  = {
  label: string;
  value: number;
 }