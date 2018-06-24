import { CustomError } from '../custom-error';
import { NotFoundError } from './not-found-error';

describe('NotFoundError', () => {
  describe('when object is created with default args', () => {
    it('is instance of CustomError', () => {
      const error = new NotFoundError();

      expect(error instanceof CustomError).toBeTruthy();
    });

    it('is instance of NotFoundError', () => {
      const error = new NotFoundError();

      expect(error instanceof NotFoundError).toBeTruthy();
    });

    describe('when output is called', () => {
      it('returns default error and code', () => {
        const error = new NotFoundError();

        const output = error.output();

        expect(output.code).toEqual(404);
        expect(output.error).toEqual('Not found.');
      });
    });
  });

  describe('when object is created with custom args', () => {
    describe('when output is called', () => {
      it('returns custom error', () => {
        const error = new NotFoundError('Custom message.');

        const output = error.output();

        expect(output.error).toEqual('Custom message.');
      });

      it('returns custom error type', () => {
        const error = new NotFoundError({ myError: { deep: true, more: [null, 'some']}});

        const output = error.output();

        expect(output.error).toEqual({ myError: { deep: true, more: [null, 'some']}});
      });
    });
  });
});
