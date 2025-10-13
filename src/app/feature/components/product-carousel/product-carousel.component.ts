import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  input,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { isPlatformBrowser } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <swiper-container
    init="false"
      #swProduct
      class="sw-product mx-auto flex flex-nowrap max-w-screen-xl w-full h-full overflow-hidden pointer-events-none [mask-image:linear-gradient(to_right,transparent_0,#ffffff_128px,#ffffff_calc(100%_-_128px),transparent_100%)] dark:[mask-image:linear-gradient(to_right,transparent_0,#000000_128px,#000000_calc(100%_-_128px),transparent_100%)]">
      
      @for(product of products(); track product.id) {
        <swiper-slide 
          class="block sw-product-slide w-[200px] m-0 h-auto">
          <img
            [src]="product.img.src"
            class="sw-product-img w-full h-auto object-cover rounded-lg shadow-lg"
            [alt]="product.img.alt"
            [width]="product.img.width"
            [height]="product.img.height"
            loading="lazy"
          />
        </swiper-slide>
      }
    </swiper-container>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
      
      swiper-container::part(wrapper) {
        transition-timing-function: linear !important;
      }

      .sw-product-slide:nth-child(1n) {
        altura: 550px;
ancho: auto;
      }
    `,
  ],
})
export class ProductCarouselComponent implements AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  products = input.required<ProductCarousel[]>();
  swElement = viewChild<ElementRef<SwiperContainer>>('swProduct');

  private options: SwiperOptions = {
    initialSlide: 0,
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: false,
    pagination: false,
    scrollbar: false,
    loop: true,
    allowTouchMove: false,
    grabCursor: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    speed: 3000,
  };

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const swiperElement = this.swElement()?.nativeElement;
    if (swiperElement) {
      Object.assign(swiperElement, this.options);
      swiperElement.initialize();
    }
  }
}