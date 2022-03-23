import { User } from '../auth/models/user.entity';

export function resolveAuthLevel(
  userRole: User['role'] | null | undefined,
  target: true | User['role'],
) {
  if (!userRole) {
    return false;
  }

  const ROLES_ARRAY = ['teacher', 'hr', 'departmentHead', 'admin'] as const;

  const targetLevel = ROLES_ARRAY.findIndex((s) => s === target);
  const userLevel = ROLES_ARRAY.findIndex((s) => s === userRole);

  if (target === true) {
    return userLevel >= 0;
  }

  return userLevel >= targetLevel;
}
