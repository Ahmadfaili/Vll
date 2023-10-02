import React from "react"
import { FaGrinAlt,FaPlus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { IoSendSharp } from "react-icons/io5";
export default function MassageSend() {
  return (
    <>
      <div className="massage_send shadow-[0_-2px_10px_-3px_rgba(0,0,0,0.3);]  w-full flex-row  flex items-center justify-center py-3 px-5">
        <div className=" basis-[7%] flex items-center justify-start ">
            <HiOutlineFaceSmile className="text-4xl  mr-3 text-slate-500"/>
            <FiPlus className="text-3xl text-slate-500"/>    
          
        </div>
        <div className="input_msg flex  grow items-center justify-center basis-[87%]
        overflow-hidden ">
          <input className="py-2 px-4 text-xl overflow-hidden bg-white
           w-full outline-none border rounded-md placeholder:text-lg " placeholder="Type a massage" />
        </div>
        <div className="send   basis-[5%] grow-0 h-7 flex items-center justify-center">
          <IoSendSharp className="text-3xl text-slate-500" />
        </div>
      </div>
    </>
  )
}
