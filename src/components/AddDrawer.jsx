import React, { useContext } from 'react';
import { StateContext } from '../lib/StateContext';


const AddDrawer = ({ closeDrawer }) => {

  const { addTitle } = useContext(StateContext);

  const addDrawerWrapper = () => {
    {addTitle()}
    {closeDrawer()}
  }

  return (
    <>
        <div className='h-screen w-full absolute bg-mainBackground backdrop-blur-md '>
            <div className='flex flex-col justify-center items-center'>
              <h4 className='mt-20 font-semiBold text-xl'>Add new drawer</h4>
                <form action="" className='flex flex-col mt-32'>
                    <label htmlFor="" className='font-semiBold text-lg'>Title</label>
                    <input id='drawerTitle' type="text" className='w-inputW h-inputH rounded-sm bg-elementsBg outline-none text-lg indent-1 ' />
                </form>
                <div className='flex mt-9 w-full justify-between'>
                    <button id='createDrawer' onClick={addDrawerWrapper} 
                    className='ml-20 bg-elementsBg h-btnH w-btnW rounded-sm font-semiBold text-md cursor-pointer'>Save</button>
                    <button onClick={closeDrawer} className='mr-20 bg-elementsBg h-btnH w-btnW rounded-sm font-semiBold text-md cursor-pointer'>Dismiss</button>
                </div> 
            </div>
        </div>
    </>
  )
}

export default AddDrawer