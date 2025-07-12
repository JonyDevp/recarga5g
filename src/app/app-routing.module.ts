// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from '@inicio/pages/home/home.component';
// import { RegistroComponent } from 'src/app/modules/registro/registro.component';
// import { NofoundComponent } from '@core/components/not-found/not-found.component';

// const routes: Routes = [

//   { 
//     path: '', 
//     component: HomeComponent },
  
//   { 
//     path: '', 
//     redirectTo: '/', pathMatch: 'full' },
//   {
//     path: 'registro', 
//     component: RegistroComponent
//   },
  

//   {
//     path: 'plataforma',
//     loadChildren: () => import('@plataformas/plataformas.module').then(p => p.PlataformasModule),
//   },

//   //* CONSULTA
//   {
//     path: 'consulta',
//     loadChildren: () => import('@consultas/consulta.module').then(c => c.ConsultaModule)
//   },

//   // REPORTES
//   {
//     path: 'reporte',
//     loadChildren: () => import('@reportes/reportes.module').then(c => c.ReportesModule)
//   },
//   //AYUDA
//   {
//     path: 'ayuda',
//     loadChildren: () => import('@ayuda/ayuda.module').then(a => a.AyudaModule)
//   },
//   //LEGAL
//   {
//     path: 'legal',
//     loadChildren: () => import('@legal/legal.module').then(l => l.LegalModule)
//   },

//   // NOT FOUND 
//   { path: '**', component: NofoundComponent, pathMatch: 'full'},
//   { path: '**', redirectTo: '/Error/404'},
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking', })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
