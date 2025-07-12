import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doubts',
  imports: [
    NgClass,
    RouterLink
  ],
  template: `
  <section class="section-dudas container mx-auto shadow-sm px-8 lg:px-0 mb-20">
  <div class="grid grid-cols-1 px-6 py-8 lg:py-16 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 bg-gradient-to-br rounded-3xl"
    [ngClass]="bgClass() ? bgClass() : 'from-red-700 to-red-900 dark:from-blue-700 dark:to-blue-900'">
    <div class="mx-auto max-w-lg text-center lg:mx-0 lg:pl-10">
      <h5 class="text-3xl font-bold sm:text-4xl text-white relative">
        {{ title() }}
        <svg _ngcontent-ng-c2649257774="" viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 text-deep-purple-accent-100 lg:w-32  sm:block"><defs _ngcontent-ng-c2649257774=""><pattern _ngcontent-ng-c2649257774="" id="700c93bf-0068-4e32-aafe-ef5b6a647708" x="0" y="0" width=".135" height=".30"><circle _ngcontent-ng-c2649257774="" cx="1" cy="1" r=".7"></circle></pattern></defs><rect _ngcontent-ng-c2649257774="" fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)" width="52" height="24"></rect></svg>
      </h5>

      <p class="mt-4 text-white">
        {{text()}}
      </p>

      <a routerLink="/registro"
        [ngClass]="textBtn() ? textBtn() : 'text-red-700 dark:text-blue-700'"
        class="mt-9 inline-block cursor-pointer rounded bg-white px-12 py-3 text-sm font-semibold shadow-lg">
        Registrarme
      </a>
    </div>

    <div class="mx-auto">
      <div class="flex flex-wrap justify-center gap-9">
        <a class="relative flex gap-4 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-red-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          href="tel:+522717140102" target="_blank" rel="noopener noreferrer">
          Llamar a mi asesor
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
        </a>

        <a class="contact__link cur" href="{{link()}}" target="_blank"
          rel="noopener noreferrer" aria-label="Contactar por whatsApp">
          <img src="assets/img/whatsapp_contact.png" alt="">
        </a>
      </div>
    </div>
  </div>
</section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoubtsComponent { 

  title = input.required<string>();
  text = input.required<string>();
  bgClass= input<string>();
  textBtn = input<string>();
  link = input.required<string>();
}
