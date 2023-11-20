import React, {useState} from "react"
import {Formik} from "formik"
import * as yab from "yup"
import axios from "axios"
import Spiner from "../component/spiner/Spiner";
import { Link } from "react-router-dom";
const validationSchema = yab.object().shape({
  phone: yab
    .string()
    .min(11, "شماره همراه باید کمتر از 11 کارکتر باشد")
    .max(11, "شماره همراه باید بیشتر از 12 کاراکتر نباشد ")
    .required(),
  password: yab
    .string()
    .min(6, " پسورد باید کمتر از 6 کارکتر باشد")
    .max(30, " پسورد باید بیشتر از 11 کاراکتر نباشد ")
    .required(),
})
export default function Login() {
  const [message, setMessage] = useState("");
  const[loading,setLoading]=useState(false);
  return (
    <div className="login flex absolute  m-auto w-[26.9rem] mobile:w-[24.9rem] ">
      <div
        className="z-50  
          bg-white/[0.4] rounded-lg border-[1px]
            backdrop-blur-[5px] 
            pt-3 px-5 py-3 pb-3 w-full flex-col
        "
      >
        <header className="py-4">
          <h1 className="text-2xl mobile:text-xl font-normal text-zinc-400">
            LogIn
          </h1>
        </header>
        <div className="main_login">
          <Formik
            initialValues={{phone: "", password: ""}}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting}) => {
              setLoading(true)
              axios({
                url: "/",
                method: "post",
                data: {
                  query: `
                        query{
                          login(phone: "${values.phone}", password: "${values.password}") {
                            
                            token
                            
                          }
                        }
                  
                        `,
                },
              })
                .then((response) => {
                  setLoading(false)
                  if (response.data.errors) {
                    const {message} = response.data.errors[0].data[0]
                    setSubmitting(false)
                    setMessage(message)
                  } else {
                    const {token} = response.data.data.login
                    setSubmitting(false)
                    setMessage()
                    console.log(token)
                  }
                })
                .catch((error) => {
                  console.log(error)
                })
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex w-full flex-col space-y-7">
                  <div className=" items-start text-left flex flex-col w-full ">
                    <span className="black  text-lg mobile:text-base text-[#3e3d3d] ">
                      Phone
                    </span>
                    <input
                      type="text"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      className={`text w-full  px-2 
                      py-2 pt-3 pb-3 mt-2 
                      bg-transparent
                      
                      border
                      rounded-lg
                      
                      focus:outline-none 
                      focus:border-sky-500 focus:ring-0 focus:border focus:ring-sky-500
                      focus:visible:none ${
                        errors.phone && touched.phone && errors.phone
                          ? "border-red-500"
                          : "border-slate-500"
                      } `}
                      placeholder="Phone"
                    />
                    <span className="text-red-500 self-center">
                      {errors.phone && touched.phone && errors.phone}
                    </span>
                  </div>

                  <div className=" items-start text-left flex w-full flex-col ">
                    <span className="black text-lg mobile:text-base ">
                      Password
                    </span>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={`text w-full  px-2 
                      py-2 pt-3 pb-3 mt-2 
                      bg-transparent
                      border
                      rounded-lg
                      
                      focus:outline-none 
                      focus:border-sky-500 focus:ring-1 focus:border focus:ring-sky-500
                      focus:visible:none ${
                        errors.password && touched.password && errors.password
                          ? "border-red-500"
                          : "border-slate-500"
                      } `}
                      placeholder="Password"
                    />
                    <span className="text-red-500 self-center">
                      {errors.password && touched.password && errors.password}
                    </span>
                    <span className="text-red-500 self-center">{message}</span>
                  </div>



                  <div className="flex flex-row justify-between ">
                    <Link to="signup" className="text-base text-[#3e3d3d]">singUp</Link>
                      
                    <a href="#" className="text-base text-[#3e3d3d]">
                      forgetPassword?
                    </a>
                  </div>


                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn
                     bg-blue-600 border relative rounded-lg text-base mobile:text-sm
                      hover:bg-blue-700 h-14
                      text-white pt-3 pb-3 w-2/3"
                    >
                      {
                        loading?<Spiner/>:"Login"
                      }
                      
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
