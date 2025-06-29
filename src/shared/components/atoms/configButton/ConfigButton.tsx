import { ReactNode } from "react"
import styles from "./config-button.module.css"

export interface IConfigButton {
    children : ReactNode
}

export  const ConfigButton = (props : IConfigButton) => {
    return(
        <button className={styles['config-button']}>
            {props.children}
        </button>
    )
}

