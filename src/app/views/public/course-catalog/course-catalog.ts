import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './course-catalog.html',
  styleUrl: './course-catalog.css',
})
export class CourseCatalog {
  searchQuery = '';
  selectedCategory = 'All';
  selectedLevel = 'All';
  selectedPrice = 'All';
  sortBy = 'popular';

  categories = [
    'All',
    'Full-Stack Web',
    'AI & Data Science',
    'Cloud & DevOps',
    'UI/UX Design',
    'Cybersecurity',
    'Product & Business',
  ];

  levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  courses = [
    {
      id: 'angular-enterprise-architect',
      title: 'Enterprise Angular 19 & Micro-Frontends Architecture',
      subtitle: 'Build scalable monorepos, signals-driven state, SSR, and enterprise UI libraries.',
      category: 'Full-Stack Web',
      level: 'Advanced',
      rating: 4.9,
      reviews: 1420,
      students: 14200,
      duration: '32h 45m',
      lessons: 128,
      price: 49.99,
      originalPrice: 129.99,
      isFree: false,
      badge: 'Bestseller',
      instructor: {
        id: 'dr-arjun-mehta',
        name: 'Dr. Arjun Mehta',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'generative-ai-llm-engineering',
      title: 'Generative AI, RAG Systems & LLM Agent Engineering',
      subtitle: 'Master LangChain, vector databases, prompt engineering, and autonomous AI workflows.',
      category: 'AI & Data Science',
      level: 'Intermediate',
      rating: 4.9,
      reviews: 2150,
      students: 21800,
      duration: '40h 15m',
      lessons: 156,
      price: 59.99,
      originalPrice: 149.99,
      isFree: false,
      badge: 'Hot & New',
      instructor: {
        id: 'elena-rostova',
        name: 'Elena Rostova',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cloud-native-kubernetes-aws',
      title: 'Cloud-Native DevOps with Kubernetes, Terraform & AWS',
      subtitle: 'Automate CI/CD pipelines, multi-region EKS clusters, and GitOps infrastructure.',
      category: 'Cloud & DevOps',
      level: 'Intermediate',
      rating: 4.8,
      reviews: 980,
      students: 11400,
      duration: '28h 30m',
      lessons: 104,
      price: 44.99,
      originalPrice: 119.99,
      isFree: false,
      badge: 'Top Rated',
      instructor: {
        id: 'marcus-vance',
        name: 'Marcus Vance',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'design-systems-figma-pro',
      title: 'Design Systems Mastery: Tokenized UI/UX with Figma',
      subtitle: 'Create accessible multi-brand design systems, variables, auto-layout, and dev handoff.',
      category: 'UI/UX Design',
      level: 'Beginner',
      rating: 4.9,
      reviews: 840,
      students: 9600,
      duration: '22h 10m',
      lessons: 86,
      price: 39.99,
      originalPrice: 99.99,
      isFree: false,
      badge: 'Featured',
      instructor: {
        id: 'sophia-chen',
        name: 'Sophia Chen',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'dotnet-microservices-clean-arch',
      title: '.NET 9 Microservices, Clean Architecture & RabbitMQ',
      subtitle: 'Design event-driven distributed backend systems with CQRS, Docker, and PostgreSQL.',
      category: 'Full-Stack Web',
      level: 'Advanced',
      rating: 4.8,
      reviews: 1120,
      students: 13100,
      duration: '36h 00m',
      lessons: 142,
      price: 54.99,
      originalPrice: 139.99,
      isFree: false,
      badge: 'Bestseller',
      instructor: {
        id: 'dr-arjun-mehta',
        name: 'Dr. Arjun Mehta',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'zero-trust-cybersecurity-soc',
      title: 'Zero-Trust Cybersecurity, Ethical Hacking & SOC Operations',
      subtitle: 'Hands-on penetration testing, threat hunting, SIEM monitoring, and cloud security.',
      category: 'Cybersecurity',
      level: 'Intermediate',
      rating: 4.9,
      reviews: 670,
      students: 7900,
      duration: '26h 20m',
      lessons: 98,
      price: 0,
      originalPrice: 89.99,
      isFree: true,
      badge: 'Free Starter',
      instructor: {
        id: 'marcus-vance',
        name: 'Marcus Vance',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      },
      thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  get filteredCourses() {
    let result = this.courses.filter((course) => {
      const matchesSearch =
        !this.searchQuery.trim() ||
        course.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        course.subtitle.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(this.searchQuery.toLowerCase());

      const matchesCategory =
        this.selectedCategory === 'All' || course.category === this.selectedCategory;

      const matchesLevel =
        this.selectedLevel === 'All' || course.level === this.selectedLevel;

      const matchesPrice =
        this.selectedPrice === 'All' ||
        (this.selectedPrice === 'Free' && course.isFree) ||
        (this.selectedPrice === 'Paid' && !course.isFree);

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });

    if (this.sortBy === 'popular') {
      result = [...result].sort((a, b) => b.students - a.students);
    } else if (this.sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (this.sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    return result;
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.selectedLevel = 'All';
    this.selectedPrice = 'All';
    this.sortBy = 'popular';
  }
}
