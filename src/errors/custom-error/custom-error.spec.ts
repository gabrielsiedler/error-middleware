import { CustomError } from '../custom-error/custom-error'

class TestingError extends CustomError {
  constructor(message: any = 'Error for testing.') {
    super(message, 418, `I'm a teapot.`)
  }
}

describe('ForbiddenError', () => {
  describe('when object is created with default args', () => {
    it('custom class is instance of CustomError', () => {
      const error = new TestingError()

      expect(error instanceof CustomError).toBeTruthy()
    })

    describe('when output is called', () => {
      it('returns default error and code', () => {
        const error = new TestingError()

        const output = error.output()

        expect(output.code).toEqual(418)
        expect(output.type).toEqual(`I'm a teapot.`)
        expect(output.error).toEqual('Error for testing.')
      })
    })
  })

  describe('when object is created with custom args', () => {
    describe('when output is called', () => {
      it('returns custom error', () => {
        const error = new TestingError('Custom message.')

        const output = error.output()

        expect(output.error).toEqual('Custom message.')
      })

      it('returns custom error type', () => {
        const error = new TestingError({ myError: { deep: true, more: [null, 'some'] } })

        const output = error.output()

        expect(output.error).toEqual({ myError: { deep: true, more: [null, 'some'] } })
      })
    })
  })
})
