import { BaseError } from '../base-error'

export class CustomError extends BaseError {
  constructor(message: any = 'Error.', code: Number = 400, type: string = 'CustomError') {
    super(message, code, type)
  }
}
