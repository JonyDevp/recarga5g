import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TPVCardsComponent } from '@feature/components/tpv-cards/tpv-cards.component';
import { DoubtsComponent } from '@feature/components/doubts/doubts.component';
import { SeoService } from '@shared/services/seo.service';
import { ThemesService } from '@shared/services/themes.service';

@Component({
  selector: 'app-terminales',
  imports: [
    TPVCardsComponent,
    DoubtsComponent,
    
],
  templateUrl: 'terminales.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TerminalesComponent implements OnInit{ 
  private readonly metaTagService = inject(SeoService);
  private readonly title = inject(Title);

      theme = inject(ThemesService);
      isDarkTheme = computed(() => this.theme.themeChange());
  
      ngOnInit(): void {
            this.title.setTitle('Recarga5g.com: Compra tu terminal PV al mejor precio para tu negocio')

        this.metaTagService.updateMetaTag({
          title: 'Recarga5g.com: Compra tu terminal PV al mejor precio para tu negocio',
          description:
            'Adquiere tu terminal para tu negocio sin importar el tipo de giro con Recarga5G. Plataforma para venta de recargas, pago de servicios y pines incluida. ¡Compra ahora y mejora la experiencia de cobro con tus clientes!',
          keywords:
            'terminales, compra de terminales, ofertas en terminales, Recarga5G terminales, terminales punto de venta, terminales pv, terminales pagaqui, terminales para negocios, comprar terminales en línea, terminales económicas, terminales recargas, terminales servicios, terminales pines electrónicos, terminal para negocios, terminales de pago, terminales recarga5g, compra terminales negocios, comprar terminal, comprar pv, adquirir terminales, terminales para comercios, terminales punto de venta recarga5g',
          url: '/productos/terminales',
          typeContent: 'website'
        });
      }

}
