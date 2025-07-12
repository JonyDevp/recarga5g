import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { metaTagModel } from 'src/app/interfaces/meta-tag.model';
import { MetaTagService } from '@shared/services/meta-tag.service';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';
import { ValidatorsService } from '@shared/services/validators.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgClass,
    JsonPipe
  ],
  
})
export default class ContactoComponent implements OnInit {

  //? META TAG
  tag: metaTagModel = {
    title: "Recarga5g.com | Consulta como vender recargas electrónicas",
    description: "Contactamos por alguno de nuestros medios de contacto para asesorarte para que puedas generar ganancias vendiendo recargas telefónicas a cualquier tipo de compañía.",
    keywords: "Contacto para venta de recargas, Contacto Pagaqui, Contacto Planetaemx, Contacto Recargaki, Contacto recargas electrónicas, Recarga5g.com, Contacto para vender recargas elecrtrónicas con excelentes comisiones",
    url: "recarga5g.com/ayuda/contacto",
    type: "website",
    image: "https://recarga5g.com/Venta-recargas.png",
    card: "summary_large_image",
    creator: "@recargascelular"
  }

  contactForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private _metaTagService = inject(MetaTagService);
  private readonly title = inject(Title);
  private readonly validatorService = inject(ValidatorsService);

  private initContactForm(): void {
    this.contactForm = this.formBuilder.group({
      full_name: ['', [Validators.required, Validators.minLength(6), this.validatorService.noWriteSpaceValid]],
      subject: ['', [Validators.required, Validators.minLength(3), this.validatorService.noWriteSpaceValid]],
      message: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5000), this.validatorService.noWriteSpaceValid]]
    })
  }

  ngOnInit(): void {
    this.title.setTitle('Recarga5g.com | Contáctanos por cualquier de nuestros medios de contacto para asesorarte y obtener más información para vender recargas a cualquier compañia con excelentes comisiones');

    // this._metaTagService.generateTags( {
    //   ...this.tag
    // })

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
