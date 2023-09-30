import React from 'react'

export default function Login() {
  return (
    <div className='flex absolute  m-auto w-[26.9rem]' >
        <div className='z-50 flex 
          bg-white/[0.4] rounded-lg border-[1px]
            backdrop-blur-[5px] 
            pt-3 px-5 py-3 pb-3 w-full flex-col
        ' > 
            <header className='py-4'>
              <h1 className='text-2xl font-normal text-zinc-400'>LogIn</h1>
            </header>
            <content>
            <div className='flex w-full flex-col space-y-7'>
              <div className=' items-start text-left flex flex-col w-full '>
              
                <span className='black text-lg text-[#3e3d3d] '>Email</span>
                <input type='text'  className='text w-full  px-2 
                py-2 pt-3 pb-3 mt-2 
                bg-transparent
                border
                rounded-lg
                border-slate-500
                focus:outline-none 
                focus:border-sky-500 focus:ring-1 focus:border focus:ring-sky-500
                focus:visible:none
                ' placeholder='Email'/>
              
              </div>
              <div className=' items-start text-left flex w-full flex-col '>
              
                <span className='black text-lg '>Password</span>
                <input type='password'  className='text w-full bg-slate-500 px-2 py-2 pt-3 pb-3 mt-2' />
              
              </div>
              <div className='flex flex-row justify-between '>
                <a href='#' className='text-base text-[#3e3d3d]' >sinIn</a>
                <a href='#' className='text-base text-[#3e3d3d]'>forgetPassword?</a>

              </div>
              <div className='flex justify-center items-center  '>
                <button className='btn 
                 bg-blue-600 border rounded-lg text-base hover:bg-blue-700 text-white pt-3 pb-3 w-2/3'>Login</button>
              </div>
            </div>
            </content>
        </div>
    </div>
  )
}
