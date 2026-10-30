import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button } from '../../../library/UI/components/button/button';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [Button, RouterLink],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.css',
})
export class SignupPage {
  private readonly router = inject(Router);

  selectedRole: 'learner' | 'instructor' | null = null;

  selectRole(role: 'learner' | 'instructor'): void {
    this.selectedRole = role;
  }

  continue(): void {
    if (!this.selectedRole) {
      return;
    }

    this.router.navigate(['/register'], {
      queryParams: {
        role: this.selectedRole,
      },
    });
  }
}
