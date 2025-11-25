
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

//* Interfaces importados
import { metaTagModel } from 'src/app/interfaces/meta-tag.model';
import { registerStepsModel } from 'src/app/interfaces/register-steps-model';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';

//* Servicios importados
import { MetaTagService } from '@shared/services/meta-tag.service';
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';

//*components
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';
import { ThemesService } from '@shared/services/themes.service';
import { RouterLink } from '@angular/router';
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
export default class VentaPinesComponent implements OnInit{

  carouselPines = signal<ProductCarousel[]>([]);
  stepPines = signal<registerStepsModel[]>([]);


    private readonly productCarouselService = inject(ProductCarouselService);
    private readonly metaTagService = inject( MetaTagService);
  
    private readonly  title = inject( Title);
      theme = inject(ThemesService);
    isDarkTheme = computed(() => this.theme.themeChange());

  ngOnInit(): void {
        this.title.setTitle('Recarga5g.com: Venta de tarjeta de regalo para negocios');

    this.metaTagService.updateMetaTag({
      title: 'Recarga5g.com: Venta de tarjeta de regalo para negocios',
      description: 'Consulta los pines electrónicos que ofrecemos para que tus clientes puedan realizar recargas, pagos de servicios y compras en línea de manera rápida y segura.',
      keywords: 'consulta pines electrónicos, venta de pines, tarjetas de regalo para negocios, pines para recargas, pines para pago de servicios, pines para compras en línea, Recarga5G pines, ',
      url: 'https://recarga5g.com/productos/pines',
      typeContent: 'website'
    })



    this.carouselPines.set(this.productCarouselService.getPines());
  


  }


}



