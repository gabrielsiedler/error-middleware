export abstract class CustomError extends Error {
  public __proto__: Error;
  _message: string;
  _code: number;
  _type: string;

  constructor(message: string, code: number, type: string) {
    const trueProto = new.target.prototype;
    super();

    this.__proto__ = trueProto;

    this._message = message;
    this._code = code;
    this._type = type;
  }

  get code() {
    return this._code || 400;
  }

  get type() {
    return this._type || 'CustomError';
  }

  get message() {
    return this._message || '';
  }

  output(){
    const output: {
      code: number,
      type: string,
      error: any,
    } = {
      code: this.code,
      type: this.type,
      error: null,
    };

    if (this.message) {
      output.error = this.message;
    }

    return output;
  }
}
