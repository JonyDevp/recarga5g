import { JsonPipe, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DateMaskDirective } from '@shared/directives/date-mask.directive';
import { NotSpecialCharacterDirective } from '@shared/directives/not-special-character.directive';
import { ValidatorsService } from '@shared/services/validators.service';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-reportar-compra',
  imports: [
    ReactiveFormsModule,
    NotSpecialCharacterDirective,
    NgxMaskDirective,
    JsonPipe,
    NgClass,
    DateMaskDirective
  ],
  templateUrl: `./reportar-compra.component.html`,
  styleUrl: './reportar-compra.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReportarCompraComponent {
  public formReportPurchase!: FormGroup;
  private readonly fb = inject(FormBuilder);
  private readonly ValidatorService = inject(ValidatorsService);
  isOpenMenu = signal(false);
  isOpenMenuFormat = signal(false);
  currentFormatDay = signal<FormatDay>('AM');
  previousFormatDay = signal<FormatDay>('PM');

  listPagaquiBank: TypeBank[]  = [
    {
      id: '799f859f-ce82-46b8-b09d-0f0d5874b407',
      bank: 'BBVA TA3 0192913968',
    },

    {
      id: 'a91feb05-cc9d-46f3-9d23-8c774416151d',
      bank: 'Banorte TA3 0213093824',
    },

    {
      id: 'b6a478b4-8749-4e09-bab9-9be2e1c59117',
      bank: 'Banco Azteca TA3 01720106103960',
    },

    {
      id: 'ad80f683-305e-45d5-99fa-d1b50aeb31f0',
      bank: 'Santander TA3 65505136201',
    },

    {
      id: '5bdfa3ee-0ea7-49c4-b1ce-a865f7827c25',
      bank: 'Bancoppel 16000000950',
    },

    {
      id: '12dd6a16-98fe-4c2b-9f12-96579cd5f638',
      bank: 'BBVA TA3 0112624907',
    },

    {
      id: '4bcb8552-ad97-4ea0-84db-ce9a472272f8',
      bank: 'SERVITAE 002855702047239725',
    },
  ];

  listBankPlanetaemx: TypeBank[] = [
    {
      id: '4badda93-7033-431b-8243-48b70cd3bbc5',
      bank: 'BBVA NEW VISION 0183899462'
    },

     {
      id: '3d34f233-17b8-40c4-b65e-7e15552f601d',
      bank: 'SANTANDER NEW VISION 014180655057926922'
    },

    {
      id: '951b9a17-2181-453a-b5de-d51f3182474d',
      bank: 'BANCO AZTECA WE SEND NUBE DIGITAL 01720125091385'
    },

    {
      id: '10fa6773-7337-4354-9c9a-d6dd83adc555',
      bank: 'OXXO-SCOTIABANK SISTEMAS MÓVILES TECNOMEXICO 4062850000111927'
    }, 

    {
      id: 'a19c3ff7-e82e-4f33-b85e-de1abda5035b',
      bank: 'SCOTIABANK SIST Y DESAROLLOS TECN KMX 00105318518'
    },

    {
      id: 'd0141e8b-b90b-41e0-8392-ecd0f7738446',
      bank: 'BANAMEX CORPORATIVO EMPRESARIAL Y DE SERVICIOS SERVITAE 7020-4723972'
    }
  ];

  customTimePatterns = {
  'H': { 
    pattern: new RegExp('[0-1]'), // Primer dígito de hora (0-2)
    symbol: 'h'
  },
  'h': {
    pattern: new RegExp('[0-9]'), // Segundo dígito de hora
    symbol: 'h',
    optional: false
  },
  'm': {
    pattern: new RegExp('[0-5]'), // Primer dígito de minutos (0-5)
    symbol: 'm'
  },
  '0': {
    pattern: new RegExp('[0-9]') // Cualquier dígito
  },
  'a': { pattern: new RegExp('[aApP]') }  // A o P (AM/PM)
};
  
  // Propiedad para almacenar los bancos a mostrar
  banksToShow: TypeBank[] = [];

  updateBanks(): void {
    const bankControl = this.formReportPurchase.get("payment_details.bank");
    bankControl?.reset('', { emitEvent: false }); 
  bankControl?.disable(); // Opcional: si quieres deshabilitarlo hasta nueva selección

    const selectedPlatform = this.formReportPurchase.get("platform")?.value;

    if(selectedPlatform === 'Pagaqui') {
      this.banksToShow = this.listPagaquiBank;
        bankControl?.enable(); 
    } else if(selectedPlatform === 'Recargaki/Planetaemx') {
      this.banksToShow = this.listBankPlanetaemx;
         bankControl?.enable(); // 
    } else {
      this.banksToShow =  [];
    }
  }

  private initReportPurchase() {
  // Obtener fecha actual formateada
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

    this.formReportPurchase = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(5)] ],
      username: ['', [Validators.required, Validators.minLength(5)] ],
      email: ['', [Validators.required, Validators.minLength(5)] ],
      platform: ['', [Validators.required] ],
      payment_details: this.fb.group({
        bank: [ {value: '', disabled: true}, [Validators.required, Validators.minLength(5)] ],
        payment_method: ['', [Validators.required]],
        amount: ['', [Validators.required, Validators.min(100)]],
        date: [ 'DD/MM/YYYY', [this.ValidatorService.noValidDate] ],
        hour: ['', [Validators.required]],
        folio: [ '', [Validators.required, Validators.minLength(4)]],
        proof_payment: ['', [Validators.required]],
      }),
    });
  }

  constructor() {
    this.initReportPurchase();
  }

  handlerMenu(): void {
    this.isOpenMenu.update((value) => !value);
  }


  isInvalidField(field: string): boolean | undefined {
   const control = this.formReportPurchase.get(field);
  return control ? control.invalid && (control.touched || control.dirty) : false;
  }


  onTimeInput(event: any) {
    const input = event.target as HTMLInputElement;
    let value = input.value.toUpperCase();
    
    // Detectar si se presionó 'A' o 'P' y convertir a AM/PM
    if (value.endsWith('A') && !value.endsWith('AM')) {
      value = value.replace(/A$/, 'AM');
     
    } else if (value.endsWith('P') && !value.endsWith('PM')) {
      value = value.replace(/P$/, 'PM');
         
    }
    
    // Actualizar el valor del formulario
    // this.timeForm.get('hora')?.setValue(value, { emitEvent: false });
    this.formReportPurchase.get('payment_details.hour')?.setValue(value, {emitEvent: false})
  }

  sendReport(): void {
    if (this.formReportPurchase.invalid) {
      this.markFormGroupTouched(this.formReportPurchase);
    }

    const formValues = this.formReportPurchase.value;
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
    this.formReportPurchase.reset({
      user: '',
      username: '',
      email: '',
      platform: '',
      payment_details: {
        bank: '',
        payment_method: '',
        amount: '',
        date: '',
        hour: '',
        branch: '',
        folio: '',
        img: '',
      },
    });
  }

  handleKeydown(event: KeyboardEvent) {
  const input = event.target as HTMLInputElement;
  const key = event.key.toLowerCase();

  // Solo permitir 'a' o 'p' cuando el cursor esté al final
  if (['a', 'p'].includes(key) && input.value.length >= 5) {
    event.preventDefault();
    const timePart = input.value.substring(0, 5);
    const period = key === 'a' ? 'AM' : 'PM';
    input.value = `${timePart} ${period}`;
    this.formReportPurchase.get(' payment_details.hour')?.setValue(input.value);
  }
}
}

type FormatDay = 'AM' | 'PM';
interface TypeBank {
  id: string;
  bank: string;
}