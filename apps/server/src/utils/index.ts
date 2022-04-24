// @ts-ignore
import * as credential from 'credential';
import { validate } from '../validation.pipe';
import { plainToInstance } from 'class-transformer';

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

export type ClassConstructor<T> = {
  new (...args: any[]): T;
};

export function makeValidateFieldFn<T extends object>(
  field: string,
  cls: ClassConstructor<T>,
) {
  return async (value: unknown) => {
    const createProfileDto = plainToInstance(cls, {
      [field]: value,
    });

    const errors = await validate(createProfileDto, {
      skipMissingProperties: true,
    });

    if (errors.length) {
      return errors
        .map((e) => Object.values(e.constraints).join(', '))
        .join('. ');
    }

    return undefined;
  };
}
