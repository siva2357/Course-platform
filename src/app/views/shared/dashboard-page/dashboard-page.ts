import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRole } from '../../../core/enums/role.enum';
import { NAV_LINKS } from '../../../core/constants/navlinks';
import { NavLink } from '../../../core/models/sidebar.interface';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {
  UserRole = UserRole;
  activeRole: UserRole = UserRole.Learner;
  roleLinks: NavLink[] = [];

  // Learner stats & courses
  learnerStats = [
    { label: 'Courses in Progress', value: '4', icon: 'bi-play-circle-fill', trend: '+1 this week' },
    { label: 'Completed Courses', value: '12', icon: 'bi-check2-circle', trend: '94% avg score' },
    { label: 'Earned Certificates', value: '9', icon: 'bi-patch-check-fill', trend: 'Verified' },
    { label: 'Weekly Study Hours', value: '14.5h', icon: 'bi-clock-history', trend: 'Goal: 12h' },
  ];

  continueLearning = [
    {
      id: 'angular-architect',
      title: 'Enterprise Angular 19 & Signals Architecture',
      instructor: 'Dr. Sarah Jenkins',
      progress: 78,
      nextLesson: 'Module 6: Standalone Routing & Lazy Hydration',
      duration: '18m left',
    },
    {
      id: 'cloud-devops',
      title: 'AWS Solutions Architect & Kubernetes Mastery',
      instructor: 'Marcus Vance',
      progress: 45,
      nextLesson: 'Module 4: EKS Cluster Autoscaling & IAM Roles',
      duration: '32m left',
    },
    {
      id: 'ai-engineering',
      title: 'Full-Stack Generative AI & RAG Systems',
      instructor: 'Elena Rostova',
      progress: 22,
      nextLesson: 'Module 2: Vector Embeddings & Semantic Search',
      duration: '25m left',
    },
  ];

  // Instructor stats & courses
  instructorStats = [
    { label: 'Published Courses', value: '8', icon: 'bi-collection-play-fill', trend: '2 in draft' },
    { label: 'Total Enrolled Learners', value: '18,420', icon: 'bi-people-fill', trend: '+640 this month' },
    { label: 'Average Course Rating', value: '4.9 ★', icon: 'bi-star-fill', trend: '3,210 reviews' },
    { label: 'Monthly Royalty Payout', value: '$14,850', icon: 'bi-wallet2', trend: '+18.4% vs last mo' },
  ];

  instructorCourses = [
    {
      title: 'Enterprise Angular 19 & Signals Architecture',
      students: '8,420',
      rating: '4.9',
      revenue: '$6,420',
      status: 'Published',
    },
    {
      title: 'Reactive Microfrontends with Nx & Module Federation',
      students: '5,190',
      rating: '4.8',
      revenue: '$4,910',
      status: 'Published',
    },
    {
      title: 'TypeScript 5.x Advanced Design Patterns',
      students: '4,810',
      rating: '4.9',
      revenue: '$3,520',
      status: 'Published',
    },
  ];

  // Admin stats & platform metrics
  adminStats = [
    { label: 'Total Platform Users', value: '142,800', icon: 'bi-people-fill', trend: '+4,210 this month' },
    { label: 'Active Published Courses', value: '1,284', icon: 'bi-journal-richtext', trend: '38 pending review' },
    { label: 'Gross Platform Revenue', value: '$482,900', icon: 'bi-cash-coin', trend: '+22.6% YoY' },
    { label: 'System Uptime & SLA', value: '99.98%', icon: 'bi-shield-check', trend: 'All services healthy' },
  ];

  adminQueue = [
    {
      course: 'Advanced Rust for Systems Programming',
      instructor: 'Devon Brooks',
      category: 'Software Engineering',
      submitted: '2 hours ago',
      status: 'Pending QA Review',
    },
    {
      course: 'Cloud Security & Zero-Trust Architecture',
      instructor: 'Priya Nair',
      category: 'Cybersecurity',
      submitted: '5 hours ago',
      status: 'Pending QA Review',
    },
    {
      course: 'Product Design Systems in Figma',
      instructor: 'Lucas Meyer',
      category: 'UI/UX Design',
      submitted: '1 day ago',
      status: 'Approved',
    },
  ];

  constructor() {
    const savedRole = localStorage.getItem('role')?.toLowerCase() as UserRole;
    if (
      savedRole === UserRole.Admin ||
      savedRole === UserRole.Instructor ||
      savedRole === UserRole.Learner
    ) {
      this.activeRole = savedRole;
    } else {
      this.activeRole = UserRole.Learner;
      localStorage.setItem('role', this.activeRole);
    }
    this.syncRoleLinks();
  }

  switchRole(role: UserRole): void {
    this.activeRole = role;
    localStorage.setItem('role', role);
    this.syncRoleLinks();
    window.dispatchEvent(new CustomEvent('coursehub-role-change', { detail: role }));
  }

  private syncRoleLinks(): void {
    this.roleLinks = NAV_LINKS.filter((link) => link.roles.includes(this.activeRole));
  }
}
