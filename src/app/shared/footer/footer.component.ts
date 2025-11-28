
import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
    selector: 'app-footer',
    imports: [
    RouterLink
],
    templateUrl: './footer.component.html',
    styles: [``]
})
export class FooterComponent {

  private readonly router = Inject(Router);

  redirectoTitle() {
    const title = 'cuentas-planetaemx';
  this.router.navigate(['/plataforma/planetaemx'], {fragment: title} );
  }

  menuHelp = [

    {
      id: 1,
      label: 'Preguntas Frecuentes',
      routerLink: 'mas/faqs',
    },

   {
    id: 2,
    label: 'Blog',
    routerLink: 'mas/blog',
   },

   {
    id: 3,
    label: 'Quienes somos',
    routerLink: 'nosotros/trayectoria'
   },

   {
    id: 4,
    label: 'Politicas de privacidad',
    routerLink: 'mas/legal/politicas'
   },

   {
    id: 5,
    label: 'Condiciones de uso',
    routerLink: 'mas/legal/condiciones'
   }

  ];

  menuProducts = [

    {
      id: 1,
      label: 'Recargas',
      routerLink: 'productos/recargas'

    },

    {
      id: 2,
      label: 'Pago de servicios',
      routerLink: 'productos/servicios'
    },

    {
      id: 3,
      label: 'Pines electrónicos',
      routerLink: 'productos/pines'
    },
  ];


}
