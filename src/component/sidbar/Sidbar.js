import React, {useState} from "react"
import img from "../../assets/image/Space.jpg"
import {FiMoreVertical, FiSearch} from "react-icons/fi"

import Module from "../module/Module"
import ListItem from "../listItem/ListItem"

export default function Sidbar() {
  const [open, setOpen] = useState(false)

  const menu_handler = () => {
    setOpen(!open)
  }

  return (
    <>
      <div
        className="sidbar  flex flex-col w-[30%] h-[100%] 
            border-r
            rounded-tl-lg
            rounded-bl-lg
            overflow-hidden mobile:w-full tablet:w-[35%]  "
      >
        <header className="w-[100%] flex  border-b p-2">
          <div className="profile  flex items-center  flex-row w-[100%] justify-between">
            <div
              className="profile_img  
                     rounded-full  overflow-hidden "
            >
              <img
                src={img}
                alt="image_profile_user"
                className="rounded-full w-[50px] h-[50px] mobile:w-[36px] mobile:h-[36px] tablet:w-[40px]
                tablet:h-[40px] flex"
              />
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
              <FiMoreVertical className="text-xl mobile:text-sm tablet:text-base mx-3 my-3" />
              {open ? <Module open /> : null}
            </div>
          </div>
        </header>
        <div className="main flex flex-col">
          <div
            className="search_list_item flex w-full justify-center items-center py-4
                     bg-slate-50/50 shadow-lg mobile:py-2 mobile:px-1 tablet:py-[6px] tablet:px-0"
          >
            <div
              className="search_input  items-center w-[90%] bg-zinc-400/25
                                          py-1
                                          justify-evenly
                                          mobile:w-[95%]
                                           rounded-lg
                                           border
                                           flex
                                           tablet:p-[6px]
                                         "
            >
              <FiSearch className="text-zinc-600 text-lg tablet:text-base" />
              <input
                type="text"
                placeholder="Search or start new chat"
                className="text-lg placeholder:text-zinc-600 border-none
                                        outline-none bg-transparent
                                       w-[76%] p-0 mobile:text-sm
                                        tablet:text-xs
                            "
              />
            </div>
          </div>

          <div
            className="chat_list_item bg-transparent flex flex-col w-[100%]
                        h-[48%] mobile:h-[41%]           
            
           "
          >
            <div
              className=" scrollbar scrollbar-w-2 mobile:scrollbar-w-1 tablet:scrollbar-w-[5px] scrollbar-thumb-rounded-2xl overflow-auto
             flex-col scrollbar-thumb-[#838383cb] scrollbar-track-transparent 
              flex h-[100%] "
            >
              <ListItem />
              <ListItem /> <ListItem />
              <ListItem /> <ListItem /> <ListItem /> <ListItem /> <ListItem />
              <ListItem /> <ListItem /> <ListItem /> <ListItem /> <ListItem />
              <ListItem />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
