import { CustomError } from '../custom-error/custom-error'
import { ForbiddenError } from './forbidden-error'

describe('ForbiddenError', () => {
  describe('when object is created with default args', () => {
    it('is instance of CustomError', () => {
      const error = new ForbiddenError()

      expect(error instanceof CustomError).toBeTruthy()
    })

    it('is instance of ForbiddenError', () => {
      const error = new ForbiddenError()

      expect(error instanceof ForbiddenError).toBeTruthy()
    })

    describe('when output is called', () => {
      it('returns default error and code', () => {
        const error = new ForbiddenError()

        const output = error.output()

        expect(output.code).toEqual(403)
        expect(output.error).toEqual('Forbidden.')
      })
    })
  })

  describe('when object is created with custom args', () => {
    describe('when output is called', () => {
      it('returns custom error', () => {
        const error = new ForbiddenError('Custom message.')

        const output = error.output()

        expect(output.error).toEqual('Custom message.')
      })

      it('returns custom error type', () => {
        const error = new ForbiddenError({ myError: { deep: true, more: [null, 'some'] } })

        const output = error.output()

        expect(output.error).toEqual({ myError: { deep: true, more: [null, 'some'] } })
      })
    })
  })
})
