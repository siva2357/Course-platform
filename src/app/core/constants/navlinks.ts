import { NavLink } from '../models/sidebar.interface';
import { UserRole } from '../enums/role.enum';

export const NAV_LINKS: NavLink[] = [
  // Shared Dashboard
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'bi bi-grid-1x2-fill',
    roles: [UserRole.Admin, UserRole.Instructor, UserRole.Learner],
  },

  // Learner Navigation
  {
    label: 'My Learning',
    path: '/my-learning',
    icon: 'bi bi-play-btn-fill',
    roles: [UserRole.Learner],
  },
  {
    label: 'Course Classroom',
    path: '/course-classroom',
    icon: 'bi bi-easel2-fill',
    roles: [UserRole.Learner],
  },
  {
    label: 'Course Curriculum',
    path: '/course-curriculum',
    icon: 'bi bi-journal-bookmark-fill',
    roles: [UserRole.Learner],
  },
  {
    label: 'Discussions',
    path: '/course-discussions',
    icon: 'bi bi-chat-left-dots-fill',
    roles: [UserRole.Learner],
  },
  {
    label: 'Assignments',
    path: '/assignments',
    icon: 'bi bi-file-earmark-code-fill',
    roles: [UserRole.Learner],
  },
  {
    label: 'My Certifications',
    path: '/my-certifications',
    icon: 'bi bi-patch-check-fill',
    roles: [UserRole.Learner],
  },
  {
    label: 'Wishlist',
    path: '/wishlist',
    icon: 'bi bi-heart-fill',
    roles: [UserRole.Learner],
  },
  {
    label: 'Shopping Cart',
    path: '/cart',
    icon: 'bi bi-cart3',
    roles: [UserRole.Learner],
  },
  {
    label: 'My Purchases',
    path: '/my-purchases',
    icon: 'bi bi-receipt-cutoff',
    roles: [UserRole.Learner],
  },

  // Instructor Navigation
  {
    label: 'Manage Courses',
    path: '/manage-courses',
    icon: 'bi bi-collection-play-fill',
    roles: [UserRole.Instructor],
  },
  {
    label: 'Course Builder',
    path: '/course-builder',
    icon: 'bi bi-layers-fill',
    roles: [UserRole.Instructor],
  },
  {
    label: 'Course Analytics',
    path: '/course-analytics',
    icon: 'bi bi-graph-up-arrow',
    roles: [UserRole.Instructor],
  },
  {
    label: 'Enrolled Students',
    path: '/enrollment-students',
    icon: 'bi bi-people-fill',
    roles: [UserRole.Instructor],
  },
  {
    label: 'Course Reviews',
    path: '/course-reviews',
    icon: 'bi bi-star-half',
    roles: [UserRole.Instructor],
  },
  {
    label: 'Announcements',
    path: '/my-announcements',
    icon: 'bi bi-megaphone-fill',
    roles: [UserRole.Instructor],
  },
  {
    label: 'Earnings & Payouts',
    path: '/my-earnings-payouts',
    icon: 'bi bi-wallet2',
    roles: [UserRole.Instructor],
  },

  // Admin Navigation
  {
    label: 'User Management',
    path: '/user-management',
    icon: 'bi bi-people-fill',
    roles: [UserRole.Admin],
  },
  {
    label: 'Course & Analytics',
    path: '/course-management-analytics',
    icon: 'bi bi-bar-chart-line-fill',
    roles: [UserRole.Admin],
  },
  {
    label: 'Financial Overview',
    path: '/financial-overview',
    icon: 'bi bi-cash-coin',
    roles: [UserRole.Admin],
  },
  {
    label: 'System Reports',
    path: '/reports',
    icon: 'bi bi-file-earmark-bar-graph-fill',
    roles: [UserRole.Admin],
  },
];
