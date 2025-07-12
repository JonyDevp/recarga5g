import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  model,
  OnInit,
  output,
  signal,
} from '@angular/core';
import {

  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-date-input',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="mt-4 lg:mt-0 w-full">

      <input
        type="text"
        id="date"
        placeholder="dd/mm/yyyy" 
        [maxLength]="10"
        [value]="value"
        (blur)="onBlur()"
        (input)="onInput($event)"
        
        class="w-full block text-sm text-slate-800 dark:text-white p-2.5 ps-10 rounded-lg bg-gray-50 border-slate-300 dark:bg-gray-700 mt-2 border dark:border-slate-600 focus:border-blue-500 dark:focus:border-slate-500 focus:bg-white dark:focus:bg-slate-600 focus:outline-none dark:placeholder-slate-400"
      />
    </div>
  `,
  styleUrl: './date-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true,
    },

    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    },
  ],
})
export class DateInputComponent implements OnInit, ControlValueAccessor {
  value = '';
  // Funciones para ControlValueAccessor
  onChange: (value: string) => void = () => { };
  onTouched: () => void = () => { };
  onValidatorChange: () => void = () => {};

  isTouched = signal(false);
  ngOnInit(): void {
  //  this.setCurrentDate()
  }

  //Funcion controValueAccessor
  writeValue(value: string): void {
    this.value = value || ''; // Recibe el valor del formulario (puede ser la fecha actual o vacío)
}

  //Funcion controValueAccessor
   registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

//Funcion controValueAccessor
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

    onDateChange(value: string): void {
    this.value = value;
    this.onChange(this.value);
  }


  //   private setCurrentDate(): void {
  //   const today = new Date();
  //   const day = today.getDate().toString().padStart(2, '0');
  //   const month = (today.getMonth() + 1).toString().padStart(2, '0');
  //   const year = today.getFullYear();
  //   this.value = `${day}/${month}/${year}`;
  //   this.onChange(this.value);
  // }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Elimina todo lo que no sea número

    if (value.length > 0) {
      value = value.substring(0, 8)
    }

  // Aplica formato DD/MM/YYYY dinámicamente
  let formattedValue = '';
    if (value.length > 4) {
      formattedValue  = value.substring(0, 2) + '/' + value.substring(2, 4) + '/' + value.substring(4);

    } else if (value.length > 2) {
      formattedValue  = value.substring(0, 2) + '/' + value.substring(2);
    } else {
      formattedValue = value;
    }

    this.value = formattedValue;
  input.value = formattedValue; // Fuerza el formato visual en el input
  this.onChange(this.value);
      this.onValidatorChange(); // Notifica que la validación debe actualizarse


  }

   onBlur() {
    this.isTouched.set(true);
    this.onTouched();
    this.onValidatorChange(); // Forzar validación al salir del campo
  }


    // Método de validación requerido
     validate(control: AbstractControl): ValidationErrors | null {
    const dateStr = control.value;
    
    // Validación de campo requerido
    if (!dateStr || dateStr.trim() === '') {
      return { required: true };
    }

    // Validación de longitud mínima
    if (dateStr.length < 10) {
      return { minlength: { requiredLength: 10, actualLength: dateStr.length } };
    }

    const parts = dateStr.split('/');

    // Validación de formato
    if (parts.length !== 3) {
      return { invalidFormat: true };
    }

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    const currentYear = new Date().getFullYear();

    // Validación de valores numéricos
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return { invalidFormat: true };
    }

    // Validación de mes
    if (month < 1 || month > 12) {
      return { invalidMonth: true };
    }

    // Validación de año
    if (year > currentYear || year < currentYear - 1) {
      return { invalidYear: true };
    }

    // Validación de día
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
      return { invalidDay: true };
    }

    // Validación de fecha completa
    const date = new Date(year, month - 1, day);
    if (
      date.getFullYear() !== year ||
      date.getMonth() + 1 !== month ||
      date.getDate() !== day
    ) {
      return { invalidDate: true };
    }

    return null;
  }

  // validate(): ValidationErrors  | null {

  //   const dateStr = this.value;

  //   if (!dateStr || dateStr.length < 10) return null;

  //   const parts = dateStr.split('/');

  //   if (parts.length !== 3) {
  //     return { invalidDate: true };
  //   }

  //   const day = parseInt(parts[0], 10);
  //   const month = parseInt(parts[1], 10);
  //   const year = parseInt(parts[2], 10);
  //   const currentYear = new Date().getFullYear();

  //   // Validación de mes
  //   if (isNaN(month) || month < 1 || month > 12) {
  //     return { invalidDate: true };
  //   }
  //   // Validación de año
  //   if (isNaN(year) || year > currentYear || year < currentYear - 1) {
  //     return { invalidDate: true };
  //   }

  //   // Validación de día
  //   const daysInMonth = new Date(year, month, 0).getDate();
  //   if (isNaN(day) || day < 1 || day > daysInMonth) {
  //     return { invalidDate: true };
  //   }

  //   // Validación de fecha completa
  //   const date = new Date(year, month - 1, day);
  //   if (
  //     date.getFullYear() !== year ||
  //     date.getMonth() + 1 !== month ||
  //     date.getDate() !== day
  //   ) {
  //     return { invalidDate: true };
  //   }

  //   return null;

  // }
}

