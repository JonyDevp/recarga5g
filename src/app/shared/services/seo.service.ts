import { inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable({
    providedIn: 'root'
  })
  export class SeoService {

    private meta = inject(Meta);
    private doc = inject(Document);
    title = inject(Title);
private readonly baseUrl= 'https://recarga5g.com/';

    updateMetaTag(meta: MetaData): void {
       this.title.setTitle(meta.title);
      this.meta.updateTag({ name: 'description', content: meta.description });
      this.meta.updateTag({ name: 'keywords', content: meta.keywords });

      //* Facebook
      this.meta.updateTag({ property: 'og:title', content: meta.title });
      this.meta.updateTag({ property: 'og:description', content: meta.description });
      this.meta.updateTag({ property: 'og:image', content: 'https://recarga5g.com/Venta-recargas.png' });
      this.meta.updateTag({ property: 'og:type', content: meta.typeContent });
          this.meta.updateTag({ property: 'og:url', content: this.buildAbsoluteURL(meta.url) });

      this.meta.updateTag({ property: 'og:locale', content: 'es_MX' });
      this.meta.updateTag({ property: 'og:url', content: meta.url });


      //* Twitter
      this.meta.updateTag({ property: 'twitter:card', content: "summary_large_image" });
      this.meta.updateTag({ property: 'twitter:title', content: meta.title });
      this.meta.updateTag({ property: 'twitter:description', content: meta.description });
      this.meta.updateTag({ property: 'twitter:image', content: 'https://recarga5g.com/Venta-recargas.png' });

      this.setcanonicalURL(meta.url);
    }

    
  /**
   * Crea o actualiza la etiqueta <link rel="canonical">
   * @param url puede ser ruta relativa ('/plataformas/pagaqui') o URL completa
   */
    private setcanonicalURL(url?: string) {
      const canonicalURL = this.buildAbsoluteURL(url || '');

    let linkElement = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if(!linkElement) {
      linkElement = this.doc.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(linkElement);
    }
    linkElement.setAttribute('href', canonicalURL);
  }

     //Convierte de una URL relativa a una absoluta
     private buildAbsoluteURL(url: string): string {
       if(!url) return this.baseUrl;

       if(url.startsWith('http://') || url.startsWith('https://')) return url;

       //asegurar que empiece con "/"
       const path = url.startsWith('/') ? url : `/${url}`;

         return `${this.baseUrl}${path}`;
      }
     
  }

interface MetaData {
  title: string;
  description: string;
  keywords: string;
  url: string;
  typeContent: 'website' | 'article' | 'blog';

}