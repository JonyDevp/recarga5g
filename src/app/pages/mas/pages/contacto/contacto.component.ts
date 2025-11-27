import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaTagService } from '@shared/services/meta-tag.service';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { JsonPipe, NgClass } from '@angular/common';
import { ValidatorsService } from '@shared/services/validators.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  styles: [``],
  imports: [
    RouterLink,
    ReactiveFormsModule,
    
  ],
  
})
export default class ContactoComponent implements OnInit {


  contactForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private _metaTagService = inject(MetaTagService);
  private readonly title = inject(Title);
  private readonly validatorService = inject(ValidatorsService);

  private initContactForm(): void {
    this.contactForm = this.formBuilder.group({
      full_name: ['', [Validators.required, Validators.minLength(6), this.validatorService.noWriteSpaceValid]],
      email: ['', [Validators.required, Validators.minLength(3), this.validatorService.noWriteSpaceValid]],
      phone: ['', [Validators.required, Validators.minLength(3), this.validatorService.noWriteSpaceValid]],
      message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5000), this.validatorService.noWriteSpaceValid]]
    })
  }

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com: Contáctanos por cualquier de nuestros medios de contacto para asesorarte y obtener más información para vender recargas a cualquier compañia con excelentes comisiones');
    this._metaTagService.updateMetaTag({
      title: 'Recarga5g.com: Contáctanos por cualquier de nuestros medios de contacto para asesorarte y obtener más información para vender recargas a cualquier compañia con excelentes comisiones',
      description: 'Contáctanos por cualquier de nuestros medios de contacto para asesorarte y obtener más información para vender recargas a cualquier compañia con excelentes comisiones',
      keywords: 'contacto recarga5g, contacto recargas, soporte recarga5g, ayuda recarga5g, atención al cliente recarga5g, vender recargas, asesoría recargas móviles, información recargas móviles, comisiones por ventas de recargas',
      url: 'recarga5g.com/mas/contacto',
      typeContent: 'website',
    })
  }

  constructor() {
    this.initContactForm();
  }

  isInvalidField( field: string): boolean | undefined {
   return this.contactForm?.get(field)?.invalid && this.contactForm.get(field)?.touched;
  }

  sendMessage() {
    if (this.contactForm.invalid) {
      return Object.values(this.contactForm.controls).forEach((control: any) => {
 
          control.markAsTouched();
      
      });
    }
  }

}
