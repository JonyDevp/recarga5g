import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

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

  noValidDate(control: FormControl): ErrorValidate | null {
    const value = control.value;

    // Si el campo está vacío o no tiene el formato completo
    if (!value || value.length < 10) {
      return null; // No validar si está vacío o incompleto
    }

    // Verificar el formato básico con regex
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!datePattern.test(value)) {
      return { isInvalidDate: true };
    }

    //Extraer dia, mes, año
    const parts = value.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    // Validar año (actual o anterior)
    const currentYear = new Date().getFullYear();
    const minDate = currentYear - 1;

    if (year > currentYear || year <= minDate) {
      return { isInvalidDate: true };
    }

    // Validar día según el mes
    if (month < 1 || month > 12) {
      return { isInvalidDate: true };
    }

    // Validar día según el mes
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
      return { isInvalidDate: true };
    }

    // Validación adicional para asegurar que la fecha es real
    const date = new Date(year, month - 1, day);
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return { isInvalidDate: true };
    }

    // Si pasa todas las validaciones, retornar null (sin errores)
    return null
  }

}


interface ErrorValidate {
  [s: string]: boolean
}