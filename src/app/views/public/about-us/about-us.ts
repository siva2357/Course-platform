import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  values = [
    {
      icon: 'bi-compass-fill',
      title: 'Practitioner-Led Education',
      desc: 'Every course is built by verified architects, researchers, and engineers solving real-world production challenges.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80',
    },
    {
      icon: 'bi-diagram-3-fill',
      title: 'Unified 3-Role Ecosystem',
      desc: 'Seamless collaboration between Learners, Instructors, and Platform Admins under one high-trust learning environment.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
    },
    {
      icon: 'bi-award-fill',
      title: 'Measurable Career Impact',
      desc: 'Hands-on projects, code reviews, and verifiable credentials that translate directly to promotions and job offers.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80',
    },
  ];

  leadership = [
    {
      name: 'Vikramaditya Rao',
      role: 'Co-Founder & Chief Executive Officer',
      bio: 'Former VP of Engineering in EdTech with 16+ years scaling global distributed learning platforms.',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Dr. Ananya Sharma',
      role: 'Co-Founder & Chief Academic Officer',
      bio: 'Ph.D. in Computer Science, curriculum architect, and advocate for project-based technical mastery.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Liam O’Connor',
      role: 'VP of Creator Studio & Partnerships',
      bio: 'Empowers 350+ top industry instructors to build, launch, and monetize flagship engineering courses.',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    },
  ];
}
