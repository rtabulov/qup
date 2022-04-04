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

export const roleNames: Record<string, string> = {
  admin: 'администратор',
  teacher: 'преподаватель',
  departmentHead: 'Заведующий кафедрой',
  hr: 'HR',
};

export function resolveAuthLevel(
  userRole: string | null | undefined,
  target: true | string | string[],
) {
  if (!userRole) {
    return false;
  }

  if (target === true) {
    return ROLES_ARRAY.includes(userRole as any);
  }

  const targetArray = typeof target === 'string' ? [target] : target;

  return targetArray.includes(userRole);
}

export function isPicture(filename: string) {
  const ext = filename.split('.').at(-1);
  return ['jpg', 'jpeg', 'png', 'webp'].includes(ext as string);
}

export function getHomePage(roleKey: string | null | undefined): string {
  if (roleKey === 'hr' || roleKey === 'departmentHead') {
    return '/certificates/awaiting-approval';
  }

  if (roleKey === 'admin') {
    return '/users';
  }

  if (roleKey === 'teacher') {
    return '/profile';
  }

  return '/';
}
