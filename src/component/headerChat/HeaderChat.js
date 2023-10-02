import React,{useState} from 'react'
import image from '../../assets/image/Space.jpg';
import Module from "../module/Module";
import {FiMoreVertical} from "react-icons/fi"
export default function 
() {


        const [open, setOpen] = useState(false)

        const menu_handler = () => {
            setOpen(!open)
        }
  return (
    <>
        <div className="header_chat flex items-center justify-between py-4 px-4 
                         shadow-lg
            ">
            <div className='ima_profile_folowers'>
                <img src={image} alt='img_profile ' className='w-[50px] h-[50px] rounded-full '/>
            </div>
            <div
              className={`menu_profile ${
                open ? "bg-slate-200" : "bg-transparent"
              }
                    transition-all duration-200 
                    flex rounded-full  
                    items-center justify-center relative cursor-pointer`}
              onClick={menu_handler}
            >
              <FiMoreVertical className="text-xl mx-3 my-3" />
              {open ? <Module open /> : null}
            </div>    
        </div>
    
    </>
  )
}
