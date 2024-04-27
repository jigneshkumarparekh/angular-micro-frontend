import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { UserNameComponent } from './user-name/user-name.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    // Lazy loading the stabdalone component
    path: 'test-component',
    loadComponent: () =>
      import('./test/test.component').then((c) => c.TestComponent),
  },
  {
    // Lazy loading the stabdalone component
    path: 'user-component',
    loadComponent: () =>
      import('./user-name/user-name.component').then(
        (c) => c.UserNameComponent
      ),
  },
];
