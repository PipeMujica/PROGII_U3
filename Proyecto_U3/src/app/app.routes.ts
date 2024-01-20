import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'busqueda',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./paginas/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'busqueda',
    loadComponent: () => import('./paginas/busqueda/busqueda.page').then( m => m.BusquedaPage)
  },
];
