import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AdvantageList } from 'src/app/interfaces/advantage-list.interface';

@Component({
    selector: 'app-advantage-list',
    imports: [
        CommonModule,
        NgClass
    ],
    template: `
   <ul class="advantage__ul flex flex-wrap flex-col md:flex-row items-center mt-4">
            @for (option of listOptions(); track $index) {
            <li class="advantage__li basis-2/4 my-4 w-full lg:w-2/4 md:pl-3 md:pr-3">
             
                <p
                  [ngClass]="option.isActive ? 'bg-red-600 text-white dark:bg-blue-600' : 'bg-white dark:bg-slate-700 border-l-red-500 dark:border-l-blue-500 border-l-2'"
                  class="advantage_label text-sm relative z-[2] block py-3 px-4 rounded-md shadow-lg shadow-red-300/20 dark:shadow-blue-800/10">
                  {{ option.label }}
                </p>       
            </li>
            }
          </ul>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AdvantageListComponent {

  listOptions = input.required<AdvantageList[]>()

 }

