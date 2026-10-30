import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Button } from '../../../library/UI/components/button/button';

@Component({
  selector: 'app-otp-verification-page',
  standalone: true,
  imports: [RouterLink, FormsModule, Button],
  templateUrl: './otp-verification-page.html',
  styleUrl: './otp-verification-page.css',
})
export class OtpVerificationPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  email = this.route.snapshot.queryParamMap.get('email') || 'learner@coursehub.io';
  role = this.route.snapshot.queryParamMap.get('role') || 'learner';
  otpDigits: string[] = ['', '', '', '', '', ''];
  errorMessage = '';
  resentMessage = '';

  onDigitInput(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const val = input.value.replace(/\D/g, '').slice(-1);
    this.otpDigits[index] = val;
    input.value = val;

    if (val && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  }

  onKeyDown(index: number, event: KeyboardEvent): void {
    if (event.key === 'Backspace' && !this.otpDigits[index] && index > 0) {
      const prev = document.getElementById(`otp-${index - 1}`);
      prev?.focus();
    }
  }

  verifyOtp(): void {
    const code = this.otpDigits.join('');
    if (code.length < 6) {
      this.errorMessage = 'Please enter all 6 digits of your verification code.';
      return;
    }
    this.errorMessage = '';
    this.router.navigate(['/login']);
  }

  resendCode(): void {
    this.errorMessage = '';
    this.resentMessage = `A fresh 6-digit verification code has been sent to ${this.email}.`;
  }
}
