import {
  Component,
  ElementRef,
  PLATFORM_ID,
  inject,
  signal,
  viewChildren,
  effect,
  Renderer2,
  DOCUMENT
} from '@angular/core';

import { Title } from '@angular/platform-browser';
import { metaTagModel } from 'src/app/interfaces/meta-tag.model';
import { MetaTagService } from '../../../../shared/services/meta-tag.service';
import {
  isPlatformBrowser,
} from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { FaqsMenuComponent } from './components/faqs-menu/faqs-menu.component';
import { FaqsService, MenuFaq } from './faqs.service';
import { FaqsFilterModalComponent } from './components/faqs-modal-card/faqs-modal-card.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  templateUrl: './faqs.component.html',
  styles: [
    `
      .faqs-modal-card::-webkit-scrollbar {
        width: 0;
      }
    `,
  ],
  imports: [RouterLink, FaqsMenuComponent, FaqsFilterModalComponent],

  animations: [
    //*contenedor y dispador de las animaciones
    trigger('isOpen', [
      transition(':enter', [
        style({ transform: 'scale(0.95)', opacity: 0 }),
        animate('100ms ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate(
          '75ms ease-in',
          style({ transform: 'scale(0.95)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export default class FaqsComponent {

  // faqsTitle = viewChildren<QueryList<ElementRef>>('titleSection')
  faqsTitle = viewChildren<ElementRef>('titleSection');
  panelOpenState = false;
  item: number = 0;
  mail = 'tae.celular@gmail.com';

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


  //? META TAG
  tag: metaTagModel = {
    title:
      'Recarga5g.com | Preguntas frecuentes para vender recargas electrónicas con excelentes comisiones',
    description:
      'Asesórate con nosotros sobre como puede vender recargas electrónicas: Telcel, Bait Movistar y mucho mas!. Con excelentes comisiones',
    keywords: 'Preguntas frecuentes, recarga5g.com, FAQS recargas',
    url: 'recarga5g.com/ayuda/faqs',
    type: 'website',
    image: 'https://recarga5g.com/Venta-recargas.png',
    card: 'summary_large_image',
    creator: '@recargascelular',
  };


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

    this.faqsMenuOne = this.faqsService.getMenuOne();
    this.faqsMenuTwo = this.faqsService.getMenuTwo();
    this.faqsMenuThree = this.faqsService.getMenuThree();
    this.faqsMenuFour = this.faqsService.getMenuFour();

    
    // this.metaTagService.generateTags({
    //   ...this.tag,
    // });
  }
}


