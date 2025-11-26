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

    // Obtener el ID del estado de navegación
    const resolvedData = this.route.snapshot.data['postData'] as MapPostItem | null;

    if (resolvedData) {
      this.post.set(resolvedData);
      this.statusData.set(TypeErrorPost.SUCESS);
      const url = `https://www.recarga5g.com/mas/blog/post/${resolvedData.slug}`;

      this.meta.updateMetaTag({
        title: resolvedData.title,
        description: resolvedData.summary || 'Artículos sobre tecnología 5G y recargas electrónicas.',
        keywords: 'recarga5g, blog, recargas, tecnología 5G',
        url,
        typeContent: 'article',
      });

          this.title.setTitle(resolvedData.title);

    } else {
      this.statusData.set(TypeErrorPost.EMPTY);
    }

  }

}
