import {
  Component,
  ElementRef,
  PLATFORM_ID,
  inject,
  signal,
  viewChildren,
  effect,
} from '@angular/core';

import { Title } from '@angular/platform-browser';
import {
  isPlatformBrowser,
} from '@angular/common';
import { RouterLink } from '@angular/router';
import { FaqsMenuComponent } from './components/faqs-menu/faqs-menu.component';
import { FaqsFilterModalComponent } from './components/faqs-modal-card/faqs-modal-card.component';
import { MetaTagService } from '@shared/services/meta-tag.service';
import { FaqsService, MenuFaq } from './faqs.service';

@Component({
  selector: 'app-faqs',
  standalone: true,
  templateUrl: './faqs.component.html',
  styles: [`
    .hidden-scroll::-webkit-scrollbar {
    width: 0;
}
    `],
  imports: [RouterLink, FaqsMenuComponent, FaqsFilterModalComponent],

})
export default class FaqsComponent {

  faqsTitle = viewChildren<ElementRef>('titleSection');
  panelOpenState = false;
  item: number = 0;

  private readonly title = inject(Title);
  private readonly metaTagService = inject(MetaTagService);
  private platform_id = inject(PLATFORM_ID);
  private observer!: IntersectionObserver;
  private readonly faqsService = inject(FaqsService);
  activeTitle: string = '';
  faqsMenuOne: MenuFaq[] = [];
  faqsMenuTwo: MenuFaq[] = [];
  faqsMenuThree: MenuFaq[] = [];
  faqsMenuFour: MenuFaq[] = [];
  isOpenModal = signal(false);

  constructor() {
    effect(() => {
      this.scrollTitleIntersection();
    });
  }

  private scrollTitleIntersection(): void {
    if (!isPlatformBrowser(this.platform_id)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeTitle = entry.target.id;
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50% 0px',
      }
    );

    this.faqsTitle().forEach((section) => {
      const titleRef = section.nativeElement;
      this.observer.observe(titleRef);
    });
  }

  closeModal(event: boolean){
   this.isOpenModal.set(event)
  }

scrollToTitle(id: string) {
  this.faqsService.scrollToAnchor(id)
}

  ngOnInit(): void {
    this.title.setTitle(
      'Recarga5g.com | Consulta las preguntas mas frecuentes y resuelve todas tus dudas para vender recargas, pago de servicios y pines electrónicos'
    );

    this.metaTagService.updateMetaTag({
      title: 'Recarga5g.com | Consulta las preguntas mas frecuentes y resuelve todas tus dudas para vender recargas, pago de servicios y pines electrónicos',
      description:
        'Encuentra respuestas a las preguntas más comunes sobre cómo vender recargas, pagar servicios y adquirir pines electrónicos en Recarga5g.com. Resuelve tus dudas aquí.',
      keywords:
        'preguntas frecuentes recargas, dudas vender recargas, ayuda pago servicios, pines electrónicos, soporte Recarga5g.com,ayuda recargas, ayuda recarga5g.com, faqs recarga5g, preguntas comunes recargas, guía usuario recarga5g',
      url: 'https://www.recarga5g.com/mas/faqs',
      typeContent: 'website'
    })

    this.faqsMenuOne = this.faqsService.getMenuOne();
    this.faqsMenuTwo = this.faqsService.getMenuTwo();
    this.faqsMenuThree = this.faqsService.getMenuThree();
    this.faqsMenuFour = this.faqsService.getMenuFour();
  }
}


