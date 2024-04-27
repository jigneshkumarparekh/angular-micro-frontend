import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'remote-user',
    loadComponent: () =>
      import('mfe1/Component/UserName').then((m) => m.UserNameComponent),
  },
];
