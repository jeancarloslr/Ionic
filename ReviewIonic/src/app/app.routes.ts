import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'second-p/:soma',
    loadComponent: () => import('./second-p/second-p.page').then( m => m.SecondPPage)
  },
];
