import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-become-instructor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './become-instructor.html',
  styleUrl: './become-instructor.css',
})
export class BecomeInstructor {
  benefits = [
    {
      icon: 'bi-easel2-fill',
      title: 'Intuitive Creator Studio',
      description:
        'Upload 4K video lectures, attach code repositories, build interactive quizzes, and structure multi-module curriculums effortlessly.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
    },
    {
      icon: 'bi-cash-coin',
      title: 'Industry-Leading Revenue Share',
      description:
        'Earn up to 85% revenue share on instructor-referred enrollments and recurring bonuses from CourseHub Pro subscriptions.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80',
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Actionable Student Analytics',
      description:
        'Track enrollment conversions, lesson completion heatmaps, student review sentiment, and monthly payout forecasts in real time.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
    },
  ];

  steps = [
    {
      step: '01',
      title: 'Apply & Verify Your Profile',
      description: 'Create your instructor account, showcase your domain expertise, and complete quick verification.',
    },
    {
      step: '02',
      title: 'Design Your Curriculum in Studio',
      description: 'Use our structured Course Builder to organize sections, video lessons, coding labs, and quizzes.',
    },
    {
      step: '03',
      title: 'Pass Quality Review & Launch',
      description: 'Our Admin moderation team reviews audio/video quality and publishes your course to 125K+ learners.',
    },
    {
      step: '04',
      title: 'Engage Learners & Receive Payouts',
      description: 'Answer questions in the Q&A inbox, send announcements, and receive automated monthly payouts.',
    },
  ];

  mentorStories = [
    {
      id: 'dr-arjun-mehta',
      name: 'Dr. Arjun Mehta',
      role: 'Principal Frontend Architect',
      earnings: '$94,000+ Earned',
      students: '48,500+ Learners',
      quote:
        'CourseHub Studio made it effortless to structure my Angular & Micro-Frontends curriculum. The student Q&A and analytics helped me refine every module.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'elena-rostova',
      name: 'Elena Rostova',
      role: 'Lead AI Research Scientist',
      earnings: '$112,000+ Earned',
      students: '54,200+ Learners',
      quote:
        'Publishing my Generative AI & RAG course on CourseHub connected me with thousands of engineers globally while generating consistent monthly payouts.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
  ];
}
