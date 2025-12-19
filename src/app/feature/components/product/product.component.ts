import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductCarousel } from '@interfaces/product-carousel.interface';

@Component({
  selector: 'app-product',
  imports: [
    NgClass
  ],
  template: `
      <div [attr.data-aos]="animateScrollClass()"
          [ngClass]="size() ? size() : ''"
      class="section-row border-b border-slate-300/70 dark:border-slate-500/50 py-10 relative mx-auto">
      <div class="bg-shape-wrapper absolute inset-0 top-60 grid grid-cols-2 -space-x-52 opacity-20" aria-hidden="true">
        <div
          class="bg-shape h-40 bg-gradient-to-br from-violet-500 to-sky-500 blur-[106px] dark:from-blue-700 dark:to-sky-500 left-0">
        </div>
        <div
          class="bg-shape h-24 bg-gradient-to-r from-purple-400 to-blue-300 blur-[106px]  dark:to-indigo-600 right-0">
        </div>

      </div>
      <div class="flex items-center justify-center my-4">
        <div
          class="font-semibold text-sm py-[0.375rem] px-4 rounded-md bg-slate-800 dark:bg-slate-700 text-slate-100 shadow-sm inline-flex items-center gap-2">

          <h4>
            {{titleSection()}}
          </h4>
        </div>

      </div>
      <ul
        [ngClass]="gridStyle() ? gridStyle() : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'"
        class="companies-row grid items-center justify-center gap-x-6 gap-y-12 mx-auto">
        @for (company of product(); track $index) {
        <li class="companies-col w-full px-4 relative group max-w-[180px] mx-auto">
          <div
            class="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 dark:from-purple-600/30 dark:to-pink-600/30 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
          </div>
          <div
            class="relative bg-slate-100 dark:bg-slate-100/80 ring-1 shadow-sm ring-black/5 rounded-lg group-hover:scale-110 duration-1000">
            <a [href]="company.siteweb" class="cursor-pointer block" rel="noopener noreferrer" target="_blank">
              <img [src]="company.img.src" [alt]="company.img.alt" loading="lazy" [title]="company.company" width="" height="">
            </a>
          </div>
        </li>
        }
      </ul>
      
    </div>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  titleSection = input.required<string>();
  size = input<string>();
  gridStyle = input<string>();
  product = input.required<ProductCarousel[]>()
  animateScrollClass = input.required<string>();
 }
