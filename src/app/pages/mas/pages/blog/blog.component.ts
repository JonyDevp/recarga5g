
import { ChangeDetectionStrategy, Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { ContentfulService } from '@mas/pages/blog/services/contentful.service';
import { metaTagModel } from 'src/app/interfaces/meta-tag.model';
import { MetaTagService } from '@shared/services/meta-tag.service';
// import {  Entry } from 'contentful';
import { TypeErrorPost } from './interfaces/error-types';

import { MapPostItem, MapPostResponse } from './interfaces/post-types';
import { MapTagResponse } from './interfaces/tag-types';

import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { ɵɵRouterLink } from "@angular/router/testing";

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [
    NgxPaginationModule,
    CommonModule,
    ɵɵRouterLink
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class BlogComponent implements OnInit {

  // posts$: Entry<any>[] = [];

  //? META TAG
  tag: metaTagModel = {
    title: 'Recarga5g.com | Blog, Lee nuestros artículos mas recientes y destacados',
    description: 'A continuación podrás consultar nuestros artículos que publicamos periódicamente para que siempre te mantengas al tanto sobre promociones, avisos sobre tecnologías, compañía de telefonía y mucho mas!',
    keywords: 'Promociones Telcel, Promociones Bait, Avisos Recarga5g.com, Blog Recarga5g.com, Recarga5g, Recarga5g.com, articulos Recarga5g.com',
    url: 'recarga5g.com/ayuda/blog',
    type: 'website',
    image: 'https://recarga5g.com/Venta-recargas.png',
    card: 'summary_large_image',
    creator: '@recargascelular',
  }

  private readonly blogService = inject(ContentfulService);
  private readonly title = inject(Title);
  private readonly meta = inject(MetaTagService);
  private route = inject(Router);

  readonly signalData = signal<TypeData>({
    posts: { total: 0, items: [] },
    currentPosts: { total: 0, items: [] },
    tags: { total: 0, skip: 0, items: [] },
    featuredPosts: { total: 0, items: [] },
  });

  // Estados de carga optimizados
  readonly loadingState = signal<TypeLoading>({
    posts: TypeErrorPost.LOADING,
    currentPosts: TypeErrorPost.LOADING,
    tags: TypeErrorPost.LOADING,
    featuredPosts: TypeErrorPost.LOADING
  });

  //pagination & filtros
  readonly currentPage = signal(1);
  readonly itemsPerPage = signal(6);
  readonly totalItems = computed(() => this.signalData().currentPosts.total);
  readonly selectedCategory = signal<string | null>(null);
  readonly searchTerm = signal<string>('');

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 6,
    currentPage: 1
  }



  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com | Consulta nuestros artículos mas recientes');
    this.loadCurrentPosts();
    this.loadTags();
    this.loadFeaturedPosts();
  }

  private postsEffect = effect(() => {
    const page = this.currentPage();
    const category = this.selectedCategory();

    //loading inicial
    this.loadingState.update(state => ({ ...state, posts: TypeErrorPost.LOADING }));
    this.blogService
      .getPosts(1, this.itemsPerPage(), category ?? undefined)
      .subscribe({
        next: (resp) => {
          if (!resp.items || resp.items.length === 0) {
            this.loadingState.update(state => ({
              ...state,
              posts: TypeErrorPost.EMPTY,
            }));
            this.signalData.update(state => ({
              ...state,
              posts: { total: 0, items: [] },
            }));
          } else {
            this.loadingState.update(state => ({
              ...state,
              posts: TypeErrorPost.SUCESS,
            }));
            this.signalData.update(state => ({
              ...state,
              posts: resp,
            }));
          }
        },

        error: () => {
          this.loadingState.update(state => ({
            ...state,
            posts: TypeErrorPost.ERROR,
          }));
          this.signalData.update(state => ({
            ...state,
            posts: { total: 0, items: [] },
          }));
        }
      })

  });

  private loadCurrentPosts() {

    this.loadingState.update(state => ({ ...state, currentPosts: TypeErrorPost.LOADING }));

    this.blogService.getPosts(this.currentPage(), this.itemsPerPage()).subscribe({
      next: (resp) => {
        if (!resp.items || resp.items.length === 0) {
          this.loadingState.update(state => ({ ...state, currentPosts: TypeErrorPost.EMPTY }));
          this.signalData.update(state => ({
            ...state, currentPosts: { total: 0, items: [] },
          }));
        } else {
          this.loadingState.update(state => ({ ...state, currentPosts: TypeErrorPost.SUCESS }));
          this.signalData.update(state => ({ ...state, currentPosts: resp }));
        }
      },
      error: (err) => {
        this.loadingState.update(state => ({ ...state, currentPosts: TypeErrorPost.ERROR }));
        this.signalData.update(state => ({ ...state, currentPosts: { total: 0, items: [] } }));
      },
    });
  }

  private loadFeaturedPosts() {

    this.loadingState.update(state => ({ ...state, featuredPosts: TypeErrorPost.LOADING }));

    this.blogService.getFeaturedPost().subscribe({
      next: (resp) => {
        if (!resp.items || resp.items.length === 0) {
          this.loadingState.update(state => ({ ...state, featuredPosts: TypeErrorPost.EMPTY }));
          this.signalData.update(state => ({ ...state, featuredPosts: { total: 0, items: [] } }));
        } else {
          this.loadingState.update(state => ({ ...state, featuredPosts: TypeErrorPost.SUCESS }));
          this.signalData.update(state => ({ ...state, featuredPosts: resp }));
        }
      },
      error: (err) => {
        this.loadingState.update(state => ({ ...state, featuredPosts: TypeErrorPost.ERROR }));
        this.signalData.update(state => ({ ...state, featuredPosts: { total: 0, items: [] } }));
      }
    })
  }

  private loadTags() {

    this.loadingState.update(state => ({ ...state, tags: TypeErrorPost.LOADING, }));
    this.blogService.getTags().subscribe({
      next: (resp) => {
        if (!resp.items || resp.items.length === 0) {
          this.loadingState.update(state => ({ ...state, tags: TypeErrorPost.EMPTY }));
          this.signalData.update(state => ({ ...state, tags: resp }));
        } else {
          this.loadingState.update(state => ({ ...state, tags: TypeErrorPost.SUCESS }));
          this.signalData.update(state => ({ ...state, tags: resp }));
        }
      },
      error: (err) => {
        this.loadingState.update(state => ({ ...state, tags: TypeErrorPost.ERROR }));
        this.signalData.update(state => ({ ...state, tags: { total: 0, skip: 0, items: [] } }));
      }
    })

  }

  navigatePost(slug: string, id: string) {
    this.route.navigate([`/mas/blog/post/${slug}`], {
      state: { id }
    })
  }
  onPageChange(tagId: string | null) {
    this.selectedCategory.set(tagId);
    this.currentPage.set(1); // opcional, vuelves a la primera página
  }
}
type TypeData = {
  posts: MapPostResponse,
  currentPosts: MapPostResponse,
  tags: MapTagResponse,
  featuredPosts: MapPostResponse
}

type TypeLoading = {
  posts: TypeErrorPost,
  currentPosts: TypeErrorPost,
  featuredPosts: TypeErrorPost,
  tags: TypeErrorPost
}

export interface Product {
  id: number;
  title: string;
  description: string;
}