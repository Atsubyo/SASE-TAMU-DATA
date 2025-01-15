class UserNotFoundError extends Error {
  constructor(message: string, public code: number) {
    super(message);
    this.name = "UserNotFoundError";
  }
}

export default UserNotFoundError;
