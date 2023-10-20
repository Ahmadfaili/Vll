import React from "react"
import Sidbar from "../sidbar/Sidbar"
import Main from "../main/Main"
export default function Chat() {
  return (
    <>
      <div
        className="absolute flex  z-50 w-full h-full top-0 left-0 p-3
    right-0 bottom-0 items-center justify-center m-auto"
      >
        <div
          className="  flex  z-50 w-[94%] h-[92%] mobile:h-[98%] mobile:w-[100%]
             bg-white/[0.4] rounded-2xl border-[1px] tablet:w-[98%] tablet:h-[98%]
            border-white backdrop-blur-[5px] flex-row overflow-hidden 
            dark:border-[rgba(26,30,32,0.5)]  
            "
        >
          <Sidbar />
          <Main />
        </div>
      </div>
    </>
  )
}
