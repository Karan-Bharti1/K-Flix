import React, { useState } from 'react';
import { BG_URL } from '../utils/url';
import Header from './Header';

const Login = () => {
    const [signUp,setSignUp]=useState(false)
  return (
    <>
      <div className="absolute w-full h-screen z-0 ">
        <img
          className="w-full h-full object-cover bg-center opacity-90"
          src={BG_URL}
          alt="Background"
        />
      </div>


      <Header />

      <form className='w-3/12 p-12 bg-black/80 absolute my-36 mx-auto right-0 left-0 z-10 text-white '>
        <div className='font-semibold my-4 text-3xl'>{signUp?"Sign Up": "Sign In"}</div>
        {!signUp && (
              <input
          type='text'
          placeholder='Full Name'
          className='p-4 my-3  rounded-lg border-1 w-full'
        />
        )}
        <input
          type='text'
          placeholder='Email Address'
          className='p-4 my-3  rounded-lg border-1 w-full'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-4 my-3 border-1 rounded-lg w-full'
        />
        <button className='p-4 my-4 bg-red-500 text-white w-full rounded-lg cursor-pointer'>
         {signUp?"Sign Up": "Sign In"}
        </button>
        <p>{signUp?"Already Registered?":"New To NETFLIX?"} <span className='text-gray-400 cursor-pointer hover:underline' onClick={()=>setSignUp(!signUp)}>{signUp?"Sign In ": "Sign Up "}Now</span> </p>
      </form>
    </>
  );
};

export default Login;
