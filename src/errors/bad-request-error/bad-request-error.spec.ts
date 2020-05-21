import { BaseError } from '../base-error/base-error'
import { BadRequestError } from './bad-request-error'

describe('BadRequestError', () => {
  describe('when object is created with default args', () => {
    it('is instance of BaseError', () => {
      const error = new BadRequestError()

      expect(error instanceof BaseError).toBeTruthy()
    })

    it('is instance of BadRequestError', () => {
      const error = new BadRequestError()

      expect(error instanceof BadRequestError).toBeTruthy()
    })

    describe('when output is called', () => {
      it('returns default error and code', () => {
        const error = new BadRequestError()

        const output = error.output()

        expect(output.code).toEqual(400)
        expect(output.error).toEqual('Bad request.')
      })
    })
  })

  describe('when object is created with custom args', () => {
    describe('when output is called', () => {
      it('returns custom error', () => {
        const error = new BadRequestError('Custom message.')

        const output = error.output()

        expect(output.error).toEqual('Custom message.')
      })

      it('returns custom error type', () => {
        const error = new BadRequestError({ myError: { deep: true, more: [null, 'some'] } })

        const output = error.output()

        expect(output.error).toEqual({ myError: { deep: true, more: [null, 'some'] } })
      })
    })
  })
})
