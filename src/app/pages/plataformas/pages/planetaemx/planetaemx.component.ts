import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

//*Interfaces importados

//* Servicios importados

import { MetaTagService } from '@shared/services/meta-tag.service';
import { ProductCarouselService } from '@feature/components/product-carousel/services/product-carousel.service';
import { PlanetaemxService } from '@plataformas/services/planetaemx.service';

//* Componentes
import { CarouselApp } from '@feature/components/app-recargas/interface/app.interface';
import { SalesMethodComponent } from '@feature/components/sales-method/sales-method.component';
import { AppRecargasComponent } from '@feature/components/app-recargas/app-recargas.component';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { ProductCarouselComponent } from '@feature/components/product-carousel/product-carousel.component';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';
import { DoubtsComponent } from '@feature/components/doubts/doubts.component';
import { RouterLink } from '@angular/router';
import { ProductsComponent } from '@plataformas/components/products/products.component';
import { ThemesService } from '@shared/services/themes.service';

@Component({
    selector: 'app-planetaemx',
    templateUrl: './planetaemx.component.html',
    styles: [`
      .app-recargaki__li {
       counter-increment: indexApp;
      }
      `],
    imports: [
        CommonModule,
        RouterLink,
        ProductCarouselComponent,
        AppRecargasComponent,
        SalesMethodComponent,
        ProductsComponent,
        RegisterStepsComponent,
        DoubtsComponent
    ]
})
export default class PlanetaemxComponent implements OnInit {

 productCarousel = signal<ProductCarousel[]>([]);
 appRecargaki = signal<CarouselApp[]>([]);

 theme = inject(ThemesService);
 isDarkTheme = computed(() => this.theme.themeChange());

  title: any;

  listBenefit = [
    {
      title: 'Comisión por depósito',
      isActive: true,
    },

    {
      title: 'Excelentes comisiones',
      isActive: false,
    },

    {
      title: 'Administra 2 tipos de saldos para recargas y para servicios',
      isActive: false,
    },

    {
      title: 'Reporta todas tus compras en el portal',
      isActive: true
    }
  ]


 private readonly productCarouselService = inject(ProductCarouselService);
 private readonly planetaemxService = inject(PlanetaemxService);

 private readonly metaTagService = inject(MetaTagService);
 private readonly titulo = inject(Title);

  ngOnInit(): void {
    this.titulo.setTitle('Recarga5g.com: Planetaemx plataforma de venta de recargas a todas las compañias en méxico');

    this.productCarousel.set( this.productCarouselService.getRecargas() );
    this.appRecargaki.set( this.planetaemxService.getAppRecargaki())
    this.metaTagService.updateMetaTag({
      title: 'Recarga5g.com: Planetaemx plataforma de venta de recargas a todas las compañias en méxico',
      description: 'Obtén una comisión hasta un 7.5% fijo en todos tus depósitos, Genera ganancias extras a tu negocio vendiendo recargas Bait, Telcel, Movistar y muchos mas',
      keywords: "Planetaemx, Recargaki, App Recargaki, App Planetaemx, Cuentas planetaemx, cuentas bancarias planetaemx, cuentas recargaki, cuentas bancarias recargaki, manual planetaemx, manual recargaki, manuales planetaemx, manuales recargaki, vender recargas, plataforma para vender recargas, comision por deposito, venta recargas, comision 7.5 recargas, comision 7.5% recargas, venta de recargas movistar, Movistar, tiempo aire movistar, vender recargas movistar",
      url: 'recarga5g.com/plataforma/planetaemx',
      typeContent: 'website',
    })

    this.theme.initTheme()
  }




}
