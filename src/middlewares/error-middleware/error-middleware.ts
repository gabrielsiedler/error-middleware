import {
  BadRequestError,
  CustomError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from '../../errors'
import { InternalError } from '../../errors/internal-error'

export const errorHandlingMiddleware = (err: any, req: any, res: any, next: any) => {
  const middlewareErrors = [
    BadRequestError,
    CustomError,
    ForbiddenError,
    NotFoundError,
    UnauthorizedError,
    ValidationError,
  ]

  if (middlewareErrors.some((middlewareError) => err instanceof middlewareError)) {
    res.status(err.code).send(err.output())

    return
  }

  const internalError = new InternalError(err)

  res.status(internalError.code).send(internalError.output())
}
