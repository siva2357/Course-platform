import { Routes } from '@angular/router';
import { DashboardPage } from '../shared/dashboard-page/dashboard-page';
import { ManageCoursesPage } from './manage-courses-page/manage-courses-page';
import { CourseBuilderPage } from './course-builder-page/course-builder-page';
import { CourseAnalyticsPage } from './course-analytics-page/course-analytics-page';
import { EnrollmentStudentsPage } from './enrollment-students-page/enrollment-students-page';
import { CourseReviewsPage } from './course-reviews-page/course-reviews-page';
import { MyAnnouncements } from './my-announcements/my-announcements';
import { MyEarningsPayoutsPage } from './my-earnings-payouts-page/my-earnings-payouts-page';

export const INSTRUCTOR_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardPage },
  { path: 'manage-courses', component: ManageCoursesPage },
  { path: 'course-builder', component: CourseBuilderPage },
  { path: 'course-builder/:id', component: CourseBuilderPage },
  { path: 'course-analytics', component: CourseAnalyticsPage },
  { path: 'course-analytics/:id', component: CourseAnalyticsPage },
  { path: 'enrollment-students', component: EnrollmentStudentsPage },
  { path: 'course-reviews', component: CourseReviewsPage },
  { path: 'my-announcements', component: MyAnnouncements },
  { path: 'my-earnings-payouts', component: MyEarningsPayoutsPage },
];

export const InstructorRoutes = INSTRUCTOR_ROUTES;
