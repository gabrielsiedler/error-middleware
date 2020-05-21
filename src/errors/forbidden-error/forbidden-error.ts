import { BaseError } from '../base-error'

export class ForbiddenError extends BaseError {
  constructor(message: any = 'Forbidden.') {
    super(message, 403, 'Forbidden')
  }
}
