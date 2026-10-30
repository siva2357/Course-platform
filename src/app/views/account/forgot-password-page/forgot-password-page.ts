import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputField } from '../../../library/UI/components/input-field/input-field';
import { Button } from '../../../library/UI/components/button/button';

@Component({
  selector: 'app-forgot-password-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, InputField, Button],
  templateUrl: './forgot-password-page.html',
  styleUrl: './forgot-password-page.css',
})
export class ForgotPasswordPage {
  private readonly fb = inject(FormBuilder);

  readonly forgotForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  submittedSuccess = false;

  getValidationState(): 'none' | 'success' | 'error' {
    const control = this.forgotForm.controls.email;
    if (!control.dirty && !control.touched) {
      return 'none';
    }
    return control.invalid ? 'error' : 'success';
  }

  getErrorMessage(): string {
    const control = this.forgotForm.controls.email;
    if (!control.errors || (!control.dirty && !control.touched)) {
      return '';
    }
    if (control.hasError('required')) {
      return 'Email address is required';
    }
    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }
    return 'Invalid input';
  }

  sendResetLink(): void {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }
    this.submittedSuccess = true;
  }
}
