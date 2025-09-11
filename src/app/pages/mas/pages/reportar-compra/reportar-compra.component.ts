import { JsonPipe, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NotSpecialCharacterDirective } from '@shared/directives/not-special-character.directive';
import { ValidatorsService } from '@shared/services/validators.service';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-reportar-compra',
  imports: [
    ReactiveFormsModule,
    NotSpecialCharacterDirective,
    JsonPipe,
    NgClass,
    NgxMaskDirective
  ],
  templateUrl: `./reportar-compra.component.html`,
  styleUrl: './reportar-compra.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReportarCompraComponent {
  public formReportPurchase!: FormGroup;
  private readonly fb = inject(FormBuilder);
  private readonly ValidatorService = inject(ValidatorsService);

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
    this.formReportPurchase = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(5)] ],
      username: ['', [Validators.required, Validators.minLength(5)] ],
      email: ['', [Validators.required, Validators.minLength(5)] ],
      platform: ['', [Validators.required] ],
      payment_details: this.fb.group({
        bank: [ {value: '', disabled: true}, [Validators.required, Validators.minLength(5)] ],
        payment_method: ['', [Validators.required]],
        amount: ['', [Validators.required, Validators.min(100)]],
        date: [ '', [ Validators.required, this.ValidatorService.noValidDate] ],
        hour: ['', [Validators.required, this.ValidatorService.noValidHour]],
        folio: [ '', [Validators.required, Validators.minLength(2)]],
        proof_payment: ['', [Validators.required]],
      }),
    });
  }

  constructor() {
    this.initReportPurchase();
  }

  isInvalidField(field: string): boolean {
      return this.formReportPurchase?.get(field)?.invalid && this.formReportPurchase.get(field)?.touched
      ? true
      : false
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

}


interface TypeBank {
  id: string;
  bank: string;
}