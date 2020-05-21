import { BaseError } from '../base-error'

export class BadRequestError extends BaseError {
  constructor(message: any = 'Bad request.') {
    super(message, 400, 'BadRequest')
  }
}
