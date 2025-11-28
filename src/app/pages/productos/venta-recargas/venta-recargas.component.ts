import { Component, ViewChild, ElementRef, OnInit, inject, computed } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

//* Modelos importados
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { registerStepsModel } from 'src/app/interfaces/register-steps-model';

//* Servicios importados
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';
import { SeoService } from '@shared/services/seo.service';
import { RegisterStepsService } from '@shared/services/register-steps.service';
import { ThemesService } from '@shared/services/themes.service';

//*components
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';
import { ProductComponent } from '@feature/components/product/product.component';
import { DoubtsComponent } from "@feature/components/doubts/doubts.component";

@Component({
    selector: 'app-venta-recargas',
    templateUrl: './venta-recargas.component.html',
    styles: [''],
    imports: [
    RouterLink,
    ProductCarouselComponent,
    RegisterStepsComponent,
    ProductComponent,
    SalesMethodComponent,
    DoubtsComponent
]
})
export default class VentaRecargasComponent implements OnInit {

  @ViewChild('recargasSwiper')tae?: ElementRef;
  
  carouselRecargas :ProductCarousel[] = [];
  companiesRecargas: ProductCarousel[] = [];
  stepRecargas: registerStepsModel[] =[];
 theme = inject(ThemesService);

 isDark = computed(() => this.theme.themeChange());

private readonly productCarouselService = inject(ProductCarouselService);
private readonly stepRecargasService = inject( RegisterStepsService);
private readonly metaTagService = inject( SeoService);
private readonly title = inject( Title);

    ngOnInit(): void {

      this.metaTagService.updateMetaTag({
        title: 'Recarga5g.com: Venta de recargas electrónicas para negocios: Telcel, Bait, Virgin, Unefon y más',
        description: 'Vende recargas electrónicas para cualquier tipo de negocio. Registro gratuito y fácil. ¡Empieza a ganar hoy mismo con Recarga5g.com!',
        keywords: 'venta de recargas electrónicas, vender recargas para negocios, recargas móviles, recargas para tiendas, negocio de recargas, ganar dinero con recargas, Recarga5g.com, recargas Telcel, recargas Bait, recargas Virgin, recargas Unefon, vender recargas en línea, recargas para negocios pequeños, plataforma de recargas, recargas instantáneas, recargas seguras, recargas para todo México, venta de tiempo aire, recargas prepago, recargas para celulares, recargas económicas, recargas para comercios',
        url: '/productos/recargas',
        typeContent: 'website'
      })
      this.title.setTitle('Recarga5g.com: Venta de recargas electrónicas para negocios: Telcel, Bait, Virgin, Unefon y más')

         this.carouselRecargas = this.productCarouselService.getRecargas();
         this.companiesRecargas = this.productCarouselService.getRecargas();
        this.stepRecargas = this.stepRecargasService.getStepsRecargas();
      }

}
