import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { FaqsService, TitleSection } from '../../faqs.service';

@Component({
  selector: 'app-search-filter-options',
  imports: [],
  template: `
   <div class="pt-4 px-4 pb-3">
            <span class="text-slate-600 dark:text-white text-sm  font-semibold mb-2 block">{{title()}}</span>

            <ul>
                <li class="mb-2">
                    @for (title of sectionTitle(); track $index) {
                        <button 
                        type="button" 
                        (click)="scrollToTitle(title.id)"
                        class="flex items-start cursor-pointer rounded-sm text-sm gap-1 text-slate-600 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.5"
                                class="size-4" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>
                            <span class="text-left">{{title.label}}</span>
                        </button>
                    }
                </li>
            </ul>
        </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFilterOptionsComponent {
  title = input.required<string>();
  sectionTitle = input.required<TitleSection[]>();
  itemSelected = output<void>();
  private readonly faqsService = inject(FaqsService);


  scrollToTitle(id: string) {
    this.faqsService.scrollToAnchor(id);
    this.itemSelected.emit(); // Emite el evento cuando se hace clic
  }


 }
