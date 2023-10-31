import React, { useState } from 'react'
import i18n from 'i18next';





export default function LanguageSelector() {

  const [selectedLanguage,setSelectedLanguage]=useState(i18n.language);

  const chooseLanguge=(e)=>{
    e.preventDefault();
    i18n.changeLanguage(e.target.value);
    setSelectedLanguage(e.target.value);
    //console.log(e.target.value)
    localStorage.setItem("lang", e.target.value);
  }




  return (
    <div>
      <select defaultValue={selectedLanguage} onChange={chooseLanguge}>
        <option value="en">English</option>
        <option value="fr">Italian</option>

      </select>


    </div>
  )
}
