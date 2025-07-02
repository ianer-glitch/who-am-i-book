import { useEffect, useState } from "react"
import { useTranslation } from "../locales"

export const useDate = () =>{
    const {currentLanguage} = useTranslation()
    const [dateToShow,setDateToShow] = useState("")
    
    useEffect(()=>{
        
        const date = new Date()
        
        date.setHours(0,0,0,0)
        const formattedDate = new Intl.DateTimeFormat(
        
            currentLanguage === "ptBr" ? "pt-BR" : "en-US",
        {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }
        ).format(date)
        
          setDateToShow(formattedDate)
        
        
    },[currentLanguage])
    
    return {dateToShow}
}