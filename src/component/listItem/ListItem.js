import React from "react"

import img from "../../assets/image/Space.jpg"
/* const ListItem=[{id:1,image:"",userName:"Vll",time:"00:00",lastMassage:"live"},
{id:2,image:"",userName:"Am",time:"00:00",lastMassage:"live to "},
{id:2,image:"",userName:"ne",time:"00:00",lastMassage:"live to n "}]; */
export default function ListItem() {
  return (
    <div className="item_chat flex flex-row   pt-2 pr-2  pl-3 tablet:pt-1 tablet:pr-1 tablet:pl-2 hover:bg-zinc-400/25 cursor-pointer ">
      <div className="img_item flex items-center justify-center ">
        <img src={img} alt="image_followes" className="w-[60px] h-[60px] mobile:w-[40px] mobile:h-[40px] tablet:w-[45px] tablet:h-[45px]
         rounded-full " />
      </div>
      <div
        className="main_item flex flex-1 justify-between flex-col py-[9px] ml-4 border-b border-gray-400
                      
      "
      >
        <div className="user_name_time flex flex-row-reverse justify-between">
          <div className="time">
            <p className="text-gray-700 text-base mobile:text-[10px] tablet:text-[10px]">00:00</p>
          </div>
          <div className="user_name">
            <p className="text-xl text-gray-950 mobile:text-base tablet:text-sm">feili</p>
          </div>
        </div>
        <div className="lastMassag flex items-start">
          <p className="text-xl text-gray-700 mobile:text-base tablet:text-sm"> hi how are you</p>
        </div>
      </div>
    </div>
  )
}
