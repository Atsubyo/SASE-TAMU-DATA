class UserNotRegisteredError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = "UserNotRegisteredError";
  }
}

export default UserNotRegisteredError;
