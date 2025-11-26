import { NgClass, ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
// import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { MenuFaq } from '../../faqs.service';



@Component({
  selector: 'app-faqs-menu',
  imports: [NgClass],
  template: `
    <ul>
      @for (item of menuItems(); track item.id) {

      <li class="">
        @if(item.menu && item.menu.length > 0) {
          <button
          type="button"
            (click)="scrollToAnchor(item.id)"
            [ngClass]="{
              'bg-gray-800 text-gray-200 dark:bg-gray-700 dark:text-white':
                isAnyChildActive(item)
            }"
            class="font-semibold mb-3 btn-dropdown inline-flex items-center gap-2 cursor-pointer px-3 py-2 text-sm rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              class="size-4 transition-[rotate] duration-300"
              viewBox="0 0 24 24"
              [ngClass]="isAnyChildActive(item) ? 'rotate-90' : 'rotate-0'">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            {{ item.label }}
          </button>

   
<ul
            class=" transition-all duration-300 pl-4 ml-10 border-l border-l-slate-300 dark:border-l-slate-300/30 "
            [ngClass]="isAnyChildActive(item)  ? 'h-auto visible max-h-[1000px]' : 'max-h-0 invisible opacity-0'">
            @for (subitem of item.menu; track subitem.id) {

            <li class="faqs-list__li pb-4">
            
            <button
            type="button"
                [ngClass]="{
                  'bg-gray-800 text-gray-200 dark:bg-gray-700 dark:text-white':
                    activeSection() === subitem.id }"
                class="cursor-pointer faqs-link px-3 py-2 rounded-md hover:text-slate-700 hover:bg-gray-300  text-sm"
                (click)="scrollToAnchor(subitem.id)">{{ subitem.label }}
              
              </button>
  
            </li> 
            }
          </ul>
     
        } @else {
               <button
          type="button"
            (click)="scrollToAnchor(item.id)"
            [ngClass]="{
              'bg-gray-800 text-gray-200 dark:bg-gray-700 dark:text-white':
                isAnyChildActive(item)
            }"
            class="font-semibold mb-3 btn-dropdown inline-flex items-center gap-2 cursor-pointer px-3 py-2 text-sm rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              class="size-4 transition-[rotate] duration-300"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            {{ item.label }}
          </button>
     
        }
   
      </li>

      }
    </ul>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqsMenuComponent {

  activeSection = input.required<string>();
  item: number = 0;
  private viewScroll = inject(ViewportScroller);
  menuItems = input.required<MenuFaq[]>();
  isActivo = signal(false);
  openSectionId = signal<string | null>(null);

  toggleSection(id: string) {
    this.openSectionId.update(current =>
      current === id ? null : id
    );
  }


  scrollToAnchor(anchor: string) {
    this.viewScroll.setOffset([0, 100]); // [x-offset, y-offset]
    this.viewScroll.scrollToAnchor(anchor);
  }

  isAnyChildActive(item: MenuFaq): boolean {
    return item.menu?.some(subitem => subitem.id === this.activeSection()) ?? false;
  }


 }
