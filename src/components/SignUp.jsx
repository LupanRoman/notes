import React from 'react';
import { Link } from 'react-router-dom';




const LogIn = ({ closeSignUp }) => {
  return (
    <>
      <div className='absolute flex flex-col bg-mainBackground backdrop-blur-md h-full w-full justify-between items-center '>
        <h4 className='font-semiBold text-xl ml-auto mr-auto mt-10'>Sign up</h4>

        <div className='w-screen'> 
          <form action="" className='flex flex-col justify-between  ml-10 mr-10'>
            <label htmlFor="userName" className='font-semiBold text-xl '>User Name</label>
            <input type="text" name='userName' className='h-inputH bg-elementsBg rounded-sm outline-none indent-1 text-lg' />

            <label htmlFor="email" className='font-semiBold text-xl '>Email</label>
            <input type="email" name='email' className='h-inputH bg-elementsBg rounded-sm outline-none indent-1 text-lg'/>

            <label htmlFor="password" className='font-semiBold text-xl '>Password</label>
            <input type="password" name='password' className='h-inputH bg-elementsBg rounded-sm outline-none indent-1 text-lg'/>
          </form>
        </div>

        <div className='flex justify-between w-full mb-10'>
        <Link to='/workspace'>
        <button className='ml-14 bg-elementsBg h-btnH w-btnW rounded-sm font-semiBold text-md cursor-pointer'>Sign Up</button>
        </Link>
        
        
        <button onClick={() => {closeSignUp(false)}}
        className='mr-14 bg-elementsBg h-btnH w-btnW rounded-sm font-semiBold text-md cursor-pointer'>Dismiss</button>
        </div>

      </div>
    </>
  )
}

export default LogIn