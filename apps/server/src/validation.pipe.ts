import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator-multi-lang';
import { plainToClass } from 'class-transformer';

import * as RU_I18N_MESSAGES from 'class-validator-multi-lang/i18n/ru.json';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    // const errors = await validate(object);

    const errors = await validate(object, { messages: RU_I18N_MESSAGES });

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
