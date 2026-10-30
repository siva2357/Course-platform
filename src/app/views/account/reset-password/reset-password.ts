import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputField } from '../../../library/UI/components/input-field/input-field';
import { Button } from '../../../library/UI/components/button/button';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, InputField, Button],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
})
export class ResetPassword {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly resetForm = this.fb.nonNullable.group({
    newPassword: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
  });

  errorMessage = '';

  getValidationState(field: 'newPassword' | 'confirmPassword'): 'none' | 'success' | 'error' {
    const control = this.resetForm.controls[field];
    if (!control.dirty && !control.touched) {
      return 'none';
    }
    if (field === 'confirmPassword' && control.value !== this.resetForm.controls.newPassword.value) {
      return 'error';
    }
    return control.invalid ? 'error' : 'success';
  }

  getErrorMessage(field: 'newPassword' | 'confirmPassword'): string {
    const control = this.resetForm.controls[field];
    if (!control.dirty && !control.touched) {
      return '';
    }
    if (control.hasError('required')) {
      return field === 'newPassword' ? 'New password is required' : 'Please confirm your password';
    }
    if (field === 'newPassword' && control.hasError('pattern')) {
      return 'Must contain at least 8 chars, 1 uppercase, 1 lowercase, 1 number & 1 special char';
    }
    if (field === 'confirmPassword' && control.value !== this.resetForm.controls.newPassword.value) {
      return 'Passwords do not match';
    }
    return '';
  }

  resetPassword(): void {
    if (
      this.resetForm.invalid ||
      this.resetForm.value.newPassword !== this.resetForm.value.confirmPassword
    ) {
      this.resetForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/login']);
  }
}
