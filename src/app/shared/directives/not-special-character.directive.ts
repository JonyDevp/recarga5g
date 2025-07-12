import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNotSpecialCharacter]',
  standalone: true,
})
export class NotSpecialCharacterDirective { 

    private readonly el = inject(ElementRef); 
    private readonly renderer = inject(Renderer2);
    private unlistener: () => void = () => {};

    constructor() {
      this.characterRestriction();
    }

   private characterRestriction(): void {
      this.unlistener = this.renderer.listen(this.el.nativeElement, 'input', (event: Event) => {
        const inputElement = event.target as HTMLInputElement;

        //filtrar caracteres especiales
      const filteredValue = inputElement.value.replace(/[^a-zA-Z0-9 ]/g, '');

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
