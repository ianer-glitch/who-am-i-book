import { MouseEventHandler } from 'react'
import style from './postIt.module.css'
export interface IPostIt{
    children? : React.ReactNode
    color : "yellow" | "red" | "blue" | "green" | "pink",
    className?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>
}


export const PostIt = (props : IPostIt) =>{
    return(
        <div onClick={() => props.onClick} className={`${style[props.color]} ${style['container']} ${props.className}`}>
            {props.children}
        </div>
    )
}