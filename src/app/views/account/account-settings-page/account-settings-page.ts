import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Button } from '../../../library/UI/components/button/button';

@Component({
  selector: 'app-account-settings-page',
  standalone: true,
  imports: [RouterLink, FormsModule, Button],
  templateUrl: './account-settings-page.html',
  styleUrl: './account-settings-page.css',
})
export class AccountSettingsPage {
  activeTab: 'notifications' | 'security' | 'billing' = 'notifications';
  savedMessage = '';

  preferences = {
    courseAnnouncements: true,
    instructorReplies: true,
    weeklyStreakDigest: true,
    promotionsAndDiscounts: false,
    twoFactorEnabled: true,
  };

  saveSettings(): void {
    this.savedMessage = 'Your account preferences have been updated.';
  }
}
