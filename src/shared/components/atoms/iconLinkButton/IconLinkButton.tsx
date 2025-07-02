import styles from './icon-link-button.module.css'
export interface IIconLinkButton{
    link:string,
    icon:string,
    iconColor:string,
    text?:string,
    className?:string,
}
export const IconLinkButton = (props:IIconLinkButton) => {
     const openLinkNewTab = () =>{
        window.open(props.link)
    }
    return (
    <button onClick={openLinkNewTab} className={`${props.className}  ${styles['icon-link-button']}`}>
            <i className={`${props.icon} ${props.iconColor} text-2xl  `}></i>
            {props.text && <p className={props.iconColor} style={{fontFamily:"var(--font-love-you)"}}>{props.text}</p>}
        </button>
    )
}