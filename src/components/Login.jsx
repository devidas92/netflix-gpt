import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../utils/firebase"; // adjust path

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errors, setErrors] = useState({});
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const reTypePass = useRef(null);
  const toggleSignInForm = () => {
    setErrors({});
    setSignInForm((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   validate the form data
    const validationErrors = checkValidData(
      isSignInForm,
      email.current.value,
      password.current.value,
      userName?.current?.value,
      reTypePass?.current?.value
    );
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length !== 0) return;
    // sign in /sign up
    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value.trim(),
        password.current.value.trim()
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          setErrors({
            ApiError: error.message,
          });
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value.trim(),
        password.current.value.trim()
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          setErrors({
            ApiError: error.message,
          });
        });
    }
  };

  return (
    <div className="relative h-screen w-full">
      {" "}
      <Header />
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
        alt="Background image"
      />
      <div className="flex justify-center items-center h-full px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-black/80 text-white p-8 rounded-lg w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-semibold text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <div>
              {" "}
              <input
                type="text"
                ref={userName}
                placeholder="User Name"
                className="w-full p-3 rounded border border-gray-400 bg-transparent focus:outline-none"
              />
              {errors.userName && (
                <p className="text-red-600 text-sm mt-1">{errors.userName}</p>
              )}
            </div>
          )}
          <div>
            <input
              type="text"
              ref={email}
              placeholder="Email Address"
              className="w-full p-3 rounded border border-gray-400 bg-transparent focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="w-full p-3 rounded border border-gray-400 bg-transparent focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          {!isSignInForm && (
            <div>
              <input
                type="password"
                placeholder="Re-Type Password"
                className="w-full p-3 rounded border border-gray-400 bg-transparent focus:outline-none"
                ref={reTypePass}
              />
              {errors.reTypePassword && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.reTypePassword}
                </p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold cursor-pointer"
          >
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          <p className="text-center text-sm text-gray-300">
            {isSignInForm ? `New to Netflix? ` : "Already Have Account? - "}
            <span
              onClick={toggleSignInForm}
              className="text-white underline cursor-pointer"
            >
              {isSignInForm ? "Sign up now" : "Sign In Now"}
            </span>
          </p>

          {errors.ApiError && (
            <p className="text-red-600 text-sm mt-1">{errors.ApiError}</p>
          )}
        </form>{" "}
      </div>
    </div>
  );
};

export default Login;
