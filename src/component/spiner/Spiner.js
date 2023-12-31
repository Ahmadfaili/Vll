import React from "react"

export default function Spiner() {
  return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div
        className="border-t-transparent border-solid animate-spin  rounded-full border-white
                         border-2 h-8 w-8"
      ></div>
    </div>
  )
}
