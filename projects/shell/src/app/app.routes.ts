import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'remote-user',
    /**
     * This will use module federation by registering app with shell application.
     */
    // loadComponent: () =>
    //   import('mfe1/Component/UserName').then((m) => m.UserNameComponent),
    /**
     * This will use Dynamic federation to load the modules dynamically
     */
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component/UserName',
      }).then((c) => c.UserNameComponent),
  },
];
