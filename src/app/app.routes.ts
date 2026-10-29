import { Routes } from '@angular/router';
import { PublicLayout } from './library/Layouts/public-layout/public-layout';
import { AccountPages } from './views/account/account-pages';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    loadChildren: () =>
      import('./library/Layouts/public-layout/public.routes').then(
        (m) => m.PUBLIC_ROUTES
      ),
  },
  {
    path: '',
    component: AccountPages,
    loadChildren: () =>
      import('./views/account/account-pages.routes').then(
        (m) => m.ACCOUNT_ROUTES
      ),
  },
];
