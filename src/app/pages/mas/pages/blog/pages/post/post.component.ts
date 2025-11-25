import { Component, OnInit, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaTagService } from '@shared/services/meta-tag.service';
import { ContentfulService } from '../../services/contentful.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MapPostItem } from '../../interfaces/post-types';
import { TypeErrorPost } from '../../interfaces/error-types';

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  imports: [
    RouterLink
  ]
})
export default class PostComponent implements OnInit {

  private readonly title = inject(Title);
  private readonly meta = inject(MetaTagService);
  private readonly route = inject(ActivatedRoute);

  statusData = signal<TypeErrorPost>(TypeErrorPost.LOADING);

  post = signal<MapPostItem | null>(null)
  ngOnInit(): void {

    this.meta.updateMetaTag({
      title: 'Recarga5g.com: Consulta nuestros artículos sobre la tecnología 5G y mas',
      description: 'En Recarga5g.com, te ofrecemos los artículos más recientes sobre tecnología 5G, dispositivos compatibles y consejos para aprovechar al máximo esta revolucionaria conectividad. Mantente informado con nuestras actualizaciones periódicas.', 
      keywords: 'Recarga5g, artículos 5G, tecnología 5G, dispositivos 5G, consejos 5G, noticias 5G',
      url: 'https://www.recarga5g.com/mas/blog/post',
      typeContent: 'article'
    })
     this.title.setTitle('Recarga5g.com: Consulta nuestros artículos sobre la tecnología 5G y mas');

    // Obtener el ID del estado de navegación
    const resolvedData = this.route.snapshot.data['postData'];

    if (resolvedData) {
      this.post.set(resolvedData);
      this.statusData.set(TypeErrorPost.SUCESS);
    } else {
      this.statusData.set(TypeErrorPost.EMPTY);
    }

  }

}
