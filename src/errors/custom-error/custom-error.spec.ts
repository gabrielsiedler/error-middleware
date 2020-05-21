import { BaseError } from '../base-error'
import { CustomError } from './custom-error'

describe('CustomError', () => {
  describe('when object is created with default args', () => {
    it('is instance of BaseError', () => {
      const error = new CustomError()

      expect(error instanceof BaseError).toBeTruthy()
    })

    it('is instance of CustomError', () => {
      const error = new CustomError()

      expect(error instanceof CustomError).toBeTruthy()
    })

    describe('when output is called', () => {
      it('returns default error, code and type', () => {
        const error = new CustomError()

        const output = error.output()

        expect(output.code).toEqual(400)
        expect(output.error).toEqual('Error.')
        expect(output.type).toEqual('CustomError')
      })
    })
  })

  describe('when object is created with custom args', () => {
    describe('when output is called', () => {
      it('returns custom error', () => {
        const error = new CustomError('Custom message.', 406, 'NotJava')

        const output = error.output()

        expect(output.code).toEqual(406)
        expect(output.error).toEqual('Custom message.')
        expect(output.type).toEqual('NotJava')
      })

      it('returns custom error type', () => {
        const error = new CustomError({ myError: { deep: true, more: [null, 'some'] } })

        const output = error.output()

        expect(output.error).toEqual({ myError: { deep: true, more: [null, 'some'] } })
      })
    })
  })
})
