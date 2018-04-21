import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  constructor() {
    super('Not found.', 404, 'NotFound');
  }
}
