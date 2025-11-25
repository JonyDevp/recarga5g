import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from 'src/app/interfaces/meta-tag.model';
import { MetaTagService } from '@shared/services/meta-tag.service';

@Component({
  selector: 'app-politicas',
  standalone: true,
  templateUrl: './politicas.component.html',
  styles: [``],
  imports: [

  ]
})
export default class PoliticasComponent implements OnInit {


  
  private readonly title = inject(Title);
  private readonly meta = inject(MetaTagService);

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com: nuestras políticas para aplicacion de depósitos, recargas y pago de servicios')
    this.meta.updateMetaTag({
      title: 'Recarga5g.com: nuestras políticas para aplicacion de depósitos, recargas y pago de servicios',
      description: 'En Recarga5g.com, nos tomamos muy en serio la seguridad y transparencia en nuestras políticas. Consulta nuestras políticas para conocer cómo gestionamos los depósitos, recargas y pagos de servicios en nuestra plataforma.',
      keywords: 'políticas, depósitos, recargas, pagos de servicios, seguridad, transparencia, Recarga5g.com, gestión de pagos',
      typeContent: 'website',
      url: 'https://www.recarga5g.com/mas/legal/politicas',
    });
 
  }

}
