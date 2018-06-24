import { CustomError } from '../custom-error/custom-error';

export class NotFoundError extends CustomError {
  constructor(message: any = 'Not found.') {
    super(message, 404, 'NotFound');
  }
}
