import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm((prev) => !prev);
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
        <form className="bg-black/80 text-white p-8 rounded-lg w-full max-w-md space-y-4">
          <h2 className="text-2xl font-semibold text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="User Name"
              className="w-full p-3 rounded border border-gray-400 bg-transparent focus:outline-none"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-3 rounded border border-gray-400 bg-transparent focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded border border-gray-400 bg-transparent focus:outline-none"
          />
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Re-Type Password"
              className="w-full p-3 rounded border border-gray-400 bg-transparent focus:outline-none"
            />
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
        </form>{" "}
      </div>
    </div>
  );
};

export default Login;
