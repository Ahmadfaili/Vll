import React, {useRef, useState} from "react"
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
            border-t
            border-l
            border-b
            rounded-tl-lg
            rounded-bl-lg
            overflow-hidden  "
      >
        <header className="w-[100%] flex  border-b px-3 py-3">
          <div className="profile  flex items-center  flex-row w-[100%] justify-between">
            <div
              className="profile_img  
                     rounded-full  overflow-hidden p-1"
            >
              <img src={img} className="rounded-full w-[50px] h-[50px] flex" />
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
        </header>
        <main className="main flex flex-col">
          <div
            className="search_list_item flex w-full justify-center items-center py-4
                     bg-slate-50/50 shadow-lg"
          >
            <div
              className="search_input  items-center w-[90%] bg-zinc-400/50
                                          py-1
                                          justify-evenly

                                           rounded-lg
                                           border
                                           flex
                                           
                                         "
            >
              <FiSearch className="text-zinc-600 text-lg" />
              <input
                type="text"
                placeholder="Search or start new chat"
                className="text-lg placeholder:text-zinc-600 border-none
                                        outline-none bg-transparent
                                       w-[76%] p-0
                            
                            "
              />
            </div>

             
             
          
          </div>
          <div className="chat_list_item bg-slate-400
           ">
              <ListItem/>  
              
            </div> 
        </main>
      </div>
    </>
  )
}
