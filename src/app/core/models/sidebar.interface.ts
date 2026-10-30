import { UserRole } from '../enums/role.enum';

export interface NavLink {
  label: string;
  path: string;
  icon: string;
  roles: (UserRole | string)[];
}
