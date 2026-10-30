import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './help-center.html',
  styleUrl: './help-center.css',
})
export class HelpCenter {
  searchQuery = '';
  activeRoleTab: 'learner' | 'instructor' | 'billing' = 'learner';

  faqs = {
    learner: [
      {
        q: 'How do I access my enrolled courses and classroom player?',
        a: 'Once logged in, navigate to My Learning from your Learner Dashboard to resume video lectures, download resources, and submit assignments.',
      },
      {
        q: 'How do I earn and download my course certificate?',
        a: 'Complete 100% of the video modules and pass the final assessment quiz. Your verified PDF certificate and shareable URL will appear in My Certifications.',
      },
      {
        q: 'Can I ask questions directly to the course instructor?',
        a: 'Yes! Every lesson includes a dedicated Course Discussions & Q&A tab where instructors and teaching assistants respond to learner questions.',
      },
    ],
    instructor: [
      {
        q: 'How long does course moderation and approval take?',
        a: 'Our Admin quality review team evaluates submitted courses within 24–48 business hours and provides direct feedback in your Instructor Studio.',
      },
      {
        q: 'When and how are instructor payouts processed?',
        a: 'Payouts are processed automatically on the 5th of every month via Stripe, PayPal, or direct bank transfer.',
      },
    ],
    billing: [
      {
        q: 'What is your refund policy for individual courses?',
        a: 'We offer a 30-day satisfaction guarantee on all individual course purchases as long as less than 35% of the course has been completed.',
      },
      {
        q: 'Where can I download GST/VAT tax invoices?',
        a: 'All itemized receipts and tax invoices are available in your My Purchases page inside your account.',
      },
    ],
  };
}
