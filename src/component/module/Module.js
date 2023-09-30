import React from 'react'

export default function Module
(props) {

    
  return (
    <>
    
       <div className={`module flex bg-white absolute top-[54px] right-[30px] rounded-lg
       overflow-hidden
       bodere
       shadow-[0px_-3px_5px_0px_#90cdf4]
       
       border-b-zinc-800 
       ${props.open?"transition-all duration-200 opacity-200":"opacity-0"}
       
       `}>
        <div className='module_list_item flex '>
            <ul className='flex flex-col  justify-end my-3 '>
                <li className='flex py-3 pl-4 pr-[100px] hover:bg-slate-200 cursor-pointer'>
                    <p className='text-lg'>profile</p>
                </li>
                
                <li className='flex py-3 pl-4 pr-[100px] hover:bg-slate-200 cursor-pointer'>
                    <p className='text-lg'>logout</p>
                </li>
                <li className='flex py-3 pl-4 pr-[100px] hover:bg-slate-200 cursor-pointer'>
                    <p className='text-lg'>settings</p>
                </li>
            </ul>


        </div>
        
        </div> 
    
    </>
  )
}
