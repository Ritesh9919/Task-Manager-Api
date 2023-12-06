import { CustomApiError } from "../errors/custom_error.js";

export const errorHandlerMiddleware = (err, req, res, next)=> {
    if(err instanceof CustomApiError) {
        return res.status(err.statusCode).json({msg:err.message});
    }
    return res.status(500).json({msg:'Something went wrong! Please try again later'});
}