import { Directive, ElementRef, inject, input, OnDestroy, OnInit, output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective implements  OnInit, OnDestroy {

  private readonly elementRef = inject(ElementRef);
  private readonly renderer2 = inject(Renderer2);
  appClickOutside = input.required<boolean>()
  outSideClick = output<void>();
  private unlistener: (() => void) | undefined;

  onDocumentClick = (event: Event) => {
    if (!this.elementRef.nativeElement.parentElement.contains(event.target)) {
      this.outSideClick.emit();
    }
  };

  

  ngOnInit(): void {
    this.unlistener = this.renderer2.listen(
      'document',
      'click',
      this.onDocumentClick
    );
  }

  ngOnDestroy(): void {
    if (this.unlistener) {
      this.unlistener();
    }
  }

 }
