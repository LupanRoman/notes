import './App.css';
import React, { useState } from 'react'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';


const App = () => {


  const [openSignUp, setOpenSignUp] = useState(false);
  const [openLogIn, setOpenLogIn] = useState(false)


  return (
    <>
    <div className='flex flex-col justify-between h-screen'>
      <h1 className='font-semiBold text-xl ml-auto mr-auto mt-10'>Pro Notes</h1>
      <div className='flex flex-col ml-12 mr-12 text-center h-full justify-around ' >
        
        <div>
          <h5 className='text-lg font-semiBold'>Simple and easy to use</h5>
          <hr className='border-0 h-1 bg-elementsBg rounded-sm'/>
          <p className='font-medium text-md'>No unnecessary distractions to steal your focus, just the right tools to make your notes the best.</p>
        </div>

        <div >
          <h5 className='text-lg font-semiBold'>Modern and minimal design</h5>
          <hr className='border-0 h-1 bg-elementsBg rounded-sm'/>
          <p className='font-medium text-md'>Easy to use, an simple design, the most pleasant user experience so that is we want to achieve.</p>
        </div>

        <div className='mb-4'>
          <h5 className='text-lg font-semiBold'>Be organized</h5>
          <hr className='border-0 h-1 bg-elementsBg rounded-sm'/>
          <p className='font-medium text-md'>Easy to understand and a good folder structure to organize your notes at a next level.</p>
        </div>

      </div>

      <div className='flex justify-between w-full mb-10  '>
      
        <button onClick={() => {setOpenLogIn(true)}}
        className='ml-14 bg-elementsBg h-btnH w-btnW rounded-sm font-semiBold text-md'>Log In</button>
        <button onClick={() => {setOpenSignUp(true)}}
        className='mr-14 bg-elementsBg h-btnH w-btnW rounded-sm font-semiBold text-md'>Sign Up</button>
    
      </div>

      {openSignUp && <SignUp closeSignUp={setOpenSignUp}/>}
      {openLogIn && <LogIn closeLogIn={setOpenLogIn}/>}
      

    </div>

    </>
  )
}

export default App
