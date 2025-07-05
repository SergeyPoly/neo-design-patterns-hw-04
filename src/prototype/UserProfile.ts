import { UserProfilePrototype } from './UserProfilePrototype';

export type Department = 'finance' | 'engineering' | 'marketing';

export interface Permissions {
  canEditUsers: boolean;
  canApproveBudget: boolean;
  canAccessInternalTools: boolean;
}

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public department: Department,
    public permissions: Permissions
  ) {}

  clone(): UserProfilePrototype {
    return new UserProfile(this.username, this.department, {
      ...this.permissions,
    });
  }
}
