import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

    testimonialListOne: Testimonial[] = [
      {
        fullName: 'Juan Martínez',
        comment: '¡Excelente plataforma! Las comisiones son muy buenas, y el proceso de venta de recargas es súper fácil. ¡Totalmente recomendado',
        acronym: 'Juan M'
      },
  
      {
        fullName: 'Farmacia margaritas',
        comment: 'Llevo mas de 2 años, con mi propia red de clientes, la atención al cliente muy amable',
        acronym: 'FM'
      },
  
      {
        fullName: 'Papelería la gomita',
        comment: 'Muy contento con el servicio. La plataforma es intuitiva, y el soporte al cliente siempre está disponible para ayudar.',
        acronym: 'PG'
      },
  
      {
        fullName: 'Ferreteria Joselin',
        comment: 'Las mejores comisiones del mercado. Además, la variedad de compañías que manejan es impresionante. ¡Mis clientes están felices!',
        acronym: 'FJ'
      },
      
    ];
  
    testimonialListTwo: Testimonial[] = [
      {
        fullName: 'Anahi Ortega',
        comment: 'Tuve un problema para ubicar a mi distribuidor, gracias a Recargas Electrónicas puede ubicarlo, la atención siempre fue amable, 100% recomendado',
        acronym: 'Anahi O'
      },
  
      {
        fullName: 'Valeria Pineda',
        comment: 'Me gusta llevo algunos año y todo bien',
        acronym: 'Valeria P'
      },
  
      {
        fullName: 'Cyber Flamingo',
        comment: 'Tienen una gran variedad para el pago de servicios',
        acronym: 'Cyber F'
      },
  
      {
        fullName: 'Octavio Ocapo',
        comment: 'La gestión de mis sucursales ha sido facil con esta plataforma',
        acronym: 'Octavio O'
      },
    ];
  
    testimonialListThree: Testimonial[] = [
      {
        fullName: 'Novedades el por venir',
        comment: 'La aplicación es facil de usar, llevo 1 año y todo ha marchado muy bien, lo conoci porque un amigo me lo recomendo',
        acronym: 'Novedades E'
      },
  
      {
        fullName: 'Abarrotes Super Diego',
        comment: 'Estuve unos años sin poder usar la plataforma por razones personales, gracias a atención a clientes pude recuperar mi cuenta',
        acronym: 'Abarrotes SD'
      },
  
      {
        fullName: 'Papelería Los Patitos',
        comment: 'Me ha gustado mucho la plataforma y la atención a clientes',
        acronym: 'Papelería L'
      },
  
      {
        fullName: 'Marcos Herrera',
        comment: 'Ahora soy el punto de referencia en mi colonia para recargas y pagos de servicios. La plataforma es estable, las transacciones son seguras',
        acronym: 'Marcos H'
      },
    ];
  
}


export type Testimonial = {
  fullName: string;
  comment: string;
  acronym: string;
}
