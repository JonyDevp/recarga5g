import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, inject, input, PLATFORM_ID, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimationScroll]',
  standalone: true // Si estás usando Angular 16+
})
export class AnimationScrollDirective implements AfterViewInit {
  customClass = input.required<string>();
  elementRef = inject(ElementRef);
  renderer2 = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            // Añade la clase de animación
            this.renderer2.addClass(this.elementRef.nativeElement, this.customClass());
            
            // Opcional: Espera a que termine la animación antes de desconectar
            // (depende del tipo de animación que uses)
          this.disconnectObserver()
          }
        });
      }, {
        threshold: 0.1 // Configura según necesites
      });
  
      this.observer.observe(this.elementRef.nativeElement);
    }
  }

  private disconnectObserver(): void {
    if (this.observer) {
      this.observer.unobserve(this.elementRef.nativeElement);
      this.observer.disconnect();
      this.observer = null;
    }
  }

  ngOnDestroy(): void {
    this.disconnectObserver();
  }
}
