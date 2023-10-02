import React, {useRef, useState} from "react"
import img from "../../assets/image/Space.jpg"
import {FiMoreVertical, FiSearch, FiChevronRight} from "react-icons/fi"
import {FaWhatsappSquare, FaAngleRight} from "react-icons/fa"

import Module from "../module/Module"
import ListItem from "../listItem/ListItem"
import {Scrollbars} from "react-custom-scrollbars-2"
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
        <div className="main flex flex-col">
          <div
            className="search_list_item flex w-full justify-center items-center py-4
                     bg-slate-50/50 shadow-lg"
          >
            <div
              className="search_input  items-center w-[90%] bg-zinc-400/25
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

          <div
            className="chat_list_item bg-transparent flex flex-col w-[100%]
                        h-[48%]            
            
           "
          >
            <div className=' scrollbar scrollbar-w-2 scrollbar-thumb-rounded-2xl overflow-auto
             flex-col scrollbar-thumb-[#838383cb] scrollbar-track-transparent 
              flex h-[100%] '>

              <ListItem />
              <ListItem /> <ListItem />
              <ListItem /> <ListItem /> <ListItem /> <ListItem /> <ListItem />
              <ListItem /> <ListItem /> <ListItem /> <ListItem /> <ListItem />
              <ListItem />
              </div>
            {/* <Scrollbars style={{height: 560}}>
              
            </Scrollbars> */}
          </div>
        </div>
        <div
          className="sidbar_footer flex items-center justify-start
         w-full pl-2 h-[5%] overflow-hidden bg-transparent border-t border-gray-400"
        >
          <div className="icon_vll pl-2 mr-5">
            <FaWhatsappSquare className="text-green-400 text-[45px] bg-white " />
          </div>
          <div className="link_app flex flex-row items-center justify-center text-center">
            <p className="text-xl text-gray-700">Get Vll For Windows</p>
          </div>
          <div className="text-center flex pt-1">
            <FiChevronRight className="text-2xl font-bold text-gray-700 " />
          </div>
        </div>
      </div>
    </>
  )
}
