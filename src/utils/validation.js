export const checkValidData = (
  isSignInForm,
  email,
  password,
  userName,
  reTypePassword
) => {
  const errors = {};

  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();
  const trimmedUserName = userName?.trim();
  const trimmedReTypePassword = reTypePassword?.trim();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  if (!emailRegex.test(trimmedEmail)) {
    errors.email = "Email is not valid";
  }

    if (!isSignInForm && trimmedUserName.length < 3) {
    errors.userName = "Username must be at least 3 characters";
  }

  if (!passwordRegex.test(trimmedPassword)) {
    errors.password =
      "Password must be 8–15 chars & include uppercase, lowercase, digit & symbol";
  }

  if (!isSignInForm && trimmedPassword !== trimmedReTypePassword) {
    errors.reTypePassword = "Passwords do not match";
  }

  return errors;
};
