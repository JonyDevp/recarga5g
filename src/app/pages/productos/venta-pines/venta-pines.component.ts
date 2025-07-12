import { CommonModule } from '@angular/common';
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
        CommonModule,
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

    //? META TAG
    tag: metaTagModel = {

      title: "Recarga5g.com | Consulta como vender tarjetas electrónicas Google play, Spotify, Netflix con excelentes comisiones",
      description: "Nuestras tarjetas de regalo Google Play, Spotify son el regalo perfecto para personas de todas las edades y gustos. Desde música y películas hasta juegos y aplicaciones, tus clientes podrán disfrutar de una amplia variedad de contenido digital con estas tarjetas",
      keywords: "como vender tarjetas de regalo, tarjeta de regalo, tarjeta de regalo amazon, pines electrónicos, como vender pines electrónicos, vender pines, vender pines electrónicos, google play, google play tarjetas, vender tarjetas de regalo, spotify",
      url: "recarga5g.com/consulta/pines",
      type: "website",
      image: "https://recarga5g.com/Venta-recargas.png",
      card: "summary_large_image",
      creator: "@recargascelular"
    }

    private readonly productCarouselService = inject(ProductCarouselService);
    private readonly metaTagService = inject( MetaTagService);
    private readonly  title = inject( Title);
      theme = inject(ThemesService);
    isDarkTheme = computed(() => this.theme.themeChange());

  ngOnInit(): void {
    this.metaTagService.updateMetaTag({
      title: 'Consulta | Pines Ofrece un servicio extra a tu negocio',
      description: '',
      keywords: '',
      url: 'https://recarga5g.com/consulta/pines',
      typeContent: 'website'
    })
    this.title.setTitle('Recarga5g.com | Venta de tarjetas de regalo Google play, Amazon, Netflix');



    this.carouselPines.set(this.productCarouselService.getPines());
  


  }


}



