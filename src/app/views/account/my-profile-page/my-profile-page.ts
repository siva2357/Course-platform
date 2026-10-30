import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Button } from '../../../library/UI/components/button/button';
import { UserRole } from '../../../core/enums/role.enum';

@Component({
  selector: 'app-my-profile-page',
  standalone: true,
  imports: [RouterLink, FormsModule, Button],
  templateUrl: './my-profile-page.html',
  styleUrl: './my-profile-page.css',
})
export class MyProfilePage implements OnInit {
  private readonly route = inject(ActivatedRoute);

  readonly UserRole = UserRole;
  activeRole: UserRole = UserRole.Learner;
  savedBanner = false;

  learnerProfile = {
    studentId: 'CH-LRN-20489',
    fullName: 'Aarav Verma',
    email: 'aarav.verma@coursehub.io',
    learningTrack: 'Full-Stack Web & Cloud Engineering Path',
    dailyStudyGoal: '60 Minutes / Day',
    preferredLanguage: 'English (with Subtitles)',
    favoriteSubjects: 'Angular, .NET Microservices, Generative AI',
    learningBio:
      'Active learner on Course Hub focusing on interactive full-stack engineering courses, hands-on coding labs, and cloud architecture certifications.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    stats: {
      enrolledCourses: 6,
      completedCourses: 4,
      quizzesPassed: 38,
      certificatesEarned: 4,
      learningHours: '118h',
      streakDays: 14,
    },
    activeCourses: [
      {
        id: 'angular-enterprise-architect',
        title: 'Enterprise Angular 19 & Micro-Frontends Architecture',
        instructor: 'Dr. Arjun Mehta',
        progress: 78,
        completedLessons: '100 / 128 Lessons',
        lastLesson: 'Module 3: Native Federation & Shell Host',
      },
      {
        id: 'generative-ai-llm-engineering',
        title: 'Generative AI, RAG Systems & LLM Agent Engineering',
        instructor: 'Elena Rostova',
        progress: 45,
        completedLessons: '70 / 156 Lessons',
        lastLesson: 'Module 2: Vector Embeddings & Hybrid Search',
      },
    ],
    certificates: [
      {
        title: 'Enterprise Angular 19 Architecture',
        instructor: 'Dr. Arjun Mehta',
        date: 'Oct 2026',
        grade: '98% Score',
        id: 'CERT-ANG-9921',
      },
      {
        title: '.NET 9 Clean Architecture & Microservices',
        instructor: 'Dr. Arjun Mehta',
        date: 'Sep 2026',
        grade: '95% Score',
        id: 'CERT-NET-8410',
      },
    ],
  };

  instructorProfile = {
    id: 'dr-arjun-mehta',
    instructorId: 'CH-INST-1042',
    fullName: 'Dr. Arjun Mehta',
    academicTitle: 'Senior CourseHub Educator & Curriculum Author',
    email: 'arjun.mehta@coursehub.io',
    department: 'Software Architecture & Cloud Computing',
    teachingLanguage: 'English (HD Video + Closed Captions)',
    qaSchedule: 'Daily Q&A Forum Responses (Within 6 Hours)',
    bio: 'CourseHub Educator specializing in step-by-step project-based courses on Angular, .NET Microservices, and Distributed Systems. Dedicated to helping students master complex concepts through interactive labs and quizzes.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    courseTopics: [
      'Angular 19',
      'Micro-Frontends',
      '.NET 9 APIs',
      'System Design',
      'Cloud Architecture',
      'Interactive Coding Labs',
    ],
    stats: {
      rating: '4.9 ★',
      totalStudents: '48,500+',
      publishedCourses: 8,
      totalReviews: '6,840',
      qaResponseRate: '99%',
    },
    publishedCourses: [
      {
        id: 'angular-enterprise-architect',
        title: 'Enterprise Angular 19 & Micro-Frontends Architecture',
        students: '14,280 Learners',
        rating: '4.9 ★ (1,420)',
        modules: '12 Modules • 128 Video Lessons',
        status: 'Published & Bestseller',
      },
      {
        id: 'dotnet-microservices-clean-arch',
        title: '.NET 9 Microservices, Clean Architecture & RabbitMQ',
        students: '13,100 Learners',
        rating: '4.8 ★ (1,120)',
        modules: '14 Modules • 142 Video Lessons',
        status: 'Published',
      },
    ],
  };

  ngOnInit(): void {
    const roleParam = this.route.snapshot.queryParamMap.get('role')?.toLowerCase();
    if (roleParam === UserRole.Instructor) {
      this.activeRole = UserRole.Instructor;
    } else if (roleParam === UserRole.Learner) {
      this.activeRole = UserRole.Learner;
    }
  }

  switchRole(role: UserRole): void {
    this.activeRole = role;
    this.savedBanner = false;
  }

  saveProfile(): void {
    this.savedBanner = true;
  }
}
