export class ValidationError extends AppError {
  constructor(error,message) {
    super(error,message, 400, "VALIDATION_ERROR");
  }
}

export class NotFoundError extends AppError {
  constructor(error,message) {
    super(error,message, 404, "NOT_FOUND");
  }
}

export class ConflictError extends AppError {
  constructor(error,message) {
    super(error,message, 409, "CONFLICT");
  }
}

export class UnauthorizedError extends AppError {
  constructor(error,message) {
    super(error,message, 401, "UNAUTHORIZED");
  }
}

export class ForbiddenError extends AppError {
  constructor(error,message) {
    super(error,message, 403, "FORBIDDEN");
  }
}