import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA, PLATFORM_ID, ChangeDetectionStrategy, signal, Renderer2, DOCUMENT } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { Validators } from '@angular/forms';

//Services
import { SeoService } from '@shared/services/seo.service';
// import { SignupService } from './signup.service';
import { GetSafeSvgService } from '@shared/services/get-safe-svg.service';

import { States } from 'src/app/interfaces/address.interface';

// import confetti from 'canvas-confetti';
// import { NgxMaskDirective } from 'ngx-mask';
// import { CapitalizeLettersDirective } from '@shared/directives/capitalize-letters';
// import { ValidatorsService } from '@shared/services/validators.service';
import StepsRegister, { StepsForRegister } from './steps-register/steps-register';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-registro',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // NgxMaskDirective,
    // CapitalizeLettersDirective,
    StepsRegister
  ],
  templateUrl: './registro.component.html',
  styles: [` `],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class RegistroComponent implements OnInit {

  signUpForm!: FormGroup;
  statesOfCountry: States[] = [];
  steps: StepsForRegister[] = [];
  // private formBuilder = inject(FormBuilder);
  // private readonly platformId = inject(PLATFORM_ID);
  // private readonly renderer2 = inject(Renderer2);
  // private readonly document = inject(DOCUMENT);

  private readonly metaTagService = inject(SeoService);
  private readonly svgService = inject(GetSafeSvgService);
  private readonly title = inject( Title);

  // private previousBodyOverflow: string | null = null;
  // private readonly validatorService = inject(ValidatorsService);

  // handlerModal = signal(false);
  // confettiTimeout: any = null;

  // private initSignUpForm() {
  //   this.signUpForm = this.formBuilder.group({
  //     bussinesName: ['', [this.validatorService.noWriteSpaceValid, Validators.minLength(3)]],
  //     fullName: ['', [Validators.required, this.validatorService.noWriteSpaceValid]],
  //     email: ['', [Validators.required, this.validatorService.validEmail, this.validatorService.noWriteSpaceValid]],
  //     phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  //     address: this.formBuilder.group({
  //       zip: ['', [Validators.required, Validators.maxLength(5), Validators.pattern(/^\d{5}$/)]],
  //       state: ['', [Validators.required]],
  //       mun_deleg: ['', [Validators.required]],
  //       col: ['', [Validators.required]],
  //       street: ['', [Validators.required]],
  //     }),

  //   })
  // }

  // constructor() {
  //   this.initSignUpForm();
  // }


  // isInvalidField(field: string): boolean | undefined {
  //   return this.signUpForm.get(field)?.invalid && this.signUpForm.get(field)?.touched;
  // }

  // register() {

  //   if (this.signUpForm.invalid) {
  //     this.markFormGroupTouched(this.signUpForm);
  //     return;
  //   }

  //   const formValues = this.signUpForm.value;
  //   this.openModal()
  //   //TODO: Llamar al servicio 

  // }

  // openModal(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const body = this.document.body;
  //     this.previousBodyOverflow = body.style.overflow || '';

  //     this.renderer2.setStyle(body, 'overflow', 'hidden');
  //     this.handlerModal.set(true);

  //     this.confettiTimeout = setTimeout(() => {
  //       if (this.handlerModal()) {
  //         this.launchConfetti();
  //       }
  //     }, 1000);
  //   }
  // }

  // closeModal(): void {

  //   if (isPlatformBrowser(this.platformId)) {
  //     const body = this.document.body;
  //     this.handlerModal.set(false);


  //     if (this.previousBodyOverflow !== null) {
  //       if (this.previousBodyOverflow) {
  //         this.renderer2.setStyle(body, 'overflow', this.previousBodyOverflow);
  //       } else {
  //         // Si antes no había estilo inline, lo eliminamos
  //         this.renderer2.removeStyle(body, 'overflow');
  //       }
  //       this.previousBodyOverflow = null;
  //     }



  //   }
  //   // 2) Limpia y reinicia el formulario
  //   this.cleanForm();

  //   // 3) Cancela el timeout del confetti, si aún no se ha disparado
  //   if (this.confettiTimeout) {
  //     clearTimeout(this.confettiTimeout);
  //     this.confettiTimeout = null;
  //   }
  // }


  // private markFormGroupTouched(formGroup: FormGroup) {
  //   Object.values(formGroup.controls).forEach((control) => {
  //     if (control instanceof FormGroup) {
  //       this.markFormGroupTouched(control);
  //     } else {
  //       control.markAsTouched();
  //     }
  //   });
  // }

  // private cleanForm(): void {
  //   this.signUpForm.reset();
  //   this.signUpForm.markAsPristine();
  //   this.signUpForm.markAsUntouched();
  //   this.signUpForm.updateValueAndValidity();
  // }

  // launchConfetti() {
  //   const count = 200;
  //   const defaults = {
  //     origin: { y: 0.7 }
  //   };

  //   function fire(particleRatio: number, opts: any) {
  //     confetti({
  //       ...defaults,
  //       ...opts,
  //       particleCount: Math.floor(count * particleRatio)
  //     });
  //   }

  //   // Multiple confetti bursts with different settings
  //   fire(0.25, {
  //     spread: 26,
  //     startVelocity: 55,
  //   });

  //   fire(0.2, {
  //     spread: 60,
  //   });

  //   fire(0.35, {
  //     spread: 100,
  //     decay: 0.91,
  //     scalar: 0.8
  //   });

  //   fire(0.1, {
  //     spread: 120,
  //     startVelocity: 25,
  //     decay: 0.92,
  //     scalar: 1.2
  //   });

  //   fire(0.1, {
  //     spread: 120,
  //     startVelocity: 45,
  //   });
  // }


  ngOnInit(): void {
      this.title.setTitle('Recarga5g.com: Registrate y vende recargas, pago de servicios y pines electrónicos')

    this.metaTagService.updateMetaTag({
      title: 'Recarga5g.com: Registrate y vende recargas, pago de servicios y pines electrónicos',
      description: 'Sin importar el tipo de negocio que tengas, regístrate y comienza a vender recargas electrónicas, pines y pago de servicios con comisiones hasta del 7.5%',
      keywords: 'registro recarga5g, vender recargas, vender pines electrónicos, pago de servicios, comisiones recarga5g, registro venta recargas, plataforma recargas, cuenta para vender recargas, como vender recargas, ganar dinero vendiendo recargas, registro para venta de recargas en negocios, registro para vender recargas en comercios, ganar dinero con recargas, inscripcion para vender recargas',
      url: '/registro',
      typeContent: 'website'
    });

    this.steps = [
      {
        id: 1,
        svg: this.svgService.getSafeSvg(`
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
               stroke-linejoin="round" color="white" style="color:white" height="50" width="50"
               xmlns="http://www.w3.org/2000/svg">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
               <path
                 d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
               </path>
               <path d="M10 10l2 -2v8"></path>
             </svg>`
        ),
        title: 'Registrate',
        description: 'Llena el formulario con tus datos personales, para ello necesitaras un correo y numero de telefono',
        img: {
          url: 'assets/img/svg/register.svg',
          alt: 'Registro para vender recargas'
        }
      },

      {
        id: 2,
        svg: this.svgService.getSafeSvg(`
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                stroke-linejoin="round" color="white" style="color:white" height="50" width="50"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                </path>
                <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path>
             </svg>`),
        title: 'Deposita o Transfiere',
        description: 'Inicia con la venta de recargas con una inversión minima de $100 pesos mexicanos',
        img: {
          url: 'assets/img/svg/depositar.svg',
          alt: 'Depositar monto minimo para recargar saldo'
        }
      },

      {
        id: 3,
        svg: this.svgService.getSafeSvg(`
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                stroke-linejoin="round" color="white" style="color:white" height="50" width="50"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
                </path>
                <path
                  d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1">
                </path>
            </svg>`),
        title: 'Registra tu comprobante',
        description: 'Reporta tu comprobante de pago en la plataforma o bien por WhatsApp, adjuntado tu usuario',
        img: {
          url: 'assets/img/svg/reportar.svg',
          alt: 'Registro comprobante de pago para recargar saldo'
        }
      },

      {
        id: 4,
        svg: this.svgService.getSafeSvg(`
             <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
              stroke-linejoin="round" color="white" style="color:white" height="50" width="50"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z">
              </path>
              <path d="M10 8v3a1 1 0 0 0 1 1h3"></path>
              <path d="M14 8v8"></path>
            </svg>
            `),
        title: '¡Listo!',
        description: 'Asi de sencillo podrás vender recargas a cualquier compañia, con excelentes comisiones',
        img: {
          url: 'assets/img/svg/ok.svg',
          alt: 'recarga saldo de manera facil para vender tiempo aire'
        }
      }
    ];

  }
}

