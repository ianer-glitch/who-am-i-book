import style from './postIt.module.css'
export interface IPostIt{
    children : React.ReactNode
    color : "yellow" | "red" | "blue" | "green" | "pink"
}


export const PostIt = (props : IPostIt) =>{
    
   

    return(
        <div className={`${style[props.color]} ${style['container']}`}>
            {props.children}
        </div>
    )
}