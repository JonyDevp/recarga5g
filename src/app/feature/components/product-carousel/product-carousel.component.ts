import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  input,
  OnInit,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
// import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-product-carousel',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <swiper-container
      #swProduct
      init="false"
      class="sw-product [mask-image:linear-gradient(to_right,transparent_0,#ffffff_128px,#ffffff_calc(100%_-_128px),transparent_100%)] dark:[mask-image:linear-gradient(to_right,transparent_0,#000000_128px,#000000_calc(100%_-_128px),transparent_100%)]  flex flex-row w-full h-full mx-auto overflow-hidden"
    >
      @for(product of products(); track $index ) {

      <swiper-slide
        class="sw-product-slide max-w-[180px] w-full h-auto m-auto mask"
      >
        <img
          [src]="product.img.src"
          class="sw-product-img object-contain"
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
      swiper-container::part(wrapper) {
        transition-timing-function: linear !important;
      }
    `,
  ],
})
export class ProductCarouselComponent implements OnInit, AfterViewInit {
  private readonly platformId = inject(PLATFORM_ID);
  products = input.required<ProductCarousel[]>();
  // private readonly swiper = viewChild<ElementRef<SwiperContainer>>('swiper');
  swElement = viewChild.required<ElementRef>('swProduct');

  private options:SwiperOptions ={
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    direction: 'horizontal',
    spaceBetween: 35,
    speed: 4000,
    loop: true,
    grabCursor: true,

  };

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   const swiperElement = this.swiper()!.nativeElement;

    //   swiperElement.autoplay = {
    //     delay: 0,
    //     disableOnInteraction: false,
    //   };
    //   swiperElement.slidesPerView = 'auto';
    //   swiperElement.slidesPerGroup = 1;
    //   swiperElement.direction = 'horizontal';
    //   swiperElement.loop = true;
    //   swiperElement.speed = 4000;
    //   swiperElement.grabCursor = true;
    //   swiperElement.initialize();
    // }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) { 
      const swiperProduct = this.swElement().nativeElement;
      Object.assign(swiperProduct, this.options);
      swiperProduct.initialize();
    }
  }
}
