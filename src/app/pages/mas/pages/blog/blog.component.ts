
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { ContentfulService } from '@mas/pages/blog/services/contentful.service';
import { metaTagModel } from 'src/app/interfaces/meta-tag.model';
import { MetaTagService } from '@shared/services/meta-tag.service';
// import {  Entry } from 'contentful';
import { Observable } from 'rxjs';
import { ThemesService } from '@shared/services/themes.service';
import { FollowCardComponent } from "@mas/pages/blog/components/follow-card/follow-card.component";
import { NgxPaginationModule, PaginationInstance } from 'ngx-pagination'; // <-- import the module
import { TypeErrorPost } from './interfaces/error-types';
import { SkeletonAsidePostComponent } from "@mas/pages/blog/components/skeleton-aside-post/skeleton-aside-post.component";
import { MapPostItem, MapPostResponse } from './interfaces/post-types';
import { MapTagResponse } from './interfaces/tag-types';
import { EmptyStateComponent } from "./components/empty-state/empty-state.component";
import { ErrorStateComponent } from "./components/error-state/error-state.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [
    RouterLink,
    FollowCardComponent,
    NgxPaginationModule,
    SkeletonAsidePostComponent,
    EmptyStateComponent,
    ErrorStateComponent
],
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
  private readonly theme = inject(ThemesService);
  private route = inject(Router);

 readonly signalData = signal<TypeData>({
    posts: { total: 0, items: []},
    currentPosts: { total: 0, items: []},
    tags: { total: 0, skip: 0, items: []},
    featuredPosts: { total: 0, items: []},
  })

  // Estados de carga optimizados
  loadingState = signal<TypeLoading>({
    posts: TypeErrorPost.LOADING,
    currentPosts: TypeErrorPost.LOADING,
    tags: TypeErrorPost.LOADING,
    featuredPosts: TypeErrorPost.LOADING
  })
  
  isDarkTheme = computed(() => this.theme.themeChange());
  configPage: PaginationInstance = {
  itemsPerPage: 10,
  currentPage: 1
  }

  constructor() {
    this.loadCurrentPosts();
    this.loadPosts();
  }

  ngOnInit(): void {

    this.title.setTitle('Recarga5g.com | Consulta nuestros artículos mas recientes');
    
    //  this.loadCurrentPosts();
    // this.loadTags();
    // this.loadFeaturedPosts();
  }

  onPageChange(number: number) {
    this.configPage.currentPage = number;
  }

  private loadPosts() {
    this.loadingState().posts = TypeErrorPost.LOADING
    effect( () => {
      this.loadingState().posts = TypeErrorPost.LOADING;
     this.blogService.getPosts(1).subscribe({
        next: (resp) =>  {
          if(!resp.items || resp.items.length === 0) {
            this.loadingState().posts = TypeErrorPost.EMPTY;
            this.signalData().posts = { total: 0, items: []};

          } else {
            this.loadingState().posts = TypeErrorPost.SUCESS;
            this.signalData().posts = resp;
          }
        },
        error: (err) =>  {
          this.loadingState().posts = TypeErrorPost.ERROR;
          this.signalData().posts = {total: 0, items: []}
        },
      })
    })
  }

  private loadCurrentPosts() {
    effect( () => {
      this.blogService.getCurrentPosts().subscribe({
        next: (resp) => {
            if(!resp.items || resp.items.length === 0) {
            this.loadingState().currentPosts = TypeErrorPost.EMPTY;
            this.signalData().currentPosts = { total: 0, items: []};
          } else {
            this.loadingState().currentPosts = TypeErrorPost.SUCESS;
            this.signalData().currentPosts = resp;
            
          }
        },
        error: (err) => { 
          this.loadingState().currentPosts = TypeErrorPost.ERROR; 
          this.signalData().currentPosts = { total: 0, items: []}
        }
      })
    })
  }

  private loadFeaturedPosts() {
    effect( () => {
      this.blogService.getCurrentPosts().subscribe({
        next: (resp) => {
            if(!resp.items || resp.items.length === 0) {
            this.loadingState().featuredPosts = TypeErrorPost.EMPTY;
            this.signalData().featuredPosts = { total: 0, items: []};

          } else {
            this.loadingState().featuredPosts = TypeErrorPost.SUCESS;
            this.signalData().featuredPosts = resp;
          }
        },
        error: (err) => {
           this.loadingState().featuredPosts = TypeErrorPost.ERROR;
          this.signalData().featuredPosts = {total: 0, items: []}
        }
      })
    })
  }

  private loadTags() {
     effect( () => {
      this.blogService.getTags().subscribe({
        next: (resp) => {
            if(!resp.items || resp.items.length === 0) {
            this.loadingState().tags = TypeErrorPost.EMPTY;
          this.signalData().tags = resp;
     
          } else {
            this.loadingState().tags = TypeErrorPost.SUCESS;
            this.signalData().tags = resp;
          }
        },
        error: (err) => {
           this.loadingState().tags = TypeErrorPost.ERROR;
          this.signalData().tags = {
            total: 0, skip: 0, items: []
          }
        }
      })
    })
  }

  navigatePost(slug: string, id: string) {
    this.route.navigate([`/mas/blog/post/${slug}`], {
      state: {id}
    })
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