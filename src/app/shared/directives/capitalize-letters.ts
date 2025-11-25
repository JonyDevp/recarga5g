import { Directive, ElementRef, inject, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCapitalizeLetters]',
  standalone: true,
})
export class CapitalizeLettersDirective implements OnDestroy{
  private el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private unlistener: () => void = () => { };

  constructor() {
    this.onInputCapitalizeLetters()
  }


  onInputCapitalizeLetters(): void {
    this.unlistener = this.renderer.listen(this.el.nativeElement, 'input', (event: Event) => {
      const inputElement = event.target as HTMLInputElement;
      const originalValue = inputElement.value;

      //filtrar caracteres especiales
      let filteredValue = inputElement.value.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]/g, '');

           filteredValue = filteredValue.toLowerCase();
      // 2) Capitalizar cada palabra
     filteredValue = filteredValue.replace(
          /(^|\s)([a-záéíóúüñ])/g,
          (_match, boundary: string, letter: string) =>
            boundary + letter.toUpperCase()
        );

      // Si no cambió, no hacemos nada
      if (filteredValue === originalValue) {
        return;
      }

      // Actualizar el valor del input
    this.renderer.setProperty(inputElement, 'value', filteredValue);
    });



  }

  ngOnDestroy(): void {
    this.unlistener();
  }
}
