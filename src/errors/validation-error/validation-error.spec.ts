import { CustomError } from '../custom-error';
import { ValidationError } from './validation-error';

describe('ValidationError', () => {
  describe('when object is created with default args', () => {
    it('is instance of CustomError', () => {
      const error = new ValidationError();

      expect(error instanceof CustomError).toBeTruthy();
    });

    it('is instance of ValidationError', () => {
      const error = new ValidationError();

      expect(error instanceof ValidationError).toBeTruthy();
    });

    describe('when output is called', () => {
      it('returns default error and code', () => {
        const error = new ValidationError();

        const output = error.output();

        expect(output.code).toEqual(400);
        expect(output.error).toEqual('Validation error.');
      });
    });
  });

  describe('when object is created with custom args', () => {
    describe('when output is called', () => {
      it('returns custom error', () => {
        const error = new ValidationError('Custom message.');

        const output = error.output();

        expect(output.error).toEqual('Custom message.');
      });

      it('returns custom error type', () => {
        const error = new ValidationError({ myError: { deep: true, more: [null, 'some']}});

        const output = error.output();

        expect(output.error).toEqual({ myError: { deep: true, more: [null, 'some']}});
      });
    });
  });
});
