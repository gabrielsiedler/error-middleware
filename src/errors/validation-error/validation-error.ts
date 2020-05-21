import { BaseError } from '../base-error'

export class ValidationError extends BaseError {
  constructor(message: any = 'Validation error.') {
    super(message, 400, 'Validation')
  }
}
