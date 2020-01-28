import { CustomError } from '../custom-error/custom-error'

export class UnauthorizedError extends CustomError {
  constructor(message: any = 'Unauthorized.') {
    super(message, 401, 'Unauthorized')
  }
}
