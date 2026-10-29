import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { InputField } from '../../../library/UI/components/input-field/input-field';
import { Button } from '../../../library/UI/components/button/button';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    InputField,
    Button
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

  private readonly router = inject(Router);

  private readonly fb = inject(FormBuilder);

  readonly loginForm = this.fb.nonNullable.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        )
      ]
    ]
  });

  errorMessage = '';
  isLoading = false;

  getValidationState(
    field: 'email' | 'password'
  ): 'none' | 'success' | 'error' {

    const control = this.loginForm.controls[field];

    if (!control.dirty && !control.touched) {
      return 'none';
    }

    return control.invalid ? 'error' : 'success';
  }

  getErrorMessage(field: 'email' | 'password'): string {

    const control = this.loginForm.controls[field];

    if (
      !control.errors ||
      (!control.dirty && !control.touched)
    ) {
      return '';
    }

    if (control.hasError('required')) {
      return field === 'email'
        ? 'Email is required'
        : 'Password is required';
    }

    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }

    if (control.hasError('pattern')) {
      return 'Password must contain at least 8 chars, 1 uppercase, 1 lowercase, 1 number & 1 special character';
    }

    return 'Invalid input';
  }

  login(): void {

  }

  private handleLoginSuccess(response: any): void {

    this.isLoading = false;

    if (!response.success) {
      this.errorMessage =
        response.message || 'Login failed.';

      return;
    }

    const role = response.role?.toLowerCase();

    if (
      role !== 'admin' &&
      !response.profileCompleted
    ) {
      this.router.navigate(['/profile-form']);
      return;
    }

    this.router.navigate(['/dashboard']);
  }

  private handleLoginError(error: any): void {

    this.isLoading = false;

    this.errorMessage =
      error?.error?.message ??
      'Login failed. Please check your credentials.';
  }

}
