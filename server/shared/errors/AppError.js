class AppError extends Error{
    constructor(error,message,statusCode,code){
        this.error=error,
        this.message=message,
        this.statusCode=statusCode,
        this.code=code
    }
    
}