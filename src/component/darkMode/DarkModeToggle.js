import React, { useState } from 'react'
import UseDarkMode from './UseDarkMode'
import {DarkModeSwitch} from "react-toggle-dark-mode";
export default function DarkModeToggle() {
 
    const [colorTheme,setTheme]=UseDarkMode();
    const [darkMode,setDarkMode]=useState(

        colorTheme==="dark"?true:false
    )
 
        const toggleDarkMode=(enable)=>{
            setTheme(colorTheme);
                setDarkMode(enable);
        }
    return (
    <>
        <DarkModeSwitch
            style={{marginRight:"1rem"}}
            size={28}
            onChange={toggleDarkMode}
            checked={darkMode}
            moonColor='#000000'
            sunColor='#ffffff'

        
        />
    
    </>
  )
}
