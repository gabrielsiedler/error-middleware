export declare abstract class CustomError extends Error {
    __proto__: Error;
    _message: string;
    _code: number;
    _type: string;
    constructor(message: string, code: number, type: string);
    readonly code: number;
    readonly type: string;
    readonly message: string;
    output(): {
        code: number;
        type: string;
        error: any;
    };
}
