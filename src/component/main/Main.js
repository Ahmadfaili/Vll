import React from 'react'
import HeaderChat from '../headerChat/HeaderChat';
import MassagesChat from '../massagesChat/MassagesChat';
import MassageSend from '../massageSend/MassageSend';

export default function Main() {
  return (
    <>
       <div className='main w-[70%] h-[100%]  overflow-hidden '> 
       
        <HeaderChat/>
        <MassagesChat/> 
        <MassageSend/> 
       </div> 
    </>
  )
}
