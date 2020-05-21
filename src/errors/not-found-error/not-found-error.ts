import { BaseError } from '../base-error/base-error'

export class NotFoundError extends BaseError {
  constructor(message: any = 'Not found.') {
    super(message, 404, 'NotFound')
  }
}
