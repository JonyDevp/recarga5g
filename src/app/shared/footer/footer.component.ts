import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
    selector: 'app-footer',
    imports: [
        CommonModule,
        RouterLink,
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
      routerLink: 'nosotros/preguntas',
    },

   {
    id: 2,
    label: 'Blog',
    routerLink: 'nosotros/blog',
   },

   {
    id: 3,
    label: 'Quienes somos',
    routerLink: 'nosotros/trayectoria'
   },

   {
    id: 4,
    label: 'Politicas de privacidad',
    routerLink: 'nosotros/politicas'
   },

   {
    id: 5,
    label: 'Condiciones de uso',
    routerLink: 'nosotros/condiciones'
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
