import { CustomError } from '../custom-error';

export class InternalError extends CustomError {
  constructor(error?: any) {
    // tslint:disable-next-line:no-console
    console.error('Internal error: ', error);
    super('An error occurred. Please try again later.', 500, 'InternalError');
  }
}
