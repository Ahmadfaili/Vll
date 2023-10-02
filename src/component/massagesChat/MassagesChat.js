import React from 'react'

import Massage from '../massage/Massage'

export default function MassagesChat(props) {
  return (
    <>

        <div className='massagesChat flex w-full h-[81%] flex-col overflow-hidden
          ' > 
          
            <div className=' scrollbar scrollbar-w-2 scrollbar-thumb-rounded-2xl overflow-auto
             flex-col scrollbar-thumb-[#838383cb] scrollbar-track-transparent 
              flex h-[100%] pt-3 px-5 '>
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
