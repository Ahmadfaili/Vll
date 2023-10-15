import React, {useEffect, useState} from "react"
import {BiCheckDouble} from "react-icons/bi"
export default function Massage(props) {
  const [msgRightLeft, setmsgRightLeft] = useState("")
  const [svgClassName, setSvgClassName] = useState("")
  const msgRtl = props.msgRtl

  useEffect(() => {
    console.log()
    if (msgRtl === "left") {
      setmsgRightLeft("bg-[#00BCD4] self-start ")
      setSvgClassName("left-[-14px] mobile:left-[-12px] tablet:left-[-12px] ")
    }
    if (msgRtl === "right") {
      setmsgRightLeft("bg-[#77f263ab] self-end ")
      setSvgClassName("right-[-14px] mobile:right-[-12px] tablet:right-[-12px]")
    }
  }, [])

  return (
    <>
      <div
        className={`massage ${msgRightLeft} 
        flex min-w-[80px] max-w-[250px] 
        py-2 px-2 rounded-lg ${
          msgRtl === "left" ? "rounded-tl-none" : "rounded-tr-none"
        } shadow-md 
          items-start flex-col  mb-2 mx-7  mobile:mx-3  tablet:mx-5
          relative
          
          `}
      >
        <div className="msg">
          <p className="text-lg text-black text-left mobile:text-sm tablet:text-[15px]">
            hi,how are you todey?
          </p>
        </div>
        <div className="time_check flex w-full justify-end  items-center ">
          <div className="time mr-1">
            <p className="text-sm text-gray-700 mobile:text-[10px] tablet:text-[11px] ">
              1:10
            </p>
          </div>
          <div className="ckecked ">
            <BiCheckDouble className="text-xl mobile:text-sm tablet:text-base text-blue-800" />
          </div>
        </div>

        <div
          className={`flex absolute  top-[-2px] tablet:top-[-1px] ${svgClassName}`}
        >
          <svg
            className="w-[18px] h-[18px] mobile:w-4 mobile:h-4 tablet:w-4 tablet:h-4 "
            viewBox="0 0 48 48"
            fill={`${msgRtl === "left" ? "#00BCD4" : "#77f263ab"}`}
            xmlns="http://www.w3.org/2000/svg"
            transform={`${
              msgRtl === "left" ? "rotate(180)" : "matrix(1, 0, 0, -1, 0, 0)"
            }`}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 9.1153C8 7.29468 10.2347 6.42094 11.4696 7.75874L40.9016 39.6434C42.0842 40.9246 41.1755 43 39.432 43H10C8.89543 43 8 42.1046 8 41V9.1153Z"
                stroke="none"
                stroke-width="0"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </>
  )
}
