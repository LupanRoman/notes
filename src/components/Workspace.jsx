import React from 'react';
import folderIcon from '../assets/folderIcon.png';
import addFolderIcon from '../assets/addFolderIcon.png';
import { useState } from 'react';
import AddDrawer from './AddDrawer';

const Workspace = () => {

    const [createFolder, setCreateFolder] = useState(false)


  return (
    <>
        <div className='h-screen flex flex-col justify-between'>
            <div className='flex flex-row justify-between mt-6'>
                <div className='ml-6'>
                    <h6 className='text-md font-medium'>Good morning,</h6>
                    <p className='text-lg font-semiBold'>Roman</p>
                </div>

                <div className='mr-6 text-right'>
                    <p className='text-md font-semiBold'>23C</p>
                    <p className='text-md font-semiBold'>sunny</p>
                </div>
            </div>

            <div className='h-full mt-4'>
                <h5 className='ml-6 text-md font-semiBold'>Drawers</h5>
                <div className='ml-6 mr-6'>
                    <ul id='drawers-list' className=' drawer-box flex flex-col justify-center items-center '>
                        {/* <li>
                                <img src={folderIcon} alt="" />
                            <div>
                                <h5>Home Tasks</h5>
                                <p>3 Notes</p>
                            </div>
                        </li>
                        <li>
                                <img src={folderIcon} alt="" />
                            <div>
                                <h5>Work Stuff</h5>
                                <p>7 Notes</p>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>

            <div>
                <div className='absolute bottom-5 right-5 w-10 h-10 rounded-full bg-elementsBg items-center text-center flex justify-center'>
                    <button onClick={() => {setCreateFolder(true)}}
                    className=' font-semiBold cursor-pointer'><img src={addFolderIcon} alt=""  className='h-7'/></button>
                </div>
            </div>

            { createFolder && <AddDrawer closeDrawer={() => {setCreateFolder(false)}} /> }


        </div>
    </>
  )
}

export default Workspace