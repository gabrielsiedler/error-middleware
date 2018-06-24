import { CustomError } from '../custom-error/custom-error';

export class ForbiddenError extends CustomError {
  constructor(message: any = 'Forbidden.') {
    super(message, 403, 'Forbidden');
  }
}
