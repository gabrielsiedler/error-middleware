import { BaseError } from '../base-error/base-error'

export class InternalError extends BaseError {
  constructor(error?: any) {
    // tslint:disable-next-line:no-console
    console.error('Internal error: ', error)
    super('An internal error occurred.', 500, 'InternalError')
  }
}
