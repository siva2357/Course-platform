import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserNavbar } from '../../library/Layouts/user-navbar/user-navbar';
import { Sidebar } from '../../library/Layouts/sidebar/sidebar';
import { UserRole } from '../../core/enums/role.enum';

@Component({
  selector: 'app-learner',
  standalone: true,
  imports: [RouterOutlet, UserNavbar, Sidebar],
  templateUrl: './learner.html',
  styleUrl: './learner.css',
})
export class Learner {
  userRole: UserRole = UserRole.Learner;
}
