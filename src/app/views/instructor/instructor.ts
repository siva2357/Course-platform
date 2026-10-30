import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserNavbar } from '../../library/Layouts/user-navbar/user-navbar';
import { Sidebar } from '../../library/Layouts/sidebar/sidebar';
import { UserRole } from '../../core/enums/role.enum';

@Component({
  selector: 'app-instructor',
  standalone: true,
  imports: [RouterOutlet, UserNavbar, Sidebar],
  templateUrl: './instructor.html',
  styleUrl: './instructor.css',
})
export class Instructor {
  userRole: UserRole = UserRole.Instructor;
}
