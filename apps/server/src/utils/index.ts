// @ts-ignore
import * as credential from 'credential';

export function resolveAuthLevel(
  userRole: string | null | undefined,
  target: true | string,
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

export function hashPassword(password): Promise<string> {
  return new Promise((resolve, reject) => {
    credential().hash(password, function (err, hash) {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
}
