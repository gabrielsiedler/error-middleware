import { CustomError } from '../custom-error/custom-error'

export class InternalError extends CustomError {
  constructor(error?: any) {
    // tslint:disable-next-line:no-console
    console.error('Internal error: ', error)
    super('An internal error occurred.', 500, 'InternalError')
  }
}
