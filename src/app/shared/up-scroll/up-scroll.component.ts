
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  inject,
  PLATFORM_ID,
  Renderer2,
  signal,
  DOCUMENT,
  DestroyRef,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-up-scroll',
  templateUrl: './up-scroll.component.html',
  styles: [` `,],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpScrollComponent {
  activeScroll = signal(false);
  topPosToStartShowing = 2000;

  private readonly document = inject(DOCUMENT);
  private readonly plataform_id = inject(PLATFORM_ID);
  private readonly renderer2 = inject(Renderer2);

  private readonly destroyRef = inject(DestroyRef);


  constructor() {
    if (!isPlatformBrowser(this.plataform_id)) return;

    const win = this.document.defaultView ?? window;
    const unlisten = this.renderer2.listen(win, 'scroll', () => {
      const scrollPosition =
        win.scrollY ||
        this.document.documentElement?.scrollTop ||
        this.document.body?.scrollTop ||
        0;
        
      this.activeScroll.set(scrollPosition >= this.topPosToStartShowing);
    });

    this.destroyRef.onDestroy(() => {
      unlisten();
    });
  }

  gotoTop() {
    if (!isPlatformBrowser(this.plataform_id)) return;

    this.document.defaultView?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }




}
