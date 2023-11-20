import React from "react";
import { useRoutes } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MinLayout from "./layouts/MinLayout";
import Home from "./pages/Home";


export default function Router(){

    let element=useRoutes([
        {
            element:<AuthLayout/>,
            children:[
                {path:"/", element:<Login/>},
                {path:"signup", element:<Signup/>}
            ]
        },{
            element:<MinLayout/>,
            children:[
                {path:"home", element:<Home/>}
            ]
        }
    ])
    return element;
}