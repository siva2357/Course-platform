import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-instructor-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './instructor-profile.html',
  styleUrl: './instructor-profile.css',
})
export class InstructorProfile {
  instructor = {
    id: 'dr-arjun-mehta',
    name: 'Dr. Arjun Mehta',
    title: 'Principal Frontend & Distributed Systems Architect',
    badge: 'Top 1% CourseHub Mentor',
    location: 'Bengaluru, India',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 4.9,
    totalReviews: '6,840',
    totalStudents: '48,500+',
    totalCourses: 8,
    bio: 'Dr. Arjun Mehta is a Principal Systems Architect and Google Developer Expert with over 14 years of industry experience building high-throughput web platforms and cloud-native microservices. On CourseHub, he mentors engineers on practical enterprise architecture, Angular, and .NET.',
    expertise: ['Angular 19', 'Micro-Frontends', 'Nx Monorepos', '.NET 9', 'Clean Architecture', 'System Design', 'RxJS & Signals'],
    courses: [
      {
        id: 'angular-enterprise-architect',
        title: 'Enterprise Angular 19 & Micro-Frontends Architecture',
        level: 'Advanced',
        rating: 4.9,
        reviews: 1420,
        students: '14.2k',
        duration: '32h 45m',
        price: 49.99,
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'dotnet-microservices-clean-arch',
        title: '.NET 9 Microservices, Clean Architecture & RabbitMQ',
        level: 'Advanced',
        rating: 4.8,
        reviews: 1120,
        students: '13.1k',
        duration: '36h 00m',
        price: 54.99,
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'system-design-high-scale',
        title: 'System Design & High-Scale Distributed Web Applications',
        level: 'Intermediate',
        rating: 4.9,
        reviews: 940,
        students: '11.8k',
        duration: '24h 15m',
        price: 44.99,
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      },
    ],
  };
}
