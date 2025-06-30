
import { MouseEventHandler, ReactNode } from "react"
import styles from "./config-button.module.css"

export interface IConfigButton {
    children : ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export  const ConfigButton = (props : IConfigButton) => {
    return(
        <button className={styles['config-button']} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

