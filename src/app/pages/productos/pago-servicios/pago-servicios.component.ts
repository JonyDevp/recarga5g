import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

//* Servicios importados
import { SeoService } from '@shared/services/seo.service';
import { ThemesService } from '@shared/services/themes.service';

//* COMPONENTS
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';
import { ProductComponent } from '@feature/components/product/product.component';
import { DoubtsComponent } from '@feature/components/doubts/doubts.component';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';

@Component({
  selector: 'app-pago-servicios',
  templateUrl: './pago-servicios.component.html',
  styles: [`
        .razones-list {
          border-image: linear-gradient(to right, transparent, rgb(148 163 184 / .25), transparent) 1;
        }
      `],
  imports: [
    RouterLink,
    ProductCarouselComponent,
    ProductComponent,
    SalesMethodComponent,
    RegisterStepsComponent,
    DoubtsComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PagoServiciosComponent implements OnInit {

  carouselServices : ProductCarousel[]=[];
  productServices: ProductCarousel[] = [];
  theme = inject(ThemesService);
  isDarkTheme = computed(() => this.theme.themeChange());
  private readonly metaTagService = inject(SeoService);

  private readonly productCarouselService = inject(ProductCarouselService);
  private readonly title = inject(Title);

  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com: Venta de cobro de servicios para todo negocio con +200 tipos de servicios: agua, luz, internet y más!');
   this.metaTagService.updateMetaTag({
      title: 'Recarga5g.com: Venta de cobro de servicios para todo negocio con +200 tipos de servicios: agua, luz, internet y más!',
      description: 'Descubre cómo cobrar recibos de servicios como Telmex, Izzi y CFE de manera fácil y segura con Recarga5g.com. ¡Empieza a ganar comisiones hoy mismo!',
      keywords: 'pago de servicios, cobro de pago de servicios negocio, plataforma para pago de servicios, pago de servicios en linea, como vender pago de servicios, ¿Cómo recibir pago de servicios en mi negocio?, ¿Qué servicios puedo cobrar en mi negocio?, registro para cobrar pago de servicios, Recarga5g pago de servicios, Recarga5g servicios, Recarga5g cobro de servicios',
      url: '/productos/servicios',
      typeContent: 'website'
    
   })
    this.carouselServices = this.productCarouselService.getServicios();
    this.productServices = this.productCarouselService.getServicios();
  }
}
