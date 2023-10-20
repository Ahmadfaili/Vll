import React, {useState} from "react"
import img from "../../assets/image/Space.jpg"
import {FiMoreVertical, FiSearch} from "react-icons/fi"

import Module from "../module/Module"
import ListItem from "../listItem/ListItem"
import DarkModeToggle from "../darkMode/DarkModeToggle"

export default function Sidbar() {
  const [open, setOpen] = useState(false)

  const menu_handler = () => {
    setOpen(!open)
  }

  return (
    <>
      <div
        className="sidbar  flex flex-col w-[30%] h-[100%] 
            border-r dark:border-[rgba(26,30,32,0.5)]  
            rounded-tl-lg
            rounded-bl-lg
            overflow-hidden mobile:w-full tablet:w-[35%]  "
      >
        <header className="w-[100%] flex   p-2 dark:bg-[#202c33]/75">
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
            <div className="flex items-center justify-center  ">
              <DarkModeToggle />
              <div
                className={`menu_profile ${
                  open ? "bg-slate-200 dark:bg-gray-700" : "bg-transparent"
                }
                    transition-all duration-200 
                    flex rounded-full 
                    dark:text-white 
                    items-center justify-center relative cursor-pointer`}
                onClick={menu_handler}
              >
                <FiMoreVertical className="text-xl mobile:text-sm tablet:text-base mx-3 my-3" />
                {open ? <Module open /> : null}
              </div>
            </div>
          </div>
        </header>
        <div className="main flex flex-col dark:bg-[#111b21]/90">
          <div
            className="search_list_item flex w-full justify-center items-center py-4
                     bg-slate-50/50 shadow-lg mobile:py-2 mobile:px-1 
                     tablet:py-[6px] tablet:px-0 dark:bg-[#111b21]/90"
          >
            <div
              className="search_input  items-center w-[90%] bg-zinc-400/25 
                                          py-[5px]
                                          justify-evenly
                                          mobile:w-[95%]
                                           rounded-lg
                                           border
                                           flex dark:border-0 
                                           tablet:p-[6px] dark:bg-[#202c33]/75
                                         "
            >
              <FiSearch className="text-zinc-600 dark:text-[#8696a0] text-lg tablet:text-base " />
              <input
                type="text"
                placeholder="Search or start new chat"
                className="text-lg placeholder:text-zinc-600 border-none
                                        outline-none bg-transparent
                                       w-[76%] p-0 mobile:text-sm
                                        tablet:text-xs placeholder:dark:text-[#8696a0] dark:text-[#edf9ff] 
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
              className=" scrollbar scrollbar-w-2 mobile:scrollbar-w-1 tablet:scrollbar-w-[5px] 
              scrollbar-thumb-rounded-2xl overflow-auto
             flex-col scrollbar-thumb-[#838383cb] dark:scrollbar-thumb-[#494949cb] 
             scrollbar-track-transparent 
              flex h-[100%]  "
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
