import type { User } from '../types';
import { ROLES_ARRAY } from '../types';

export function limitLength(str: string, len = 20) {
  const END_PART_SIZE = 4;
  if (str.length < len) return str;

  const ext = str.split('.').at(-1);
  const name = str.split('.').slice(0, -1).join('.');

  return (
    name.slice(0, len - END_PART_SIZE) +
    '...' +
    name.slice(-END_PART_SIZE) +
    '.' +
    ext
  );
}

export const roleNames: Record<User['role'], string> = {
  admin: 'администратор',
  teacher: 'преподаватель',
  departmentHead: 'Заведующий кафедрой',
  hr: 'HR',
};

export function resolveAuthLevel(
  userRole: User['role'] | null | undefined,
  target: true | User['role'],
) {
  if (!userRole) {
    return false;
  }

  const targetLevel = ROLES_ARRAY.findIndex((s) => s === target);
  const userLevel = ROLES_ARRAY.findIndex((s) => s === userRole);

  if (target === true) {
    return userLevel >= 0;
  }

  return userLevel >= targetLevel;
}

export function isPicture(filename: string) {
  const ext = filename.split('.').at(-1);
  return ['jpg', 'jpeg', 'png', 'webp'].includes(ext as string);
}
