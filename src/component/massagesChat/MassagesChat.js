import React from 'react'

import Massage from '../massage/Massage'

export default function MassagesChat(props) {
  return (
    <>

        <div className='massagesChat flex w-full flex-col overflow-hidden
          ' > 
          
            <div className=' scrollbar scrollbar-w-2 mobile:scrollbar-w-1 tablet:scrollbar-w-[5px]
             scrollbar-thumb-rounded-2xl overflow-auto
             flex-col scrollbar-thumb-[#838383cb] scrollbar-track-transparent 
              flex h-[100%] pt-3 px-5 mobile:pt-1 mobile:px-3 tablet:pt-1 tablet:px-3 dark:bg-[#111b21]/90 '>
                {/* aling_self */}
                <Massage msgRtl={"right"}/>
                <Massage msgRtl={"left"}/><Massage msgRtl={"right"}/>
                <Massage msgRtl={"left"}/><Massage msgRtl={"right"}/>
                <Massage msgRtl={"right"}/><Massage msgRtl={"right"} /><Massage msgRtl={"left"}/>
                <Massage msgRtl={"right"}/><Massage msgRtl={"left"}/><Massage msgRtl={"right"}/>
                <Massage msgRtl={"left"}/><Massage msgRtl={"right"}/><Massage msgRtl={"right"}/>
                <Massage msgRtl={"right"}/><Massage msgRtl={"right"}/><Massage msgRtl={"left"}/>
                <Massage msgRtl={"left"}/><Massage msgRtl={"left"}/><Massage msgRtl={"left"}/>
                <Massage msgRtl={"right"}/>
                
            </div>
                
            
            
        </div>
    
    </>
  )
}
