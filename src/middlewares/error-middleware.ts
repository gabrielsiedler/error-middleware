import * as Errors from '../errors';
import { CustomError } from '../errors/custom-error';
import { InternalError } from '../errors/internal-error';

const errorHandlingMiddleware = (err: any, req: any, res: any, next: any) => {
  const customErrors = Object.keys(Errors);

  if (customErrors.some(customError => err instanceof <any> customError)) {
    res.status(err.code).send(err.output());
    return;
  }

  console.error(err);
  const internalError = new InternalError();

  res.status(internalError.code).send(internalError.output());
};

export = errorHandlingMiddleware;
