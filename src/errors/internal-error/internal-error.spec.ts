import { BaseError } from '../base-error/base-error'
import { InternalError } from './internal-error'

const DEFAULT_INTERNAL_MESSAGE = 'An internal error occurred.'

describe('InternalError', () => {
  describe('when object is created with default args', () => {
    it('is instance of BaseError', () => {
      const error = new InternalError()

      expect(error instanceof BaseError).toBeTruthy()
    })

    it('is instance of InternalError', () => {
      const error = new InternalError()

      expect(error instanceof InternalError).toBeTruthy()
    })

    describe('when output is called', () => {
      it('returns default error and code', () => {
        const error = new InternalError()

        const output = error.output()

        expect(output.code).toEqual(500)
        expect(output.error).toEqual(DEFAULT_INTERNAL_MESSAGE)
      })
    })
  })

  describe('when object is created with custom args', () => {
    describe('when output is called', () => {
      it('does not return custom error', () => {
        const error = new InternalError('Custom message.')

        const output = error.output()

        expect(output.error).toEqual(DEFAULT_INTERNAL_MESSAGE)
      })
    })
  })
})
