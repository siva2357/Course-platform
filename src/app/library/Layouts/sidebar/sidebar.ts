import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRole } from '../../../core/enums/role.enum';
import { NavLink } from '../../../core/models/sidebar.interface';
import { NAV_LINKS } from '../../../core/constants/navlinks';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private _role: UserRole = UserRole.Learner;

  @Input()
  set role(value: UserRole) {
    const storedRole = localStorage.getItem('role')?.toLowerCase() as UserRole;
    if (
      storedRole === UserRole.Admin ||
      storedRole === UserRole.Instructor ||
      storedRole === UserRole.Learner
    ) {
      this._role = storedRole;
    } else if (value) {
      this._role = value;
    }
    this.updateNavLinks();
  }

  get role(): UserRole {
    return this._role;
  }

  isOpen = true;

  // Tooltip state
  tooltipText = '';
  tooltipTop = 0;

  navLinks: NavLink[] = [];

  constructor() {
    const savedState = localStorage.getItem('sidebarOpen');
    if (savedState !== null) {
      this.isOpen = savedState === 'true';
    }

    const storedRole = localStorage.getItem('role')?.toLowerCase() as UserRole;
    if (
      storedRole === UserRole.Admin ||
      storedRole === UserRole.Instructor ||
      storedRole === UserRole.Learner
    ) {
      this._role = storedRole;
    }

    this.updateNavLinks();
  }

  @HostListener('window:coursehub-role-change', ['$event'])
  onRoleChange(event: Event) {
    const customEvent = event as CustomEvent<UserRole>;
    if (customEvent.detail) {
      this._role = customEvent.detail;
      this.updateNavLinks();
    }
  }

  private updateNavLinks() {
    const activeRole = (this._role || UserRole.Learner).toLowerCase();
    this.navLinks = NAV_LINKS.filter((link) => link.roles.includes(activeRole));
  }

  showTooltip(event: MouseEvent, label: string) {
    if (this.isOpen) return;
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    this.tooltipTop = rect.top + rect.height / 2;
    this.tooltipText = label;
  }

  hideTooltip() {
    this.tooltipText = '';
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    localStorage.setItem('sidebarOpen', String(this.isOpen));
  }

  closeOnMobile() {
    if (window.innerWidth <= 768) {
      this.isOpen = false;
      localStorage.setItem('sidebarOpen', 'false');
    }
  }
}
