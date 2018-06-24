import { CustomError } from '../custom-error';

export class BadRequestError extends CustomError {
  constructor(message: string = 'Bad request.') {
    super(message, 400, 'BadRequest');
  }
}
