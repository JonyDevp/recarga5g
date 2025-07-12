import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
       <a
    class="middle none center mr-4 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase bg-red-500 text-white border-red-500 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
  Leer mas 
   </a>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent { 


}
