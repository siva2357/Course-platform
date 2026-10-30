import { Routes } from '@angular/router';
import { PublicLayout } from './library/Layouts/public-layout/public-layout';
import { AccountPages } from './views/account/account-pages';
import { Learner } from './views/learner/learner';
import { Instructor } from './views/instructor/instructor';
import { Admin } from './views/admin/admin';

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
  {
    path: '',
    component: Admin,
    data: { expectedRoles: ['admin'] },
    loadChildren: () => import('./views/admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },
  {
    path: '',
    component: Instructor,
    data: { expectedRoles: ['instructor'] },
    loadChildren: () => import('./views/instructor/instructor.routes').then(m => m.INSTRUCTOR_ROUTES)
  },
  {
    path: '',
    component: Learner,
    data: { expectedRoles: ['learner'] },
    loadChildren: () => import('./views/learner/learner.routes').then(m => m.LEARNER_ROUTES)
  },
];
