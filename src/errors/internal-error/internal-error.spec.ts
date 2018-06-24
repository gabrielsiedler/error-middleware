import { CustomError } from '../custom-error/custom-error';
import { InternalError } from './internal-error';

const DEFAULT_INTERNAL_MESSAGE = 'An error occurred. Please try again later.';

describe('InternalError', () => {
  describe('when object is created with default args', () => {
    it('is instance of CustomError', () => {
      const error = new InternalError();

      expect(error instanceof CustomError).toBeTruthy();
    });

    it('is instance of InternalError', () => {
      const error = new InternalError();

      expect(error instanceof InternalError).toBeTruthy();
    });

    describe('when output is called', () => {
      it('returns default error and code', () => {
        const error = new InternalError();

        const output = error.output();

        expect(output.code).toEqual(500);
        expect(output.error).toEqual(DEFAULT_INTERNAL_MESSAGE);
      });
    });
  });

  describe('when object is created with custom args', () => {
    describe('when output is called', () => {
      it('does not return custom error', () => {
        const error = new InternalError('Custom message.');

        const output = error.output();

        expect(output.error).toEqual(DEFAULT_INTERNAL_MESSAGE);
      });
    });
  });
});
