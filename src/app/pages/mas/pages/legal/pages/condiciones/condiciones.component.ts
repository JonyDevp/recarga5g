import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from '@shared/services/seo.service';

@Component({
  selector: 'app-condiciones',
  standalone: true,
  templateUrl: './condiciones.component.html',
  styles: [``]
})
export default class CondicionesComponent implements OnInit {

 private readonly title = inject( Title ); 
 private readonly meta = inject( SeoService );

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com: Consulta nuestras condiciones de uso de nuestras plataformas');
    this.meta.updateMetaTag({
      title: 'Recarga5g.com: Consulta nuestras condiciones de uso de nuestras plataformas',
      description: 'En Recarga5g.com, nos comprometemos a ofrecerte un servicio transparente y seguro. Consulta nuestras condiciones de uso para conocer tus derechos y responsabilidades al utilizar nuestras plataformas.',
      keywords: 'condiciones de uso, términos y condiciones, políticas de uso, Recarga5g.com, servicio seguro, transparencia, derechos del usuario',
      typeContent: 'website',
      url: '/mas/legal/condiciones',
    
    });
  }

}
