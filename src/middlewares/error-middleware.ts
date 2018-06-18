import { BadRequestError, ForbiddenError, NotFoundError, UnauthorizedError, ValidationError } from '../errors';
import { InternalError } from '../errors/internal-error';

const errorHandlingMiddleware = (err: any, req: any, res: any, next: any) => {
  const customErrors = [
    BadRequestError,
    ForbiddenError,
    NotFoundError,
    UnauthorizedError,
    ValidationError,
  ];

  if (customErrors.some((customError) => err instanceof customError)) {
    res.status(err.code).send(err.output());
    return;
  }

  const internalError = new InternalError(err);

  res.status(internalError.code).send(internalError.output());
};

export default errorHandlingMiddleware;
