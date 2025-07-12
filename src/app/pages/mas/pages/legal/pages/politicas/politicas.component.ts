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

  //? META TAG
  tag: metaTagModel = {
    title: 'Recarga5g.com | nuestras políticas para aplicacion de depósitos, recargas y pago de servicios',
    description: 'Consulta nuestras politicas de nuestros servicios para vender recargas electrónicas para todo tipo de negocio con comisiones hasta 7.5% fijo.',
    keywords: "Condiciones para vender recargas, politicas recarga5g.com, Bait, telcel, recargas electronicas 7.5% comision, recarga5g.com",
    url: 'recarga5g.com/legal/politicas',
    type: 'website',
    image: 'https://recarga5g.com/Venta-recargas.png',
    card: 'summary_large_image',
    creator: '@recargascelular',
  }
  
  private readonly title = inject(Title);
  private readonly meta = inject(MetaTagService);

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | nuestras políticas para aplicacion de depósitos, recargas y pago de servicios')
 
    // this.meta.generateTags({
    //   ...this.tag
    // })
  }

}
