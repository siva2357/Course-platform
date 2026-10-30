import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing-and-plans',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pricing-and-plans.html',
  styleUrl: './pricing-and-plans.css',
})
export class PricingAndPlans {
  billingCycle: 'monthly' | 'annual' = 'annual';

  plans = [
    {
      name: 'Explorer (Free)',
      badge: 'Starter',
      featured: false,
      monthlyPrice: 0,
      annualPrice: 0,
      description: 'Ideal for learners exploring foundational tech topics and free community courses.',
      ctaLabel: 'Start for Free',
      features: [
        'Access to 45+ free starter courses',
        'Preview lectures across all 420+ catalog courses',
        'Public community Q&A read access',
        'Pay-per-course lifetime purchase option',
      ],
    },
    {
      name: 'CourseHub Pro',
      badge: 'Most Popular',
      featured: true,
      monthlyPrice: 29,
      annualPrice: 19,
      description: 'Unlimited access to all 420+ courses, guided career paths, hands-on labs, and certificates.',
      ctaLabel: 'Start 7-Day Free Trial',
      features: [
        'Unlimited access to all 420+ expert courses',
        'All Role-Based Guided Learning Paths',
        'Interactive coding assignments & graded quizzes',
        'Verified digital Certificates of Completion',
        'Direct Instructor Q&A priority responses',
        'Offline viewing & downloadable source code',
      ],
    },
    {
      name: 'Teams & Enterprise',
      badge: 'Organizations',
      featured: false,
      monthlyPrice: 49,
      annualPrice: 39,
      description: 'Built for engineering teams, universities, and organizations scaling skill transformation.',
      ctaLabel: 'Contact Enterprise Sales',
      features: [
        'Everything in CourseHub Pro for 5+ seats',
        'Admin Analytics & Team Skill Matrix Dashboard',
        'Custom Learning Path assignment & deadlines',
        'SSO (SAML / OIDC) & LMS integrations',
        'Dedicated Customer Success Manager',
      ],
    },
  ];

  faqs = [
    {
      q: 'Can I buy individual courses instead of subscribing?',
      a: 'Yes! Every course on CourseHub can be purchased individually with lifetime access, or unlocked all at once via CourseHub Pro.',
    },
    {
      q: 'Are CourseHub certificates verifiable by employers?',
      a: 'Absolutely. Every certificate includes a unique cryptographic verification ID and URL that can be added directly to LinkedIn or resumes.',
    },
    {
      q: 'Can I switch between monthly and annual billing anytime?',
      a: 'Yes, you can upgrade, downgrade, or cancel your subscription at any time from your Account Settings page.',
    },
  ];
}
