import { Routes } from '@angular/router';
import { LandingPage } from '../../../views/public/landing-page/landing-page';
import { CourseCatalog } from '../../../views/public/course-catalog/course-catalog';
import { CourseDetailsPage } from '../../../views/public/course-details-page/course-details-page';
import { LearningPaths } from '../../../views/public/learning-paths/learning-paths';
import { InstructorProfile } from '../../../views/public/instructor-profile/instructor-profile';
import { BecomeInstructor } from '../../../views/public/become-instructor/become-instructor';
import { PricingAndPlans } from '../../../views/public/pricing-and-plans/pricing-and-plans';
import { AboutUs } from '../../../views/public/about-us/about-us';
import { HelpCenter } from '../../../views/public/help-center/help-center';
import { LegalPages } from '../../../views/public/legal-pages/legal-pages';

export const PUBLIC_ROUTES: Routes = [
  { path: '', component: LandingPage },
  { path: 'courses', component: CourseCatalog },
  { path: 'courses/:id', component: CourseDetailsPage },
  { path: 'learning-paths', component: LearningPaths },
  { path: 'instructors/:id', component: InstructorProfile },
  { path: 'become-instructor', component: BecomeInstructor },
  { path: 'pricing', component: PricingAndPlans },
  { path: 'about-us', component: AboutUs },
  { path: 'help-center', component: HelpCenter },
  { path: 'legal', component: LegalPages },
];
