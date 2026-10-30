import { Routes } from '@angular/router';

import { DashboardPage } from '../shared/dashboard-page/dashboard-page';
import { MyLearningPage } from './my-learning-page/my-learning-page';
import { CourseClassroomPage } from './course-classroom-page/course-classroom-page';
import { CourseCurriculumPage } from './course-curriculum-page/course-curriculum-page';
import { CourseDiscussionsPage } from './course-discussions-page/course-discussions-page';
import { AssignmentsPage } from './assignments-page/assignments-page';
import { MyCertificationsPage } from './my-certifications-page/my-certifications-page';
import { WishlistPage } from './wishlist-page/wishlist-page';
import { CartPage } from './cart-page/cart-page';
import { MyPurchasesPage } from './my-purchases-page/my-purchases-page';

export const LEARNER_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardPage },
  { path: 'my-learning', component: MyLearningPage },
  { path: 'course-classroom', component: CourseClassroomPage },
  { path: 'course-classroom/:id', component: CourseClassroomPage },
  { path: 'course-curriculum', component: CourseCurriculumPage },
  { path: 'course-curriculum/:id', component: CourseCurriculumPage },
  { path: 'course-discussions', component: CourseDiscussionsPage },
  { path: 'course-discussions/:id', component: CourseDiscussionsPage },
  { path: 'assignments', component: AssignmentsPage },
  { path: 'my-certifications', component: MyCertificationsPage },
  { path: 'wishlist', component: WishlistPage },
  { path: 'cart', component: CartPage },
  { path: 'my-purchases', component: MyPurchasesPage },
];
