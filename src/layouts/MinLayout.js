import React from 'react'
import { Outlet } from 'react-router-dom'

export default function MinLayout() {
  return (
    <>
        <div className='flex w-screen h-screen min-h-[600px]
    bg-gradient-to-tr from-[#c373a1] from-20% via-[#919fdc]  to-[#61f6f0]
     overflow-hidden   relative dark:bg-gradient-to-r dark:from-slate-900 dark:to-indigo-900
    
    '>
      <div className='flex-nowrap justify-between flex w-full relative z-10'>
          <div className='flex justify-center items-start p-4'>
              <div className="w-[250px] h-[250px] bg-gradient-to-r from-[#dcafdc] to-[#e7dcf7] 
                              dark:bg-gradient-to-r dark:from-sky-800 dark:via-slate-600 dark:to-cyan-900
                              rounded-full shadow-lg "></div>
              </div>
        <div className='flex items-end -mb-[174px] -mr-[188px] '>
            <div className="w-[800px] h-[800px] bg-slate-200 rounded-full bg-gradient-to-tr from-20%
            from-[#adcfec]
            to-[#d0f1fa] shadow-lg  dark:bg-gradient-to-r dark:from-sky-800 dark:via-slate-600 dark:to-cyan-700"></div>
        </div>
      </div>


        {<Outlet/>}
      </div>
    </>
  )
}
