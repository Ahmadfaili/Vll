import React from 'react'
import HeaderChat from '../headerChat/HeaderChat';
import MassagesChat from '../massagesChat/MassagesChat';
import MassageSend from '../massageSend/MassageSend';

export default function Main() {
  return (
    <>
       <div className='main w-[70%] h-[100%] mobile:hidden overflow-hidden flex flex-col mobile:w-[100%] tablet:w-[65%]'> 
       
        <HeaderChat/>
        <MassagesChat/> 
        <MassageSend/> 
       </div> 
    </>
  )
}
