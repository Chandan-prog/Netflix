import { useRef, useState } from "react";
import Header from "./Header";

import { checkValidData } from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

export default function Login() {
  const [showSignIn, setShowSignIn] = useState(true);

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const [err, setErr] = useState(null);

  const toggleSignInForm = () => {
    setShowSignIn(!showSignIn);
  };

  const loginHandler = (ev) => {
    //validate the fields
    ev.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErr(message);

    if (message !== null) return;

    if (!showSignIn) {
      //signup form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorCode + " - " + errorMessage);
        });
    } else {
      //sign in form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErr(errorCode + " - " + errorMessage);
        });
    }
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
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {err !== null && (
          <p className="text-red-700 font-bold text-lg py-2">{err}</p>
        )}
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={loginHandler}
        >
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
