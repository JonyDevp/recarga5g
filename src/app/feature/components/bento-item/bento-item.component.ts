import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'bento-item',
  imports: [],
  template: `
    <article [class]="customclass" class="relative col-span-5 rounded-lg backdrop-blur-md border border-black/100 shadow-inner shadow-white/10">

    <!-- TODO: añadir un fade in negro para que se vea el contenido -->
       <ng-content select="[image]"/>

        <div class="select-none flex flex-col gap-1 p-6 text-lg z-20 justify-end h-full">
          <h2 class="text-balance font-semibold text-3xl">{{title}}</h2>
          <h3 class="text-3xl font-semibold text-sky-200/80 mb-4">{{subtitle}}</h3>
        </div>
       
        <ng-content select="[content]"/>

    </article>
  `,
  styleUrl: './bento-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BentoItemComponent { 
  // title = input.required<string>();
  // subtitle = input<string>();
  // customclass = input<string>();
  @Input() title!: string; // Corrección: Uso de @Input
  @Input() subtitle?: string;
  @Input() customclass?: string;
}
