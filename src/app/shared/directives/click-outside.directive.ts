import {
  Directive,
  ElementRef,
  Renderer2,
  DestroyRef,
  inject,
  input,
  output,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {

  // Elemento host
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  // Control externo para activar o desactivar la detección
  appClickOutside = input.required<boolean>();

  // Evento que se emite cuando se hace click fuera
  outSideClick = output<void>();

  private unlisten?: () => void;

  constructor() {
    // Evitamos registrar eventos en entornos que no sean navegador (SSR, tests)
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Registramos el listener sobre el document usando Renderer2
    this.unlisten = this.renderer.listen(
      this.document,
      'click',
      (event: Event) => this.onDocumentClick(event),
    );

    // Limpieza automática con DestroyRef (sin implementar OnDestroy)
    this.destroyRef.onDestroy(() => {
      if (this.unlisten) {
        this.unlisten();
        this.unlisten = undefined;
      }
    });
  }

  private onDocumentClick(event: Event): void {
    // Si está desactivada la directiva, no hacemos nada
    if (!this.appClickOutside()) {
      return;
    }

    const hostElement = this.elementRef.nativeElement;
    const clickedElement = event.target as Node | null;

    // Si el click fue fuera del elemento host, emitimos el evento
    if (clickedElement && !hostElement.contains(clickedElement)) {
      this.outSideClick.emit();
    }
  }
}
