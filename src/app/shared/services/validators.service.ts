import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  noWriteSpaceValid(control: FormControl): ErrorValidate | null {
    const value = control.value;

    if(typeof value === "string") {
     
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace && control.value === control.value.trim();
      
      return isValid ? null : { whitespace: true };
    }

    return null;
  }

}


interface ErrorValidate {
  [s:string]: boolean
}