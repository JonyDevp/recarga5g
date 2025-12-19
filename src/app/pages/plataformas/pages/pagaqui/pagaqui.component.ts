import {
  Component,
  OnInit,
  inject,
  signal,
  computed,
} from '@angular/core';

import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

//* Servicios importados
import { SeoService } from '@shared/services/seo.service';
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
import { ThemesService } from '@shared/services/themes.service';
import { AdvantageList } from '@interfaces/advantage-list.interface';
import { ProductCardsComponent } from '@plataformas/components/product-cards/product-cards.component';

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
    ProductCardsComponent,
    RegisterStepsComponent,
    DoubtsComponent
]
})
export default class PlataformaPagaquiComponent implements OnInit {

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

  private readonly productCarouselService = inject(ProductCarouselService);
  private readonly pagaquiService = inject(PagaquiService);

  private readonly metaTagService = inject(SeoService);
  private readonly title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com: Pagaqui tu plataforma para vender recargas telcel y mas compañias en méxico'
    );
  
    this.metaTagService.updateMetaTag(
      {
        title: 'Recarga5g.com: Pagaqui tu plataforma para vender recargas telcel y mas compañias en méxico',
        description: 'Plataforma para venta de recargas electrónicas Telcel, y mas servicios en MX, desde tu negocio',
        keywords: 'pagaqui, venta de recargas telcel, recargas telcel, tiempo aire telcel, vender recargas telcel, contacto pagaqui, cuentas pagaqui, vender recargas mexico, ayuda pagaqui, plataforma pagaqui, plataforma para vender recargas, recargas electrónicas, recargas bait, vender recargas bait, tiempo aire bait, comision por venta de recargas, comision 7%, plataforma para vender recargas electrónicas, pagina para vender recargas, app pagaqui, aplicación pagaqui, plataforma para vender tiempo aire, plataforma para vender recargas telefonicas, contacto pagaqui, ayuda pagaqui',
        url: '/plataformas/pagaqui',
        typeContent: 'website'
      }
    );
    this.theme.initTheme();
  this.productCarousel = this.productCarouselService.getRecargas();
    this.appPagaqui = this.pagaquiService.getAppPagaqui();
  

  }


}
