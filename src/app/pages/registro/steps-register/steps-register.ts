import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, input, PLATFORM_ID, viewChild } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-steps-register',
  imports: [],
  template: `

    <div class="swiper-content relative size-full flex justify-center items-center">

     <swiper-container #swiperInfo class="swiper-info size-full" init="false">
      @for (step of steps(); track $index; let i = $index) {
      <swiper-slide
        class="swiper-steps flex justify-center items-center flex-col"
      >
        <div class="group relative text-center">
          <div class="relative space-y-8 py-12 p-8">
            <div class="mx-auto flex justify-center items-center mb-4">
              <span [innerHTML]="step.svg"></span>
            </div>
            <div class="space-y-2 mx-auto">
              <h5
                class="text-white font-semibold text-3xl lg:text-4xl transition"
              >
                {{ step.title }}
              </h5>
              <p class="text-gray-100 text-lg">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="lg:max-w-[450px] w-full">
          <img
            [src]="step.img.url"
            class="lg:block hidden size-full object-cover"
            [alt]="step.img.alt"
            [attr.loading]="i === 0 ? 'eager' : 'lazy'"
          />
        </div>
      </swiper-slide>
      }
    </swiper-container>

    <button
      (click)="changeSlide(-1)"
      class="swiper-button-prev z-2 lg:block absolute cursor-pointer top-1/2 left-2.5 right-auto text-3xl font-semibold text-white"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-12"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </button>

    <button
      (click)="changeSlide(1)"
      class="swiper-button-next z-2 lg:block absolute cursor-pointer top-1/2 right-2.5 left-auto text-3xl font-semibold text-white"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-12"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
    </div>

  `,
  styles: '',
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StepsRegister {

    private readonly swiperEl = viewChild.required<ElementRef<SwiperContainer>>('swiperInfo');
  private readonly platformId = inject(PLATFORM_ID);

    // Configuración optimizada para Swiper Element
  private readonly swiperOptions: SwiperOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 35,
    speed: 500,
    centeredSlides: true,
    pagination: false,
    scrollbar: false,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
  };


  steps = input.required<StepsForRegister[]>();

   changeSlide(prevOrNext: number): void {
    const swEl = this.swiperEl()?.nativeElement;
    if (prevOrNext === -1) {
      swEl?.swiper.slidePrev()
    } else {
      swEl?.swiper.slideNext()
    }
  }

   ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const swiperRegister = this.swiperEl()?.nativeElement;

    if (swiperRegister) {
      Object.assign(swiperRegister, this.swiperOptions);
      swiperRegister.initialize();
    }
  }

 }


 export type StepsForRegister = {
  id: number;
  svg: SafeHtml;
  title: string;
  description: string;
  img: { url: string; alt: string }
}