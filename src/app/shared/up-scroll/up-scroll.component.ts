import { trigger } from '@angular/animations';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  inject,
  PLATFORM_ID,
  Renderer2,
  signal,
  DOCUMENT
} from '@angular/core';

@Component({
  selector: 'app-up-scroll',
  templateUrl: './up-scroll.component.html',
  styles: [
    `
    
    `,
  ],
  imports: [CommonModule],
})
export class UpScrollComponent {
  // activeScroll: boolean = false;
  activeScroll = signal<boolean>(false);
  topPosToStartShowing = 2000;

  private readonly document = inject(DOCUMENT);
  private readonly plataform_id = inject(PLATFORM_ID);

  @HostListener('window: scroll')
  scrollUp(): void {
    if (isPlatformBrowser(this.plataform_id)) {
      const scrollPosition =
        window.scrollY ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop ||
        0;

      if (scrollPosition >= this.topPosToStartShowing) {
        this.activeScroll.set(true);
      } else {
        this.activeScroll.set(false);
      }
    }
  }

  gotoTop() {
    if (isPlatformBrowser(this.plataform_id)) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }
}
