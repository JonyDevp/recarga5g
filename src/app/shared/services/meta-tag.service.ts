import { inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable({
    providedIn: 'root'
  })
  export class MetaTagService {

    private meta = inject(Meta);
    title = inject(Title);

    updateMetaTag(meta: metaData): void {
      this.meta.updateTag({ name: 'description', content: meta.description });
      this.meta.updateTag({ name: 'keywords', content: meta.keywords });

      //* Facebook
      this.meta.updateTag({ property: 'og:url', content: meta.url });
      this.meta.updateTag({ property: 'og:title', content: meta.title });
      this.meta.updateTag({ property: 'og:description', content: meta.description });
      this.meta.updateTag({ property: 'og:image', content: 'https://recarga5g.com/Venta-recargas.png' });
      this.meta.updateTag({ property: 'og:type', content: meta.typeContent });
      this.meta.updateTag({ property: 'og:locale', content: 'es_MX' });
      this.meta.updateTag({ property: 'og:locale:alternate', content: 'es_ES' });


      //* Twitter
      this.meta.updateTag({ property: 'twitter:card', content: "summary_large_image" });
      this.meta.updateTag({ property: 'twitter:site', content: "@recargascelular" });
      this.meta.updateTag({ property: 'twitter:title', content: meta.title });
      this.meta.updateTag({ property: 'twitter:description', content: meta.description });
      this.meta.updateTag({ property: 'twitter:image', content: 'https://recarga5g.com/Venta-recargas.png' });


    }
  }

interface metaData {
  title: string;
  description: string;
  keywords: string;
  url: string;
  typeContent: 'website' | 'article' | 'blog';

}