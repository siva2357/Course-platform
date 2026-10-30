import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-details-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-details-page.html',
  styleUrl: './course-details-page.css',
})
export class CourseDetailsPage {
  activeTab: 'overview' | 'curriculum' | 'instructor' | 'reviews' = 'overview';
  openSectionIndex = 0;

  course = {
    id: 'angular-enterprise-architect',
    title: 'Enterprise Angular 19 & Micro-Frontends Architecture',
    subtitle:
      'Master Signals, Standalone Architecture, Nx Monorepos, Module Federation, SSR, and Enterprise Design Systems from scratch to production.',
    category: 'Full-Stack Web Development',
    level: 'Advanced',
    rating: 4.9,
    reviewsCount: 1420,
    studentsCount: '14,280',
    lastUpdated: 'October 2026',
    language: 'English (CC)',
    duration: '32h 45m',
    lessonsCount: 128,
    projectsCount: 6,
    price: 49.99,
    originalPrice: 129.99,
    discount: '62% OFF',
    thumbnail:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=85',
    outcomes: [
      'Architect enterprise-scale Angular 19 applications using Signals and reactive data flows',
      'Build & deploy Micro-Frontends with Native Federation and Nx Monorepos',
      'Design reusable accessible UI component libraries with strict token themes',
      'Implement Server-Side Rendering (SSR), Hydration, and route-level performance budgets',
      'Secure applications with OAuth2/OIDC, role guards, and HTTP interceptors',
      'Write comprehensive unit, integration, and Playwright E2E test suites',
    ],
    curriculum: [
      {
        title: 'Module 1: Modern Standalone & Signals Architecture',
        meta: '18 Lectures • 4h 30m',
        lessons: [
          { title: 'Course Roadmap & Enterprise Ecosystem Overview', duration: '12:40', preview: true },
          { title: 'Deep Dive into Angular Signals, Computed & Effects', duration: '24:15', preview: true },
          { title: 'Zoneless Change Detection & Performance Profiling', duration: '19:50', preview: false },
          { title: 'Signal Store & Reactive State Management Patterns', duration: '28:10', preview: false },
        ],
      },
      {
        title: 'Module 2: Nx Monorepos & Domain-Driven Design',
        meta: '24 Lectures • 6h 15m',
        lessons: [
          { title: 'Structuring Feature, UI, Data-Access & Util Libraries', duration: '21:00', preview: true },
          { title: 'Enforcing Module Boundaries & Dependency Graphs', duration: '18:30', preview: false },
          { title: 'Shared Design System Library & Custom Blue Theme Tokens', duration: '31:20', preview: false },
        ],
      },
      {
        title: 'Module 3: Micro-Frontends & Native Federation',
        meta: '28 Lectures • 7h 40m',
        lessons: [
          { title: 'Shell Host vs Remote Portals (Learner, Instructor, Admin)', duration: '26:45', preview: false },
          { title: 'Cross-Micro-Frontend Authentication & Event Bus', duration: '29:15', preview: false },
          { title: 'Dynamic Remote Loading & Versioned Deployments', duration: '22:50', preview: false },
        ],
      },
      {
        title: 'Module 4: Production SSR, Security & CI/CD Pipelines',
        meta: '30 Lectures • 8h 20m',
        lessons: [
          { title: 'Incremental Hydration & Deferrable Views (@defer)', duration: '23:10', preview: false },
          { title: 'Role-Based Access Control (RBAC) & JWT Refresh Flows', duration: '27:40', preview: false },
          { title: 'Capstone Project Deployment with Docker & GitHub Actions', duration: '35:00', preview: false },
        ],
      },
    ],
    instructor: {
      id: 'dr-arjun-mehta',
      name: 'Dr. Arjun Mehta',
      role: 'Principal Frontend Architect & Google Developer Expert',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      rating: 4.9,
      students: '48,500+',
      courses: 8,
      bio: 'Dr. Arjun Mehta has 14+ years of experience leading frontend platform teams at Fortune 500 fintech and cloud companies. He has helped over 48,000 engineers master distributed web architectures.',
    },
    reviews: [
      {
        name: 'Karthik Raman',
        role: 'Lead UI Engineer',
        rating: 5,
        date: '2 weeks ago',
        comment:
          'Hands down the most practical Angular architecture course available. We applied the Nx + Signals patterns directly to our production portal.',
      },
      {
        name: 'Sarah Jenkins',
        role: 'Senior Full-Stack Developer',
        rating: 5,
        date: '1 month ago',
        comment:
          'The Micro-Frontends and RBAC modules alone are worth 10x the price. Crystal clear explanations and clean code repositories.',
      },
    ],
  };

  toggleSection(index: number): void {
    this.openSectionIndex = this.openSectionIndex === index ? -1 : index;
  }
}
