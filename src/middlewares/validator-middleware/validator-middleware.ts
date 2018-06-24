import { validationResult } from 'express-validator/check';
import { ValidationError } from '../../errors';

export const handleValidationMiddleware = (req: any, res: any, next: any) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
    return;
  }

  next(new ValidationError(JSON.stringify(errors.mapped())));
};

const validate = (schema: any) => {
  return [schema, handleValidationMiddleware];
};
