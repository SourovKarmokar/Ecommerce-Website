import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async (event) =>{
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      
      {/* Title */}
      <div className='inline-flex items-center gap-2 mb-4 mt-6'>
        <p className='font-secendary text-3xl font-semibold'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {/* Name field only in signup */}
      {currentState === 'Sign up' && (
        <input 
          type="text" 
          className='w-full px-3 py-2 border border-gray-800 rounded' 
          placeholder='Name' 
          required 
        />
      )}

      {/* Email & Password */}
      <input 
        type="email" 
        className='w-full px-3 py-2 border border-gray-800 rounded' 
        placeholder='Email' 
        required 
      />
      <input 
        type="password" 
        className='w-full px-3 py-2 border border-gray-800 rounded' 
        placeholder='Password' 
        required 
      />

      {/* Forgot password (only in login) */}
      {currentState === 'Login' && (
        <div className='w-full flex justify-end text-sm text-blue-600 cursor-pointer'>
          <p>Forgot your password?</p>
        </div>
      )}

      {/* Submit button */}
      <button 
        type="submit" 
        className='w-full bg-black text-white py-2 rounded mt-2 hover:bg-gray-800 transition'>
        {currentState === 'Login' ? 'Login' : 'Sign Up'}
      </button>

      {/* Toggle option */}
      <div className='mt-3 text-sm'>
        {currentState === 'Login' ? (
          <p>
            Don’t have an account?{" "}
            <span 
              onClick={() => setCurrentState('Sign up')} 
              className='text-blue-600 cursor-pointer hover:underline'>
              Create one
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span 
              onClick={() => setCurrentState('Login')} 
              className='text-blue-600 cursor-pointer hover:underline'>
              Login here
            </span>
          </p>
        )}
      </div>
    </form>
  )
}

export default Login;
