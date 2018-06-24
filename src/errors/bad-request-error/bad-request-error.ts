import { CustomError } from '../custom-error';

export class BadRequestError extends CustomError {
  constructor(message: any = 'Bad request.') {
    super(message, 400, 'BadRequest');
  }
}
