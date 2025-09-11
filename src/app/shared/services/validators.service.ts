import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  noWriteSpaceValid(control: FormControl): ErrorValidate | null {
    const value = control.value;

    if (typeof value === "string") {

      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace && control.value === control.value.trim();

      return isValid ? null : { whitespace: true };
    }

    return null;
  }

  noValidFecha(control: FormControl): ErrorValidate | null {

    const raw = (control.value ?? '').toString();

    // Solo dígitos (por seguridad); esperamos DDMMYYYY
    const digits = raw.replace(/\D/g, '');

    // Si aún no hay 8 dígitos (mientras escribe), no estorbar
    if (digits.length === 0) return null;
    if (digits.length !== 8) return null;

    const dd = parseInt(digits.slice(0, 2), 10);
    const mm = parseInt(digits.slice(2, 4), 10);
    const yyyy = parseInt(digits.slice(4, 8), 10);

    // Mes 1..12
    if (mm < 1 || mm > 12) return { isInvalidDate: true };

    // Días válidos del mes (considera bisiestos según 'yyyy')
    const daysInMonth = new Date(yyyy, mm, 0).getDate(); // mm es 1..12
    if (dd < 1 || dd > daysInMonth) return { isInvalidDate: true };

    // Año igual al año actual
    const currentYear = new Date().getFullYear();
    if (yyyy !== currentYear) return { isInvalidDate: true };

    return null;
  };

  noValidDate: ValidatorFn = (control: AbstractControl) => {
    const raw = (control.value ?? '').toString();
    const digits = raw.replace(/\D/g, '');

    if (digits.length === 0) return null;
    if (digits.length !== 8) return { isInvalidDate: true };

    const dd = parseInt(digits.slice(0, 2), 10);
    const mm = parseInt(digits.slice(2, 4), 10);
    const yyyy = parseInt(digits.slice(4, 8), 10);

    if (mm < 1 || mm > 12) return { isInvalidDate: true };
    const daysInMonth = new Date(yyyy, mm, 0).getDate();
    if (dd < 1 || dd > daysInMonth) return { isInvalidDate: true };

    const currentYear = new Date().getFullYear();
    if (yyyy !== currentYear) return { isInvalidDate: true };

    return null;
  };

  noValidHour: ValidatorFn = (control: AbstractControl) => {
    const raw = (control.value ?? '').toString();
    const digits = raw.replace(/\D/g, '');

    if (digits.length === 0) return null;
    if (digits.length !== 4) return { isInvalidHour: true };

    const hh = parseInt(digits.slice(0,2), 10);
    const mm = parseInt(digits.slice(2,4), 10);

     if (hh < 1 || hh > 24) return { isInvalidHour: true };

      if (mm < 1 || mm > 59) return { isInvalidHour: true };


    return null;
  }


}


interface ErrorValidate {
  [s: string]: boolean
}

