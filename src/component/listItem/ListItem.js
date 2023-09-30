import React from 'react'

import img from '../../assets/image/Space.jpg';
/* const ListItem=[{id:1,image:"",userName:"Vll",time:"00:00",lastMassage:"live"},
{id:2,image:"",userName:"Am",time:"00:00",lastMassage:"live to "},
{id:2,image:"",userName:"ne",time:"00:00",lastMassage:"live to n "}]; */
export default function ListItem() {
  return (
    
    <div className='item_chat flex flex-row '>
        <div className='img_item bg-slate-100 flex items-center justify-center ' >
            <img src={img} className='w-[70px] h-[70px] rounded-full '/>
        </div>
        <div className='main_item '>
            <div className='user_name_time flex flex-row-reverse justify-between'>
                <div className='time'>
                    <p>00:00</p>
                </div>
                <div className='user_name'>
                    <p className='text-xl text-cyan-800'>Vll</p>
                </div>
                

            </div>
            <div className='lastMassag'>
                <p className='text-lg text-cyan-400'>خر قلبت </p>
            </div>
            
        </div>
    </div>


  )
}
