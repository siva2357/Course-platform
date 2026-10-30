import { Routes } from '@angular/router';

import { LoginPage } from './login-page/login-page';
import { SignupPage } from './signup-page/signup-page';
import { OtpVerificationPage } from './otp-verification-page/otp-verification-page';
import { ForgotPasswordPage } from './forgot-password-page/forgot-password-page';
import { ResetPassword } from './reset-password/reset-password';
import { ChangePasswordPage } from './change-password-page/change-password-page';
import { MyProfilePage } from './my-profile-page/my-profile-page';
import { AccountSettingsPage } from './account-settings-page/account-settings-page';
import { RegisterPage } from './register-page/register-page';

export const ACCOUNT_ROUTES: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
  { path: 'register', component: RegisterPage },
  { path: 'otp-verification', component: OtpVerificationPage },
  { path: 'forgot-password', component: ForgotPasswordPage },
  { path: 'reset-password', component: ResetPassword },
  { path: 'change-password', component: ChangePasswordPage },
  { path: 'my-profile', component: MyProfilePage },
  { path: 'account-settings', component: AccountSettingsPage },
];
