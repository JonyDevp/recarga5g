
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

//* Interfaces importados
import { registerStepsModel } from 'src/app/interfaces/register-steps-model';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';

//* Servicios importados
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';
import { SeoService } from '@shared/services/seo.service';
import { ThemesService } from '@shared/services/themes.service';

//*components
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';
import { ProductComponent } from '@feature/components/product/product.component';
import { DoubtsComponent } from '@feature/components/doubts/doubts.component';


@Component({
  selector: 'app-venta-pines',
  templateUrl: './venta-pines.component.html',
  styles: [``],
  imports: [
    RouterLink,
    ProductCarouselComponent,
    ProductComponent,
    SalesMethodComponent,
    RegisterStepsComponent,
    DoubtsComponent
  ]
})
export default class VentaPinesComponent implements OnInit {

  carouselPines = signal<ProductCarousel[]>([]);
  stepPines = signal<registerStepsModel[]>([]);

  private readonly productCarouselService = inject(ProductCarouselService);
  private readonly metaTagService = inject(SeoService);

  private readonly title = inject(Title);
  theme = inject(ThemesService);
  isDarkTheme = computed(() => this.theme.themeChange());

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com: Venta de tarjeta de regalo para todos los negocios');

    this.metaTagService.updateMetaTag({
      title: 'Recarga5g.com: Venta de tarjeta de regalo para todos los negocios',
      description: 'Consulta los pines electrónicos que ofrecemos para tus clientes de manera rápida y segura.',
      keywords: 'consulta pines electrónicos, venta de pines, tarjetas de regalo para negocios, pines para recargas, pines para pago de servicios, pines para compras en línea, Recarga5G pines, tarjetas de regalo Recarga5G, pines seguros, pines rápidos, pines confiables, tarjetas de regalo para comercios, pines para tiendas, pines para negocios, pines digitales, pines para clientes, venta de pines en línea',
      url: '/productos/pines',
      typeContent: 'website'
    })

    this.carouselPines.set(this.productCarouselService.getPines());
  }

}



