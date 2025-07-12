import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment.development';
import { createClient } from 'contentful';
import { catchError, from, map, Observable, of, tap, } from 'rxjs';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { TypePostSkeleton } from '../interfaces/content-types';
import * as Contentful from 'contentful';
import { MapTagResponse } from '@mas/pages/blog/interfaces/tag-types';
import { MapImgData, MapPostItem, MapPostResponse } from '../interfaces/post-types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private readonly client = createClient({
    space: environment.contentfull.spaceID,
    accessToken: environment.contentfull.token,
  });

  private readonly router = inject(Router);

  searchTerm: string = '';

  getPosts(page: number, limit: number = 10): Observable<MapPostResponse> {
    return from(this.client.getEntries<TypePostSkeleton>({
      content_type: 'blogRecarga5g',
      skip: (page - 1) * limit,
      limit: limit,
      order: ["-sys.createdAt"],
      select: ['sys.id', 'fields.title', 'fields.body', 'fields.publishDate', 'fields.slug', 'fields.summary', 'fields.headerImage']
    })
    ).pipe(
      map((resp) => {
        return {
          total: resp.total,
          items: resp.items.map(item => this.mapPostItem(item))
        }
      }),

    )
  }

  getCurrentPosts(): Observable<MapPostResponse> {
    return from(this.client.getEntries<TypePostSkeleton>({
      content_type: 'blogRecarga5g',
      limit: 3,
      order: ["-sys.createdAt"],
      select: ['sys.id', 'fields.title', 'fields.body', 'fields.publishDate', 'fields.slug', 'fields.summary', 'fields.headerImage']
    })
    ).pipe(

      // tap( (resp) => {
      //   console.log(resp)
      // }),
      map((resp) => {
        return {
          total: resp.total,
          items: resp.items.map(item => this.mapPostItem(item))
        }
      }),

    )
  }

  getPostByID(id: string): Observable<MapPostItem | null> {
    return from(this.client.getEntry<TypePostSkeleton>(id)).pipe(
      map((resp: any) => {

        if (!resp) return null;

        return {
          id: resp.sys.id,
          title: resp.fields.title,
          body: documentToHtmlString(resp.fields.body),
          publish_date: resp.fields.publishDate,
          slug: resp.fields.slug,
          summary: resp.fields.summary,
          headerImage: resp.fields.headerImage ? this.mapImage(resp.fields.headerImage) : null
        }
      })
    )
  }

  getPostBySlug(slug: string): Observable<MapPostItem | null> {
    return from(this.client.getEntries({
      content_type: 'blogRecarga5g',
      limit: 1,
        'fields.slug': slug as any
    })
    ).pipe(
      map((resp: any) => {
        if (!resp.items.length) return null; // No se encontró el post
        const post = resp.items[0].fields;
        return {
          id: resp.items[0].sys.id,
          title: post.title,
          body: documentToHtmlString(post.body),
          publish_date: post.publishDate,
          slug: post.slug,
          summary: post.summary,
          headerImage: post.headerImage ? this.mapImage(post.headerImage) : null,
        };

      }),
       catchError(() => of(null)) // Manejo de errores
    )
  }

  getTags(): Observable<MapTagResponse> {
    return from(this.client.getTags()).pipe(
      map((resp) => {
        return {
          total: resp.total,
          skip: resp.skip,
          items: resp.items.map(item => ({
            id: item.sys.id,
            name: item.name
          }))
        }
      })
    )
  }

  getFeaturedPost(limit = 3): Observable<MapPostResponse> {
    return from(this.client.getEntries<any>({
      content_type: 'blogRecarga5g',
      limit: limit,
      'fields.featured': true,
      order: ["-sys.createdAt"],
      select: ['sys.id', 'fields.title', 'fields.body', 'fields.publishDate', 'fields.slug', 'fields.summary', 'fields.headerImage'],

    })
    ).pipe(
      map((resp) => {
        return {
          total: resp.total,
          items: resp.items.map(item => this.mapPostItem(item))
        }
      }),

    )
  }

  private mapPostItem(item: any): MapPostItem {
    return {
      id: item.sys.id,
      title: item.fields.title?.toString() || '',
      body: item.fields.body,
      publish_date: item.fields.publishDate,
      slug: item.fields.slug?.toString() || '',
      summary: item.fields.summary?.toString() || '',
      headerImage: item.fields.headerImage ? this.mapImage(item.fields.headerImage) : null
    };
  }

  private mapImage(asset: Contentful.Asset): MapImgData {
    if (!asset.fields?.file?.url) {
      throw new Error('Invalid asset structure');
    }

    return {
      url: `https:${asset.fields.file.url}`,
      title: asset.fields.title?.toString(),
      description: asset.fields.description?.toString()
    };
  }


}
