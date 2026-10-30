import { Routes } from '@angular/router';
import { DashboardPage } from '../shared/dashboard-page/dashboard-page';
import { UserManagementPage } from './user-management-page/user-management-page';
import { CourseManagementAnalyticsPage } from './course-management-analytics-page/course-management-analytics-page';
import { FinancialOverviewPage } from './financial-overview-page/financial-overview-page';
import { ReportsPage } from './reports-page/reports-page';

export const ADMIN_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardPage },
  { path: 'user-management', component: UserManagementPage },
  { path: 'course-management-analytics', component: CourseManagementAnalyticsPage },
  { path: 'financial-overview', component: FinancialOverviewPage },
  { path: 'reports', component: ReportsPage },
];

export const AdminRoutes = ADMIN_ROUTES;
