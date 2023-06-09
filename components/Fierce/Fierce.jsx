import { useContext } from "react"
import LanguageContext from "../Context/LanguageProvider"
import React from 'react'

const Fierce = () => {
    const {selectedLanguage} = useContext(LanguageContext);

    return (
        <div>
            <span style={{color:'#00C4F4'}}>
                {
                    selectedLanguage === "EN" 
                    ? "#BNBTIGER-Fierce.Firm.Victory"
                    : "#BNBTIGER-Feroz.Firme.Vitória"
                }
                </span>
        </div>
    )
}

export default Fierce
