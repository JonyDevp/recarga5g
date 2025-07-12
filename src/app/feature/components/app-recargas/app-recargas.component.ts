import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  PLATFORM_ID,
  inject,
  input,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
  viewChild,
} from '@angular/core';

import { CarouselApp } from './interface/app.interface';
import { SwiperOptions } from 'swiper/types';
// import { Swiper, SwiperOptions } from 'swiper/types';

@Component({
    selector: 'app-recargas',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="app">
      <div
        class="relative flex items-center justify-center mx-auto border-gray-800 dark:border-gray-900 bg-gray-800 dark:bg-gray-900 border-4 rounded-[2.5rem] h-[588px] w-[283px] shadow-xl"
      >
        <!-- <span
        class="w-[148px] h-[18px] bg-gray-800 dark:bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10">
    </span> -->

        <span
          class="border border-black bg-black w-3 h-3 mt-2 rounded-full top-0 absolute z-10 left-1/2 -translate-x-1/2"
        ></span>

        <span
          class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-600 absolute -start-[7px] top-[124px] rounded-s-lg"
        >
        </span>

        <span
          class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-600 absolute -start-[7px] top-[178px] rounded-s-lg"
        >
        </span>

        <span
          class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-600 absolute -end-[7px] top-[142px] rounded-e-lg"
        >
        </span>
        <div
          class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-500"
        >
          <swiper-container init="false" #swiperApp class="swiper-app">
            @for (product of carouselImages(); track $index) {
            <swiper-slide class="swiper-app__slide">
          
              <img
                [src]="product.img.src"
                class="swiper-app__img swiper-app__img w-[272px] h-[572px]"
                [alt]="product.img.alt">
            </swiper-slide>
            }
          </swiper-container>
        </div>
      </div>
    </div>
  `,
    styles: `

  `,
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRecargasComponent {
  swAppElement = viewChild.required<ElementRef>('swiperApp');
  private readonly plataform_id = inject(PLATFORM_ID);

  carouselImages = input.required<CarouselApp[]>();

  private swiperAppConfig: SwiperOptions = {
    loop: true,
    effect: 'fade',
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 500,
  };

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.plataform_id)) {
      const swApp = this.swAppElement().nativeElement;
      Object.assign(swApp, this.swiperAppConfig);
      swApp.initialize();
    }
  }
}
