import { validationResult } from 'express-validator/check';
import { ValidationError } from '../../errors';

const handleValidationMiddleware = (req: any, res: any, next: any) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    next();
    return;
  }

  next(new ValidationError(errors.mapped()));
};

export const validate = (schema: any) => {
  return [schema, handleValidationMiddleware];
};
