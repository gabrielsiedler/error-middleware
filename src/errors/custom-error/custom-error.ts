import { BaseError } from '../base-error/base-error'

export class CustomError extends BaseError {
  constructor(message: any = 'Error.', code: Number = 400, type: string = 'Error') {
    super(message, code, type)
  }
}
