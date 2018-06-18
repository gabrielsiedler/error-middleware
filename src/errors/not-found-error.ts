import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  constructor(message: string = 'Not found.') {
    super(message, 404, 'NotFound');
  }
}
