export interface Output {
  code: number
  error: any
  type: string
}

export abstract class CustomError extends Error {
  public message: string
  public code: number
  public type: string

  constructor(message = '', code = 400, type = 'CustomError') {
    super()

    this.message = message
    this.code = code
    this.type = type
  }

  output() {
    const output: Output = {
      code: this.code,
      error: undefined,
      type: this.type,
    }

    if (this.message) {
      output.error = this.message
    }

    return output
  }
}
