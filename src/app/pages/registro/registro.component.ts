import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild, PLATFORM_ID, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SafeHtml } from '@angular/platform-browser';

//Services
import { MetaTagService } from '@shared/services/meta-tag.service';
import { SignupService } from './signup.service';
import { PostalDirectoryService } from './postal-directory.service';
import { GetSafeSvgService } from '@shared/services/get-safe-svg.service';

import { States } from 'src/app/interfaces/address.interface';
import { OnlyNumbersDirective } from '@shared/directives/only-numbers.directive';
import { NotSpecialCharacterDirective } from '@shared/directives/not-special-character.directive';
import { SwiperOptions } from 'swiper/types';
import confetti from 'canvas-confetti';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-registro',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OnlyNumbersDirective,
    NotSpecialCharacterDirective
  ],
  templateUrl: './registro.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class RegistroComponent implements OnInit, AfterViewInit {

  signUpForm!: FormGroup;
  statesOfCountry: States[] = [];
  steps: Steps[] = [];
  private readonly swiperEl = viewChild<ElementRef<SwiperContainer>>('swiperInfo');
  private formBuilder = inject(FormBuilder);
  private readonly addressService = inject(PostalDirectoryService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly metaTagService = inject(MetaTagService);
  private readonly svgService = inject(GetSafeSvgService);
  private readonly signupService = inject(SignupService);

  // Configuración optimizada para Swiper Element
  private readonly swiperOptions: SwiperOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 35,
    speed: 500,
    centeredSlides: true,
    pagination: false,
    scrollbar: false,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
  };

  private initSignUpForm() {
    this.signUpForm = this.formBuilder.group({
      bussinesName: ['', [Validators.minLength(4)]],
      fullName: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: this.formBuilder.group({
        zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
        state: ['', [Validators.required]],
        mun_deleg: ['', [Validators.required]],
        col: ['', [Validators.required]],
        street: ['', [Validators.required]],
      }),

    })
  }

  constructor() {
    this.initSignUpForm();
  }

  changeSlide(prevOrNext: number): void {
    const swEl = this.swiperEl()?.nativeElement;
    if (prevOrNext === -1) {
      swEl?.swiper.slidePrev()
    } else {
      swEl?.swiper.slideNext()
    }
  }

  isInvalidField(field: string): boolean | undefined {
    return this.signUpForm.get(field)?.invalid && this.signUpForm.get(field)?.touched;
  }

  register() {

    if (this.signUpForm.invalid) {
      return this.markFormGroupTouched(this.signUpForm);
    }

    const formValues = this.signUpForm.value;
    this.cleanForm();
    this.launchConfetti();
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

  private cleanForm() {
    this.signUpForm.reset({
      bussinesName: '',
      fullName: '',
      email: '',
      phoneNumber: '',
      address: {
        zip: '',
        state: '',
        municipDeleg: '',
        col: '',
        street: ''
      }
    });
  }

  launchConfetti() {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    // Multiple confetti bursts with different settings
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  ngOnInit(): void {

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

    this.statesOfCountry = this.addressService.getStates();

    // this.signUpForm.get('address.zip')?.valueChanges.subscribe( (value ) => {
    //  const addressGroup = this.signUpForm.get('address') as FormGroup;
    //   if(this.signUpForm.get('address.zip')?.valid) {
    //       addressGroup.get('state')?.enable();
    //       addressGroup.get('municipDeleg')?.enable();
    //       addressGroup.get('col')?.enable();
    //       addressGroup.get('street')?.enable();
    //   } else {
    //      addressGroup.get('state')?.disable();
    //      addressGroup.get('municipDeleg')?.disable();
    //      addressGroup.get('col')?.disable();
    //      addressGroup.get('street')?.disable();
    //   }
    // })

  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const swiperRegister = this.swiperEl()?.nativeElement;

    if(swiperRegister) {
       Object.assign(swiperRegister, this.swiperOptions);
      swiperRegister.initialize();
    }
  }
}

type Steps = {
  id: number;
  svg: SafeHtml;
  title: string;
  description: string;
  img: { url: string; alt: string }
}