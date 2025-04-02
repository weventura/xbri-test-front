import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  { path: 'list', loadChildren: () => import('./pages/list/list.routes').then(m => m.ROUTES_LIST) },
  { path: 'create', loadChildren: () => import('./pages/create/create.routes').then(m => m.ROUTES_CREATE) }
];
