import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Button } from '../../../library/UI/components/button/button';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, FormsModule, Button],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  searchQuery = '';
  selectedCategory = 'All';

  categories = [
    { name: 'All', icon: 'bi-grid-fill', count: '420+ Courses' },
    { name: 'Full-Stack Web', icon: 'bi-code-slash', count: '115 Courses' },
    { name: 'AI & Data Science', icon: 'bi-cpu-fill', count: '88 Courses' },
    { name: 'Cloud & DevOps', icon: 'bi-cloud-check-fill', count: '64 Courses' },
    { name: 'UI/UX Design', icon: 'bi-bezier2', count: '52 Courses' },
    { name: 'Cybersecurity', icon: 'bi-shield-lock-fill', count: '41 Courses' },
    { name: 'Product & Business', icon: 'bi-bar-chart-line-fill', count: '60 Courses' },
  ];

  stats = [
    { value: '125K+', label: 'Active Learners', icon: 'bi-people-fill' },
    { value: '420+', label: 'Expert-Led Courses', icon: 'bi-journal-code' },
    { value: '350+', label: 'Verified Instructors', icon: 'bi-person-check-fill' },
    { value: '4.9/5', label: 'Average Course Rating', icon: 'bi-star-fill' },
  ];

  featuredCourses = [
    {
      id: 'angular-enterprise-architect',
      title: 'Enterprise Angular 19 & Micro-Frontends Architecture',
      category: 'Full-Stack Web',
      level: 'Advanced',
      rating: 4.9,
      reviews: 1420,
      students: '14.2k',
      duration: '32h 45m',
      lessons: 128,
      price: 49.99,
      originalPrice: 129.99,
      badge: 'Bestseller',
      instructor: {
        id: 'dr-arjun-mehta',
        name: 'Dr. Arjun Mehta',
        role: 'Principal Frontend Architect',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'generative-ai-llm-engineering',
      title: 'Generative AI, RAG Systems & LLM Agent Engineering',
      category: 'AI & Data Science',
      level: 'Intermediate',
      rating: 4.9,
      reviews: 2150,
      students: '21.8k',
      duration: '40h 15m',
      lessons: 156,
      price: 59.99,
      originalPrice: 149.99,
      badge: 'Hot & New',
      instructor: {
        id: 'elena-rostova',
        name: 'Elena Rostova',
        role: 'Lead AI Research Scientist',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cloud-native-kubernetes-aws',
      title: 'Cloud-Native DevOps with Kubernetes, Terraform & AWS',
      category: 'Cloud & DevOps',
      level: 'Intermediate',
      rating: 4.8,
      reviews: 980,
      students: '11.4k',
      duration: '28h 30m',
      lessons: 104,
      price: 44.99,
      originalPrice: 119.99,
      badge: 'Top Rated',
      instructor: {
        id: 'marcus-vance',
        name: 'Marcus Vance',
        role: 'Staff Cloud Solutions Architect',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'design-systems-figma-pro',
      title: 'Design Systems Mastery: Tokenized UI/UX with Figma',
      category: 'UI/UX Design',
      level: 'All Levels',
      rating: 4.9,
      reviews: 840,
      students: '9.6k',
      duration: '22h 10m',
      lessons: 86,
      price: 39.99,
      originalPrice: 99.99,
      badge: 'Featured',
      instructor: {
        id: 'sophia-chen',
        name: 'Sophia Chen',
        role: 'VP of Product Design',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'dotnet-microservices-clean-arch',
      title: '.NET 9 Microservices, Clean Architecture & RabbitMQ',
      category: 'Full-Stack Web',
      level: 'Advanced',
      rating: 4.8,
      reviews: 1120,
      students: '13.1k',
      duration: '36h 00m',
      lessons: 142,
      price: 54.99,
      originalPrice: 139.99,
      badge: 'Bestseller',
      instructor: {
        id: 'dr-arjun-mehta',
        name: 'Dr. Arjun Mehta',
        role: 'Principal Frontend Architect',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'zero-trust-cybersecurity-soc',
      title: 'Zero-Trust Cybersecurity, Ethical Hacking & SOC Operations',
      category: 'Cybersecurity',
      level: 'Intermediate',
      rating: 4.9,
      reviews: 670,
      students: '7.9k',
      duration: '26h 20m',
      lessons: 98,
      price: 49.99,
      originalPrice: 119.99,
      badge: 'Verified Track',
      instructor: {
        id: 'marcus-vance',
        name: 'Marcus Vance',
        role: 'Staff Cloud Solutions Architect',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  ecosystemPillars = [
    {
      role: 'For Learners',
      title: 'Accelerate Your Career with Guided Mastery',
      description:
        'Follow structured learning paths, practice with hands-on labs and quizzes, interact in live Q&A forums, and earn verifiable credentials.',
      icon: 'bi-mortarboard-fill',
      accent: 'primary',
      features: [
        'Interactive HD video classroom & notes',
        'Real-world capstone assignments & auto-graded quizzes',
        'Shareable digital certificates & skill badges',
      ],
      ctaLabel: 'Explore Catalog',
      ctaRoute: '/courses',
    },
    {
      role: 'For Instructors',
      title: 'Build, Launch & Monetize High-Impact Courses',
      description:
        'Use our studio curriculum builder, student analytics, announcement tools, and automated global payouts to grow your teaching brand.',
      icon: 'bi-easel2-fill',
      accent: 'info',
      features: [
        'Drag-and-drop multi-module curriculum builder',
        'Real-time revenue, conversion & completion analytics',
        'Direct Q&A inbox & student review management',
      ],
      ctaLabel: 'Become an Instructor',
      ctaRoute: '/become-instructor',
    },
    {
      role: 'For Organizations & Admins',
      title: 'Enterprise Governance & Quality Assurance',
      description:
        'Maintain platform excellence with course moderation workflows, instructor verification, transparent commission splits, and analytics.',
      icon: 'bi-shield-check',
      accent: 'dark',
      features: [
        'Multi-stage course review & compliance checks',
        'Role-based access for Learners, Instructors & Admins',
        'Automated financial reporting & payout governance',
      ],
      ctaLabel: 'View Plans',
      ctaRoute: '/pricing',
    },
  ];

  testimonials = [
    {
      quote:
        'CourseHub completely transformed how I transitioned from junior developer to Senior Full-Stack Engineer. The structured learning paths and instructor feedback are unmatched.',
      name: 'Priya Nair',
      role: 'Senior Software Engineer @ FinTech Global',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      quote:
        'As an instructor, CourseHub gives me deep analytics into where students pause or ask questions. My courses reached 14,000+ learners in just six months.',
      name: 'Dr. Arjun Mehta',
      role: 'Principal Architect & Top CourseHub Instructor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
    {
      quote:
        'We upskilled our entire 80-person cloud engineering team using CourseHub Pro tracks. The hands-on assignments and certification tracking saved us months of training.',
      name: 'David Lindqvist',
      role: 'VP of Engineering @ CloudScale',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  ];

  get filteredCourses() {
    if (this.selectedCategory === 'All') {
      return this.featuredCourses;
    }
    return this.featuredCourses.filter((c) => c.category === this.selectedCategory);
  }

  selectCategory(cat: string): void {
    this.selectedCategory = cat;
  }
}
