import React, { useRef, useState } from "react";
import { BG_URL } from "../utils/url";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errMessage, setErrMessage] = useState(null);

  const handleButtonClick = (event) => {
    event.preventDefault();
    setErrMessage(checkValidData(email.current.value, password.current.value));
    if (errMessage) return;
    if (!isSignIn) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign In lOGIC
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <div className="absolute w-full h-screen z-0">
        <img
          className="w-full h-full object-cover bg-center opacity-90"
          src={BG_URL}
          alt="Background"
        />
      </div>

      <Header />

      <form className="w-11/12 sm:w-8/12 md:w-4/12 lg:w-3/12 p-12 bg-black/80 absolute my-32 mx-auto right-0 left-0 z-10 text-white">
        <div className="font-semibold my-4 text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </div>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 rounded-lg border-1 w-full"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 rounded-lg border-1 w-full"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 border-1 rounded-lg w-full"
          ref={password}
        />

        <p className="text-red-500 text-lg py-4 font-semibold">
          {errMessage !== null && errMessage}
        </p>

        <button
          className="p-4 my-4 bg-red-500 text-white w-full rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </>
  );
};

export default Login;
