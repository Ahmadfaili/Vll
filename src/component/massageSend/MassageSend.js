import React from "react"

import {FiPlus} from "react-icons/fi"
import {HiOutlineFaceSmile} from "react-icons/hi2"
import {IoSendSharp} from "react-icons/io5"
export default function MassageSend() {
  return (
    <>
      <div
        className="massage_send shadow-[0_-2px_10px_-3px_rgba(0,0,0,0.3);]  
      w-full "
      >
        <div className="flex-row h-full flex items-center justify-center  px-5 mobile:px-2 tablet:px-3">
          <div className=" flex items-center justify-start pr-2 ">
            <HiOutlineFaceSmile
              className="text-4xl mobile:text-[26px] tablet:text-[28px]  mr-3 mobile:mr-1 tablet:mr-2
           text-slate-500"
            />
            <FiPlus className="text-3xl mobile:text-[24px] tablet:text-[26px] text-slate-500" />
          </div>
          <div
            className="input_msg flex  grow items-center justify-center
        overflow-hidden "
          >
            <input
              className="py-2 px-4 mobile:py-2 mobile:px-1 mobile:text-sm tablet:py-2 tablet:px-3 tablet:text-sm 
            text-xl overflow-hidden bg-white
           w-full outline-none border rounded-md placeholder:text-lg 
           mobile:placeholder:text-sm tablet:placeholder:text-base "
              placeholder="Type a massage"
            />
          </div>
          <div className="send flex items-center justify-center p-3 pr-0">
            <IoSendSharp className="text-4xl mobile:text-2xl tablet:text-[26px] text-slate-500" />
          </div>
        </div>
      </div>
    </>
  )
}
