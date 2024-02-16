import { useState } from "react";
import Header from "./Header";

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(true);
  const toggleSignInForm = () => {
    setShowSignIn(!showSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg img"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80 text-white rounded-lg">
        <h1 className="text-white text-4xl py-4">
          {showSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!showSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
          {showSignIn ? "Sign in" : "Sign up"}
        </button>
        {showSignIn ? (
          <p
            className="py-4 cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            New to netflix? Sign up now.
          </p>
        ) : (
            <p
            className="py-4 cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            Already have an account? Sign in now.
          </p>
        )}
      </form>
    </div>
  );
}
