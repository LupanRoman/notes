import './App.css';
import React, { useState } from 'react';
import SignUp from './components/SignUp';

function App() {

  const [openSignUp, setOpenSignUp] = useState(false)

  return (
    <>
      <div>
        <h1 className='font-bold text-2xl text-center mt-3'>Pro Notes</h1>
        { openSignUp && <SignUp closeSignUp={setOpenSignUp} />}
        <div className="btns flex w-full justify-between">
          <button className='ml-14 bg-btnColor h-30 w-100 rounded-sm mt-5 mb-5 cursor-pointer'>Log In</button>
          <button className='mr-14 bg-btnColor h-30 w-100 rounded-sm mt-5 mb-5 cursor-pointer'
          onClick={() => {setOpenSignUp(true)}}>Sign up</button>
        </div>

        

        <section className='flex flex-col text-center items-center'>

        <div className='mt-40px'>
          <h4 className='font-bold '>Simple and easy to use</h4>
          <hr className='text-btnColor'  />
          <p className='w-250 mt-2'>No unnecessary distractions to steal your focus, just the right tools to make your notes the best.</p>
        </div>

        <div className='mt-8'>
          <h4 className='font-bold '>Modern and minimal design</h4>
          <hr className='text-btnColor'  />
          <p className='w-250 mt-2'>Easy to use an simple design make the most pleasant user experience so that is we want to achieve.</p>
        </div>

        <div className='mt-8'>
          <h4 className='font-bold '>Be organized</h4>
          <hr className='text-btnColor'  />
          <p className='w-250 mt-2'>Easy to understand and a good folder structure to organize your notes at a next level.</p>
        </div>


        </section>

        <div className="btns flex w-full justify-between mt-14">
          <button className='ml-14 bg-btnColor h-30 w-100 rounded-sm mt-5 mb-5 cursor-pointer'>Log In</button>
          <button className='mr-14 bg-btnColor h-30 w-100 rounded-sm mt-5 mb-5 cursor-pointer'>Sign up</button>
        </div>


      </div>
    </>
  );
}

export default App;
