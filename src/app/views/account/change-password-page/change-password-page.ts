import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputField } from '../../../library/UI/components/input-field/input-field';
import { Button } from '../../../library/UI/components/button/button';

@Component({
  selector: 'app-change-password-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, InputField, Button],
  templateUrl: './change-password-page.html',
  styleUrl: './change-password-page.css',
})
export class ChangePasswordPage {
  private readonly fb = inject(FormBuilder);

  readonly passwordForm = this.fb.nonNullable.group({
    currentPassword: ['', [Validators.required]],
    newPassword: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
  });

  savedSuccess = false;

  getValidationState(field: 'currentPassword' | 'newPassword' | 'confirmPassword'): 'none' | 'success' | 'error' {
    const control = this.passwordForm.controls[field];
    if (!control.dirty && !control.touched) {
      return 'none';
    }
    if (field === 'confirmPassword' && control.value !== this.passwordForm.controls.newPassword.value) {
      return 'error';
    }
    return control.invalid ? 'error' : 'success';
  }

  getErrorMessage(field: 'currentPassword' | 'newPassword' | 'confirmPassword'): string {
    const control = this.passwordForm.controls[field];
    if (!control.dirty && !control.touched) {
      return '';
    }
    if (control.hasError('required')) {
      return 'This password field is required';
    }
    if (field === 'newPassword' && control.hasError('pattern')) {
      return 'Must contain at least 8 chars, 1 uppercase, 1 lowercase, 1 number & 1 special char';
    }
    if (field === 'confirmPassword' && control.value !== this.passwordForm.controls.newPassword.value) {
      return 'Passwords do not match';
    }
    return '';
  }

  updatePassword(): void {
    if (
      this.passwordForm.invalid ||
      this.passwordForm.value.newPassword !== this.passwordForm.value.confirmPassword
    ) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    this.savedSuccess = true;
    this.passwordForm.reset();
  }
}
