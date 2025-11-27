import {
  Component,
  ElementRef,
  PLATFORM_ID,
  inject,
  signal,
  viewChildren,
  effect,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnInit,
  runInInjectionContext,
  EnvironmentInjector,
  OnDestroy,

} from '@angular/core';

import { Title } from '@angular/platform-browser';
import { MetaTagService } from '@shared/services/meta-tag.service';
import {
  isPlatformBrowser,
} from '@angular/common';
import { RouterLink } from '@angular/router';
import { FaqsMenuComponent } from './components/faqs-menu/faqs-menu.component';
import { FaqsService, MenuFaq } from './faqs.service';
import { FaqsFilterModalComponent } from './components/faqs-modal-card/faqs-modal-card.component';
import { CountUpModule } from "ngx-countup";

@Component({
  selector: 'app-faqs',
  standalone: true,
  templateUrl: './faqs.component.html',
  styles: [`
    .hidden-scroll::-webkit-scrollbar {
    width: 0;
}
    `],
  imports: [RouterLink, FaqsMenuComponent, FaqsFilterModalComponent, CountUpModule],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export default class FaqsComponent implements OnInit, AfterViewInit, OnDestroy {

  faqsTitle = viewChildren<ElementRef>('titleSection');
  panelOpenState = false;
  item: number = 0;
  mail = 'tae.celular@gmail.com';

  private readonly title = inject(Title);
  private platform_id = inject(PLATFORM_ID);
  private readonly envInjector = inject(EnvironmentInjector);

  private readonly metaTagService = inject(MetaTagService);
  private readonly faqsService = inject(FaqsService);

  private observer?: IntersectionObserver;

  faqsMenuOne: MenuFaq[] = [];
  faqsMenuTwo: MenuFaq[] = [];
  faqsMenuThree: MenuFaq[] = [];
  faqsMenuFour: MenuFaq[] = [];
  isOpenModal = signal(false);
  activeTitle = signal('');



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

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platform_id)) return;
    const titles = this.faqsTitle();
    if (!titles.length) return;
    this.observer = new IntersectionObserver(
      (entries) => {
        // En zoneless: nos aseguramos de escribir señales dentro del contexto de Angular
        runInInjectionContext(this.envInjector, () => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              const id = element.id;

              // Actualizamos el título activo
              this.activeTitle.set(id);

              // Si solo quieres reaccionar al primer elemento visible, puedes hacer break
              break;
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50% 0px',
      }
    );

    // Suscribir todos los títulos al observer
    titles.forEach((section) => {
      this.observer!.observe(section.nativeElement);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }


  closeModal(event: boolean) {
    this.isOpenModal.set(event)
  }

  scrollToTitle(id: string) {
    this.faqsService.scrollToAnchor(id)
  }


}


