import {Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from '@envs/environment';
import { catchError, from, map, Observable, of, shareReplay } from 'rxjs';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { TypePostSkeleton } from '../interfaces/content-types';
import * as Contentful from 'contentful';
import { MapTagResponse } from '@mas/pages/blog/interfaces/tag-types';
import { MapImgData, MapPostItem, MapPostResponse } from '../interfaces/post-types';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private readonly client = createClient({
    space: environment.contentfull.spaceID,
    accessToken: environment.contentfull.token,
  });

  // CACHE
  private tags$?: Observable<MapTagResponse>;
  /**
  * Obtener posts con paginación y filtros opcionales
  */
  getPosts(page: number, limit: number = 10, tagId?: string): Observable<MapPostResponse> {
     
    const query: any = {
      content_type: 'blogRecarga5g',
      skip: (page - 1) * limit,
      limit: limit,
      order: ["-sys.createdAt"],
      select: ['sys.id', 'fields.title', 'fields.body', 'fields.publishDate', 'fields.slug', 'fields.summary', 'fields.headerImage']
    };

    // Si hay un tag seleccionado, agregar filtro
    if (tagId) {
      query['metadata.tags.sys.id[in]'] = tagId;
    }

  return from(
    this.client.getEntries<TypePostSkeleton>(query)
    ).pipe(
      map((resp) => {
        return {
          total: resp.total,
          items: resp.items.map(item => this.mapPostItem(item))
        }
      }),
      catchError((error) => {
        console.error('Error fetching posts', error)
        return of({ total: 0, items: [] } as MapPostResponse);
      })
    );

  ;
  }

  /**
   * Obtener posts más recientes (para sidebar o sección destacada)
   */
  getCurrentPosts(limit = 3): Observable<MapPostResponse> {
    return from(this.client.getEntries<TypePostSkeleton>({
      content_type: 'blogRecarga5g',
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
      catchError((error) => {
        console.error('Error fetching posts:', error);
        return of({ total: 0, items: [] } as MapPostResponse);
      })

    )
  }

  /**
  * Obtener un post por ID
  */
  getPostByID(id: string): Observable<MapPostItem | null> {
    return from(
      this.client.getEntry<TypePostSkeleton>(id))
      .pipe(
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
        } as MapPostItem;
      }),
      catchError((error) => {
        console.error('Error fetching post by ID:', error);
        return of(null)
      })
    )
  }

  /**
   * Obtener un post por Slug
   */
  getPostBySlug(slug: string): Observable<MapPostItem | null> {
    return from(
      this.client.getEntries({
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
        } as MapPostItem;

      }),
      catchError((error) => {
        console.error('Error fetching post by slug:', error);
        return of(null);
      })
    )
  }

  /**
 * Obtener todos los tags/categorías
 */
  getTags(forceRefresh  = false): Observable<MapTagResponse> {
    
    if (!forceRefresh && this.tags$) {
      return this.tags$;
    }

    this.tags$ = from(
      this.client.getTags()
    ).pipe(
      map(resp => ({
        total: resp.total,
        skip: resp.skip,
        items: resp.items.map(item => ({
          id: item.sys.id,
          name: item.name,
        })),
      })),
      catchError(error => {
        console.error('Error fetching tags:', error);
        return of({ total: 0, skip: 0, items: [] } as MapTagResponse);
      }),
      shareReplay(1)
    );

    return this.tags$;    
  }

  /**
  * Obtener posts destacados (featured)
  */
  getFeaturedPost(limit = 3): Observable<MapPostResponse> {
    return from(
      this.client.getEntries<any>({
      content_type: 'blogRecarga5g',
      limit: limit,
      'fields.featured': true,
      order: ['-sys.createdAt'],
      select: [
       'sys.id',
          'fields.title',
          'fields.body',
          'fields.publishDate',
          'fields.slug',
          'fields.summary',
          'fields.headerImage' 
      ],
    })
    ).pipe(
      map((resp) => {
        return {
          total: resp.total,
          items: resp.items.map(item => this.mapPostItem(item))
        }
      }),
      catchError((error) => {
        console.error('Error fetching featured posts:', error);
        return of({ total: 0, items: [] } as MapPostResponse);
      })
    )
  }

    /**
   * Mapear item de post
   */
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

    /**
   * Mapear imagen de Contentful
   */
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
