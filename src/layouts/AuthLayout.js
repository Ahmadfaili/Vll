import React from 'react'
import { Outlet } from 'react-router-dom'
export default function AuthLayout() {
  return (
    <>
        <div className='w-screen h-screen   flex flex-col justify-center items-center'>
        {/* <div className='w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 '></div>
        <div className='w-40 h-60 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 '></div> */}
          <div>
              <h1 className='text-9xl text-transparent mobile:text-8xl
               bg-clip-text bg-gradient-to-r
                from-purple-400 to-pink-600 font-sans
                drop-shadow-[2px_2px_rgba(0,0,0,0.2)]
                uppercase
                '>VII Web Chat</h1>
          </div>
        <Outlet/>
        
        
    </div>

    
    </>
  )
}
