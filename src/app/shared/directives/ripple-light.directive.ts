import { Directive, ElementRef, inject, input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[twRipple]',
  standalone: true,
})
export class RippleLightDirective implements OnInit, OnDestroy{ 

twRippleColor = input<string>('rgba(255, 255, 255, 0.3)'); // Color por defecto para el ripple

 private readonly el = inject(ElementRef);
 private readonly renderer2 = inject(Renderer2);
 private clickUnlisten!: () => void; // Almacena la función para desregistrar el listener de clic


 ngOnInit(): void {
     // Escucha el evento click en el botón usando Renderer2.listen
     this.clickUnlisten = this.renderer2.listen(this.el.nativeElement, 'click', this.createRipple.bind(this));
 }

 private createRipple(event: MouseEvent) {
   
    const btn = this.el.nativeElement;
    const ripple = this.renderer2.createElement('span');

  
    //Establecemos el estilo inicial para el efecto ripple
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter /2;

    this.renderer2.setStyle(ripple, 'width', `${diameter}px`);
    this.renderer2.setStyle(ripple, 'height', `${diameter}px`);
    this.renderer2.setStyle(ripple, 'left', `${event.clientX - btn.offsetLeft - radius}px`);
    this.renderer2.setStyle(ripple, 'top', `${event.clientY - btn.offsetTop - radius}px`);
    this.renderer2.setStyle(ripple, 'background-color', this.twRippleColor);
    this.renderer2.setStyle(ripple, 'position', 'absolute');
    this.renderer2.setStyle(ripple, 'border-radius', '50%');
    this.renderer2.setStyle(ripple, 'transform', 'scale(0)');
    this.renderer2.setStyle(ripple, 'animation', 'ripple-animation 0.6s linear');
    this.renderer2.setStyle(ripple, 'pointer-events', 'none');

      // Insertamos el span en el botón
      this.renderer2.appendChild(btn, ripple);

      //limpiamos el ripple despues de la animación
      ripple.addEventListener('animationend', () => {
        this.renderer2.removeChild(btn, ripple);
      });
  }


  ngOnDestroy(): void {
    // Desregistrar el evento cuando el componente/directiva se destruye
    if (this.clickUnlisten) {
      this.clickUnlisten();
    }
  }
}
