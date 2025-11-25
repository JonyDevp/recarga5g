import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  noWriteSpaceValid(control: FormControl): ErrorValidate | null {
    const value = control.value;

    if (typeof value !== 'string') {
      // Si no es string (null, undefined, número, etc.), que lo manejen otros validadores
      return null;
    }

    const trimmed = value.trim();

    // Si después de recortar espacios al inicio y final no queda nada,
    // significa que el usuario solo puso espacios (o dejó vacío).
    if (trimmed.length === 0) {
      return { whitespace: true };
    }

    // Tiene al menos un carácter visible → es válido
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

    const hh = parseInt(digits.slice(0, 2), 10);
    const mm = parseInt(digits.slice(2, 4), 10);

    if (hh < 1 || hh > 24) return { isInvalidHour: true };

    if (mm < 1 || mm > 59) return { isInvalidHour: true };


    return null;
  }

  validEmail: ValidatorFn = (control: AbstractControl): ErrorValidate | null => {
    const raw = control.value;

    if (raw == null) return null;

    const value = raw.toString().trim();

    // Si está vacío, que lo maneje Validators.required
    if (value.length === 0) {
      return null;
    }
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,})+$/;

    const isValid = emailRegex.test(value);

    return isValid ? null : { invalidEmail: true };
  };

  
  fieldOptional: ValidatorFn = (
    control: AbstractControl
  ): ErrorValidate | null => {
    const value = control.value;

    // Si es null/undefined/vacío -> no lo marcamos como error
    // porque el campo NO es obligatorio
    if (value === null || value === undefined || value === '') {
      return null;
    }

    if (typeof value !== 'string') {
      return null;
    }

    const trimmed = value.trim();

    // Solo espacios en blanco -> inválido
    if (trimmed.length === 0) {
      return { invalidBusinessName: true };
    }

    // Solo 1 carácter visible -> inválido
    if (trimmed.length === 1) {
      return { invalidBusinessName: true };
    }

    // 2 o más caracteres visibles -> válido
    return null;
  };
}


interface ErrorValidate {
  [s: string]: boolean
}

