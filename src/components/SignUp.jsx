import React from 'react'

const SignUp = ({ closeSignUp }) => {
  return (
    <>
        <div className="sign-up-component absolute h-510 w-300 bg-mainBackground/20 backdrop-blur rounded-sm left-0 right-0 ml-auto mr-auto">
            <div className='flex flex-col justify-center w-250 mt-20 ml-4 mr-4 '>
                <label htmlFor="userName" className='font-bold'>User Name</label>
                <input type="text" name='userName' className='border border-current'/>
                <label htmlFor="email" className='font-bold mt-2.5'>Email</label>
                <input type="email" name='email' className='border border-current'/>
                <label htmlFor="password" className='font-bold mt-2.5'>Password</label>
                <input type="text" name='password' className='border border-current'/>
            </div>
            
            <button className='mr-14 bg-btnColor h-30 w-100 rounded-sm mt-5 mb-5 cursor-pointer'
          onClick={() => {closeSignUp(false)}}>Sign up</button>
        </div>
    </>
  )
}

export default SignUp