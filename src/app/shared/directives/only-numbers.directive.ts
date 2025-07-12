import { Directive, ElementRef, inject, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]',
  standalone: true,
})
export class OnlyNumbersDirective implements OnDestroy{ 

  private readonly el = inject(ElementRef); 
  private readonly renderer = inject(Renderer2);
  private unlistener: () => void = () => {};

  constructor() {
    this.inputRestriction();
  }

  private inputRestriction(): void {
   this.unlistener =  this.renderer.listen(this.el.nativeElement, 'input', (event: Event) => {
      const inputElement = event.target as HTMLInputElement;

      //filtrar solo valores numericos
      const filteredValue = inputElement.value.replace(/[^0-9]/g, '');

      if (inputElement.value !== filteredValue) {
        // Actualizar el valor solo si hay caracteres no válidos
        this.renderer.setProperty(inputElement, 'value', filteredValue);
      }
    });
  }

  ngOnDestroy(): void {
    this.unlistener();

  }
}
