import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ZodTypeAny } from 'zod';

@Injectable()
// Accepts a zod (joi-like) schema and uses it to validate request parameters
export class CustomValidationPipe implements PipeTransform {
  constructor(private schema: ZodTypeAny) {}

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      this.schema.parse(value);

      return value;
    } catch (err) {
      // metadata.type e.g. "body" (request body)
      throw new BadRequestException(
        `${metadata.type} has error "${err.message}"`,
      );
    }
  }
}
