import {
  Component,
  OnInit,
  AfterViewInit,
  inject,
  signal,
  computed,
} from '@angular/core';

import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

//* Servicios importados
import { MetaTagService } from '@shared/services/meta-tag.service';
import { RegisterStepsService } from '@shared/services/register-steps.service';
import { PagaquiService } from './services/pagaqui.service';
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';
//* Components
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { AppRecargasComponent } from '../../../../feature/components/app-recargas/app-recargas.component';
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';
import { DoubtsComponent } from '@feature/components/doubts/doubts.component';
import { ProductsComponent } from '@plataformas/components/products/products.component';
import { ThemesService } from '@shared/services/themes.service';
import { AdvantageList } from '@interfaces/advantage-list.interface';

@Component({
    selector: 'app-plataforma-pagaqui',
    templateUrl: './pagaqui.component.html',
   styles: [`
   .app-pagaqui__li {
    counter-increment:indexApp;
   }

    `],
    imports: [
    RouterLink,
    ProductCarouselComponent,
    SalesMethodComponent,
    AppRecargasComponent,
    ProductsComponent,
    RegisterStepsComponent,
    DoubtsComponent
]
})
export default class PlataformaPagaquiComponent
  implements OnInit, AfterViewInit
{
  // @ViewChild('modalTemplate') template = {} as TemplateRef<any>;
  // @ViewChild('videoPagaqui') video?: ElementRef;

  handlerModalVideo = signal<boolean>(false);
  productCarousel: ProductCarousel[] = [];
  appPagaqui: CarouselApp[] = [];
 

  listBenefits: AdvantageList[] = [

    {
      id: 1,
      label: 'Unico saldo para recargas, servicios y pines',
      isActive: true,
    },

    {
      id: 2,
      label: 'Aplicación de compras con numero de referencia',
      isActive: false
    },

    {
      id: 3,
      label: 'Comisión por venta',
      isActive: false,
    },

    {
      id: 4,
      label: '+200 de compañias ',
      isActive: true
    }

  ];

 private readonly theme = inject(ThemesService);

 isDarkTheme = computed(() => this.theme.themeChange());

  //? META TAG
  // tag: metaTagModel = {
  //   title: 'Recarga5g.com | Consulta como vender recargas electrónicas',
  //   description:
  //     'Con un único saldo vende recargas electrónicas, pago de servicios y pines electrónicos hasta un 7% de comisión',
  //   keywords:
  //     'Pagaqui, cuentas Pagaqui, cuenta bancarias pagaqui, cuentas para saldo de recargas, app pagaqui, aplicación pagaqui, Plataforma para venta de recargas, Plataforma para venta de recargas telefonicas, manuales pagaqui, manual de usuario pagaqui, comision 7%, comisión por venta de recargas, Bait, venta de recargas bait, tiempo aire bait, vender recargas bait',
  //   url: 'recarga5g.com/plataforma/pagaqui',
  //   type: 'website',
  //   card: 'summary_large_image',
  //   creator: '@recargascelular',
  //   image: 'https://recarga5g.com/Venta-recargas.webp',
  // };

  
  private readonly productCarouselService = inject(ProductCarouselService);
  private readonly pagaquiService = inject(PagaquiService);

  private readonly metaTagService = inject(MetaTagService);
  private readonly title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com: Pagaqui plataforma para vender recargas telcel y mas compañias en méxico'
    );


  
    this.metaTagService.updateMetaTag(
      {
        title: 'Recarga5g.com: Pagaqui plataforma para vender recargas telcel y mas compañias en méxico',
        description: 'Plataforma para venta de recargas electrónicas Telcel, y mas servicios en MX, desde tu negocio',
        keywords: 'pagaqui, venta de recargas telcel, recargas telcel, tiempo aire telcel, vender recargas telcel, contacto pagaqui, cuentas pagaqui, vender recargas mexico',
        url: 'https://recarga5g.com/plataformas/pagaqui',
        typeContent: 'website'
      }
    );
    this.theme.initTheme();
  this.productCarousel = this.productCarouselService.getRecargas();
    this.appPagaqui = this.pagaquiService.getAppPagaqui();
  

  }

  ngAfterViewInit(): void {}

  openVideo(): void {

    this.handlerModalVideo.set(true);
  }

  closeVideo(): void {
    this.handlerModalVideo.set(false);
  }

  // closeVideo(): void {
  //   this.btnVideo.set(false);

  //   const stopVideo = this.video?.nativeElement;

  //   this.renderer2.removeAttribute(stopVideo, 'src');
  // }
}
