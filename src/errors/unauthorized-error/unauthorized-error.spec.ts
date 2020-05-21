import { BaseError } from '../base-error'
import { UnauthorizedError } from './unauthorized-error'

describe('UnauthorizedError', () => {
  describe('when object is created with default args', () => {
    it('is instance of BaseError', () => {
      const error = new UnauthorizedError()

      expect(error instanceof BaseError).toBeTruthy()
    })

    it('is instance of UnauthorizedError', () => {
      const error = new UnauthorizedError()

      expect(error instanceof UnauthorizedError).toBeTruthy()
    })

    describe('when output is called', () => {
      it('returns default error and code', () => {
        const error = new UnauthorizedError()

        const output = error.output()

        expect(output.code).toEqual(401)
        expect(output.error).toEqual('Unauthorized.')
      })
    })
  })

  describe('when object is created with custom args', () => {
    describe('when output is called', () => {
      it('returns custom error', () => {
        const error = new UnauthorizedError('Custom message.')

        const output = error.output()

        expect(output.error).toEqual('Custom message.')
      })

      it('returns custom error type', () => {
        const error = new UnauthorizedError({ myError: { deep: true, more: [null, 'some'] } })

        const output = error.output()

        expect(output.error).toEqual({ myError: { deep: true, more: [null, 'some'] } })
      })
    })
  })
})
