import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Title } from '@angular/platform-browser';

//* Servicios importados
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';

//* COMPONENTS
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';
import { ThemesService } from '@shared/services/themes.service';
import { RouterLink } from '@angular/router';
import { ProductComponent } from '@feature/components/product/product.component';
import { DoubtsComponent } from '@feature/components/doubts/doubts.component';
import { MetaTagService } from '@shared/services/meta-tag.service';

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
  ]
})
export default class PagoServiciosComponent implements OnInit {

  carouselServices = signal<ProductCarousel[]>([]);
  productServices: ProductCarousel[] = [];
  theme = inject(ThemesService);
  isDarkTheme = computed(() => this.theme.themeChange());
  private readonly metaTagService = inject(MetaTagService);

  private readonly productCarouselService = inject(ProductCarouselService);
  private readonly title = inject(Title);

  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com | Como cobrar recibo de servicios: Telmex, Izzi, CFE y mucho mas!')
   this.metaTagService.updateMetaTag({
      title: 'Recarga5g.com | Como cobrar recibo de servicios: Telmex, Izzi, CFE y mucho mas!',
      description: 'Descubre cómo cobrar recibos de servicios como Telmex, Izzi y CFE de manera fácil y segura con Recarga5g.com. ¡Empieza a ganar comisiones hoy mismo!',
      keywords: 'pago de servicios, cobro de pago de servicios negocio, plataforma para pago de servicios, pago de servicios en linea, como vender pago de servicios, ¿Cómo recibir pago de servicios en mi negocio?, ¿Qué servicios puedo cobrar en mi negocio?',
      url: 'https://www.recarga5g.com/productos/servicios',
      typeContent: 'website'
    
   })
    this.carouselServices.set(this.productCarouselService.getServicios());

    this.productServices = this.productCarouselService.getServicios();
    // this._metaTagService.generateTags( {
    //   ...this.tag
    // })
  }
}
