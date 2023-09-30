import React from 'react';
import Sidbar from '../sidbar/Sidbar';
import Main from '../main/Main';
export default function Chat() {
  return (
    <>
    <div className='absolute flex  z-50 w-full h-full top-0 left-0 p-3
    right-0 bottom-0 items-center justify-center m-auto'>
            <div className='  flex  z-50 w-[94%] h-[92%] bg-white/[0.4] rounded-2xl border-[1px]
            border-white backdrop-blur-[5px] flex-row
            '>


                  <Sidbar/>
                  <Main/> 



            </div>
        </div>
    
    </>
  )
}
