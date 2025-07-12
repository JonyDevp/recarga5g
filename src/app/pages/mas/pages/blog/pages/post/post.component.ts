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
  private readonly blogService = inject(ContentfulService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  statusData = signal<TypeErrorPost>(TypeErrorPost.LOADING);

  post = signal<MapPostItem | null>(null)
  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Consulta nuestros artículos mas destacados');

    // Obtener el ID del estado de navegación
    const resolvedData = this.route.snapshot.data['postData'];

    if (resolvedData) {
      this.post.set(resolvedData);
      this.statusData.set(TypeErrorPost.SUCESS);
    } else {
      this.statusData.set(TypeErrorPost.EMPTY);
    }

  }

  constructor() {

  }



}
