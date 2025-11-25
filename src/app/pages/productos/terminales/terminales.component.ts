import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardProductComponent } from '@feature/components/card-product/card-product.component';
import { DoubtsComponent } from '@feature/components/doubts/doubts.component';
import { MetaTagService } from '@shared/services/meta-tag.service';
import { ThemesService } from '@shared/services/themes.service';

@Component({
  selector: 'app-terminales',
  imports: [
    CardProductComponent,
    DoubtsComponent
],
  templateUrl: 'terminales.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TerminalesComponent implements OnInit{ 
  private readonly metaTagService = inject(MetaTagService);
  private readonly title = inject(Title);

      theme = inject(ThemesService);
      isDarkTheme = computed(() => this.theme.themeChange());
  
      ngOnInit(): void {
            this.title.setTitle('Recarga5g.com: Puntos de Venta PV - Compra tu terminal al mejor precio para tu negocio')

        this.metaTagService.updateMetaTag({
          title: 'Recarga5g.com: Puntos de Venta PV - Compra tu terminal al mejor precio para tu negocio',
          description:
            'Adquiere tu terminal para tu negocio en Recarga5G. Cobra recargas, pago de servicios y pines electrónicos y mucho mas. ¡Compra ahora y mejora la experiencia de cobro con tus clientes!',
          keywords:
            'terminales, compra de terminales, ofertas en terminales, Recarga5G terminales, terminales punto de venta, terminales pv, terminales pagaqui, terminales para negocios',
          url: 'https://www.recarga5g.com/productos/terminales',
          typeContent: 'website'
        });
      }

}
