import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  OnDestroy,
  OnInit,
  output,
  PLATFORM_ID,
  Renderer2,
  signal,
} from '@angular/core';
import { FaqsService, TitleSection } from '../../faqs.service';
import { FaqsMenuFilterComponent } from '../faqs-menu-filter/faqs-menu-filter.component';
import { DOCUMENT, isPlatformBrowser, NgClass } from '@angular/common';

@Component({
  selector: 'app-faqs-modal-card',
  imports: [FaqsMenuFilterComponent],
  template: `
    @if(isOpenModal()) {
    <div
      class="modal-faqs-wrapper px-5 sm:px-6 lg:px-8 fixed flex items-center justify-center flex-col inset-0 size-full z-20 outline-none overflow-hidden animate-slide-in-top animate-duration-500 visible opacity-100"
    >
      <div
        (click)="onOverlayClick()"
        class="modal-faqs-overlay fixed inset-0 size-full bg-black/30 backdrop-blur-sm z-30"
      ></div>

      <div
       
        [class.hidden-scroll]="isOpenModal()"
        class="faqs-modal-card rounded-md max-h-96 max-w-screen-sm w-full relative overflow-hidden overflow-y-auto shadow-lg pointer-events-auto bg-white dark:bg-slate-700 text-gray-800 mx-auto z-40 opacity-100"
      >
        <form
          action=""
          class="border-b border-b-slate-50 dark:border-b-slate-600"
        >
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="size-4 text-slate-500"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              (input)="onSearchChange($event)"
              class="w-full block text-slate-500 ps-11 p-2.5 text-sm dark:text-white bg-gray-50 dark:bg-gray-700 border border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-slate-500 focus:bg-white dark:focus:bg-slate-600 focus:outline-none dark:placeholder-slate-400"
              placeholder="Buscar pregunta..."
            />
          </div>
        </form>

        <!-- faq general -->
        @if(searchTerm() && !hasResults()) {
        <div class="no-results text-slate-700 dark:text-white p-4">
          No se encontraron resultados para
          <span class="font-semibold">"{{ searchTerm() }}"</span>
        </div>
        }

        @if(filteredSections().generales.length > 0 || !searchTerm()) {
                  <app-faqs-menu-filter
                    [title]="'Preguntas Generales'"
                    [sectionTitle]="filteredSections().generales"
                    (itemSelected)="onOverlayClick()"/>
         }

         @if(filteredSections().pagaqui.length > 0 || !searchTerm()) { 
           <app-faqs-menu-filter
             [title]="'Plataforma Pagaqui'"
             [sectionTitle]="filteredSections().pagaqui"
             (itemSelected)="onOverlayClick()" />
         }
       
         @if(filteredSections().planetaemx.length > 0 || !searchTerm()) { 
           <app-faqs-menu-filter
             [title]="'Plataforma Planetaemx'"
             [sectionTitle]="filteredSections().planetaemx"
             (itemSelected)="onOverlayClick()" />
         }

         @if(filteredSections().terminales.length > 0 || !searchTerm()) { 
           <app-faqs-menu-filter
             [title]="'Terminales'"
             [sectionTitle]="filteredSections().terminales"
             (itemSelected)="onOverlayClick()" />
         }
      </div>
    
    </div>
    }
  `,
   
  styles: `
  .hidden-scroll::-webkit-scrollbar {
    width: 0;
}
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqsFilterModalComponent implements OnInit, OnDestroy {
  private readonly faqsService = inject(FaqsService);
  private readonly document = inject(DOCUMENT);
  private readonly renderer2 = inject(Renderer2);
  private readonly platform_id = inject(PLATFORM_ID);

  // Datos originales
  originalSections = signal<{
    generales: TitleSection[];
    pagaqui: TitleSection[];
    planetaemx: TitleSection[];
    terminales: TitleSection[];
  }>({
    generales: [],
    pagaqui: [],
    planetaemx: [],
    terminales: [],
  });
  searchTerm = signal('');
  isOpenModal = input.required<boolean>();
  closeModal = output<boolean>();

  handlerScrollDocument(): void {
    if (isPlatformBrowser(this.platform_id)) {
      const body = this.document.body;

      if (this.isOpenModal()) {
        this.renderer2.setStyle(body, 'overflow', 'hidden');
      } else {
        this.renderer2.removeStyle(body, 'overflow');
      }
    }
  }

  onOverlayClick(): void {
    this.closeModal.emit(false);
  }

  private scrollEffect = effect(() => {
    if (isPlatformBrowser(this.platform_id)) {
      const isOpen = this.isOpenModal();
      const body = this.document.body;

      if (isOpen) {
        this.renderer2.setStyle(body, 'overflow', 'hidden');
        console.log('Scroll bloqueado');
      } else {
        this.renderer2.removeStyle(body, 'overflow');
        console.log('Scroll restaurado');
      }
    }
  });

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.searchTerm.set(input.value.trim());
  }

  // Secciones filtradas
  filteredSections = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const sections = this.originalSections();

    if (!term) return sections;

    const filterFn = (items: TitleSection[]) => items.filter((item) => item.label.toLowerCase().includes(term));

    return {
      generales: filterFn(sections.generales),
      pagaqui: filterFn(sections.pagaqui),
      planetaemx: filterFn(sections.planetaemx),
      terminales: filterFn(sections.terminales),
    };
  });

  // Verifica si hay resultados en alguna sección
  hasResults(): boolean {
    const sections = this.filteredSections();
    return Object.values(sections).some((section) => section.length > 0);
  }

  ngOnInit(): void {
    this.originalSections.set({
      generales: this.faqsService.getFaqSection('generales'),
      pagaqui: this.faqsService.getFaqSection('pagaqui'),
      planetaemx: this.faqsService.getFaqSection('planetaemx'),
      terminales: this.faqsService.getFaqSection('terminales'),
    });
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platform_id) && this.isOpenModal()) {
      this.renderer2.removeStyle(this.document.body, 'overflow');
    }
  }
}
