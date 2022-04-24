import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate as classValidate } from 'class-validator-multi-lang';
import { plainToClass } from 'class-transformer';
import { partial } from 'lodash';

import * as RU_I18N_MESSAGES from 'class-validator-multi-lang/i18n/ru.json';
import { ValidatorOptions } from 'class-validator';

export const validate = <T extends object>(
  someObject: T,
  options?: ValidatorOptions,
) =>
  classValidate(someObject, {
    messages: RU_I18N_MESSAGES,
    ...options,
  });

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    // const errors = await validate(object);

    const errors = await validate(object);

    if (errors.length > 0) {
      const errorsResponseObject = Object.fromEntries(
        errors.map((e) => [
          e.property,
          Object.values(e.constraints).join(', '),
        ]),
      );

      throw new BadRequestException(errorsResponseObject);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
