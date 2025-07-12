import { DOCUMENT } from "@angular/common";
import { ViewEncapsulation } from "@angular/compiler";
import { Inject, Injectable, RendererFactory2 } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })

  export class CanonicalLinkService {

    constructor(
        private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document) {
    }
    
    /**
     * Inject the State into the bottom of the <head>
     */
    addTag(tag: LinkDefinition, forceCreation?: boolean) {
    
        try {
            const renderer = this.rendererFactory.createRenderer(this.document, {
                id: '-1',
                encapsulation: ViewEncapsulation.None,
                styles: [],
                data: {}
            });
    
            const link = renderer.createElement('link');
            const head = this.document.head;
            const selector = this._parseSelector(tag);
    
            if (head === null) {
                throw new Error('<head> not found within DOCUMENT.');
            }
    
            Object.keys(tag).forEach((prop: string) => {
                return renderer.setAttribute(link, prop, tag[prop]);
            });
    
            // [TODO]: get them to update the existing one (if it exists) ?
            renderer.appendChild(head, link);
    
        } catch (e) {
            console.error('Error within linkService : ', e);
        }
    }
    
    private _parseSelector(tag: LinkDefinition): string {
        // Possibly re-work this
        const attr: string = tag.rel ? 'rel' : 'hreflang';
        return `${attr}="${tag[attr]}"`;
    }

    removeCanonicalLink() {
        try {
            const renderer = this.rendererFactory.createRenderer(this.document, {
                id: '-1',
                encapsulation: ViewEncapsulation.None,
                styles: [],
                data: {}
            });
            const canonical = this.document.querySelector("link[rel='canonical']")
            const head = this.document.head;

            if (head === null) {
                throw new Error('<head> not found within DOCUMENT.');
            }
            if (!!canonical) {
                renderer.removeChild(head, canonical);
            }
        } catch (e) {
            console.error('Error within linkService : ', e);
        }
}
    }
    
     export declare type LinkDefinition = {
      charset?: string;
      crossorigin?: string;
      href?: string;
      hreflang?: string;
      media?: string;
      rel?: string;
      rev?: string;
      sizes?: string;
      target?: string;
      type?: string;
    } & {
        [prop: string]: string;
    };