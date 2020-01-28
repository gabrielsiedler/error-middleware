import { CustomError } from '../custom-error/custom-error'

export class ValidationError extends CustomError {
  constructor(message: any = 'Validation error.') {
    super(message, 400, 'Validation')
  }
}
