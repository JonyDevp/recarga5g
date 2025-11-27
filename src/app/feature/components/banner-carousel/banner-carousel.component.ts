import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  PLATFORM_ID,
  inject,
  CUSTOM_ELEMENTS_SCHEMA,
  signal,
  AfterViewInit,
  viewChild,
} from '@angular/core';
import { ImgCarousel } from 'src/app/interfaces/product-carousel.interface';

import { NgOptimizedImage } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner-carousel',
    imports: [CommonModule, NgOptimizedImage, RouterLink],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    template: `
    <swiper-container init="false"
      class="sw-hero-container flex relative p-0 mx-auto size-full overflow-hidden"
      #swBannerElement
    >
      @for (banner of banners(); track $index; let firstItem = $first) {
      <swiper-slide
        class="sw-hero-slide max-w-[1920px] w-full block h-auto shrink-0"
        
      >
        <a class="sw-hero-link" routerLink="/registro">
          <img
            [ngSrc]="banner.src"
             decoding="sync"
            [alt]="banner.alt"
            width="2000"
            height="550"
            priority
            class="sw-hero-img rounded-3xl shadow-xl"
            
          />
        </a>
      </swiper-slide>
      }
    </swiper-container>
  `,
    styles: [
        `

      swiper-container::part(button-prev) {
        padding: 9px 14px;
        width: 24px;
        height: 24px;
        left: 30px;
        border-radius: 4px;
        color: #fff;
        background: #1d1f33;
      }

      swiper-container::part(button-next) {
        padding: 9px 14px;
        width: 24px;
        height: 24px;
        right: 30px;
        border-radius: 4px;
        color: #fff;
        background: #1d1f33;
      }
    `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerCarouselComponent implements AfterViewInit {
  swContainer = signal<SwiperContainer | null>(null);
  swElement = viewChild.required<ElementRef>('swBannerElement');
  banners = input.required<ImgCarousel[]>();

  platformID = inject(PLATFORM_ID);

  swiperConfig: SwiperOptions = {
    injectStyles: [
      `
      .swiper-slide {
        border: 2px solid blue;
      border-radius: 10px;
      }

      `,
    ],

   
    slidesPerView: 1,
    slidesPerGroup: 1,
    direction: 'horizontal',
    effect: 'fade',
    navigation: true,
    pagination: true,
    autoHeight: true,
    spaceBetween: 30,
    loop: true,
    grabCursor: false,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    speed: 500,


    on: {

      // init: (slide) => {
      //   this.updateSlideClasses(slide);
      //   console.log('se actualizo la vaina')
      // },
   
    //  realIndexChange: (slide) => {
    //   this.updateSlideClasses(slide);
    //  }
    }
  };

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      const swiperHero = this.swElement().nativeElement;
      Object.assign(swiperHero, this.swiperConfig);
      swiperHero.initialize(); // Inicializa Swiper
    }
  }


  updateSlideClasses(swiper: any): void {
    // Quitar clases de todos los slides
    swiper.slides.forEach((slide: HTMLElement) => {
      slide.classList.remove('opacity-1', 'opacity-0');
      slide.classList.add('opacity-0'); // Todos inician con opacity-0
    });
  
    // Agregar clase 'opacity-1' al slide activo
    const activeSlide = swiper.slides[swiper.realIndex];
    if (activeSlide) {
      activeSlide.classList.add('opacity-1');
      activeSlide.classList.remove('opacity-0');
    }
  }

}


