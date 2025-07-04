'use client'
import { useThemeStore } from "@/shared/state/useThemeStore"
import { ConfigButton } from "../../atoms/configButton/ConfigButton"

export const ThemeButtons = () =>{
    const {setCurrentTheme} = useThemeStore()
    
   
    return(
        <ul className="flex items-end justify-end gap-2">
            <li>
                <ConfigButton onClick={()=>setCurrentTheme('light')} >
                    <i className="pi pi-sun"></i>
                </ConfigButton>
            </li>
             <li>
                <ConfigButton onClick={()=>setCurrentTheme('dark')}>
                    <i className="pi pi-moon"></i>
                </ConfigButton>
            </li>
        </ul>
    )
}