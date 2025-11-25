import { Component, ViewChild, ElementRef, OnInit, inject, signal, computed } from '@angular/core';
import { Title } from '@angular/platform-browser';

//* Modelos importados
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { registerStepsModel } from 'src/app/interfaces/register-steps-model';

//* Servicios importados
import { MetaTagService } from '@shared/services/meta-tag.service';
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';
import { RegisterStepsService } from '@shared/services/register-steps.service';

//*components

import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';
import { ThemesService } from '@shared/services/themes.service';
import { RouterLink } from '@angular/router';
import { ProductComponent } from '@feature/components/product/product.component';
import { DoubtsComponent } from "../../../feature/components/doubts/doubts.component";

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

  //? META TAG
  // tag: metaTagModel = {

  //   title: "Recarga5g.com | Como vender recargas electrónicas: Telcel, Bait, Movistar, Unefon",
  //   description: "Vende recargas telcel, bait, pillofon, con una pequeña inversión con grandes beneficios, para cualquier tipo de negocio,  registro totalmente gratuito",
  //   keywords: "como vender recargas, como vender recargas electrónicas, como vender recargas telefonicas, vende recargas telcel, venta de recargas, vender recargas, vender recarga telce, telcel, bait, recargas bait, como vender recargas bait, pillofon, como vender recargas pillofon",
  //   url: "recarga5g.com/consulta/recargas",
  //   type: "website",
  //   image: "https://recarga5g.com/Venta-recargas.png",
  //   card: "summary_large_image",
  //   creator: "@recargascelular"
  // }

private readonly productCarouselService = inject(ProductCarouselService);
private readonly stepRecargasService = inject( RegisterStepsService);
private readonly metaTagService = inject( MetaTagService);
private readonly title = inject( Title);

    ngOnInit(): void {

      this.metaTagService.updateMetaTag({
        title: 'Recarga5g.com: Venta de recargas electrónicas para negocios',
        description: 'Vende recargas electrónicas para cualquier tipo de negocio. Registro gratuito y fácil. ¡Empieza a ganar hoy mismo con Recarga5g.com!',
        keywords: 'venta de recargas electrónicas, vender recargas para negocios, recargas móviles, recargas para tiendas, negocio de recargas, ganar dinero con recargas, Recarga5g.com',
        url: 'https://recarga5g.com/productos/recargas',
        typeContent: 'website'
      })
      this.title.setTitle('Recarga5g.com: Venta de recargas electrónicas para negocios')

      // this.metaTagService.generateTags( {
      // ...this.tag
      // });

         this.carouselRecargas = this.productCarouselService.getRecargas();
         this.companiesRecargas = this.productCarouselService.getRecargas();
        this.stepRecargas = this.stepRecargasService.getStepsRecargas();
      }

}
