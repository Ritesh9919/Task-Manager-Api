

export class CustomApiError extends Error{
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}