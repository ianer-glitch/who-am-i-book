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
    <button onClick={openLinkNewTab} className={`${props.className} flex items-center justify-center p-4 rounded-[2px] gap-4`}>
            <i className={`${props.icon} ${props.iconColor} text-2xl  `}></i>
            {props.text && <p className={props.iconColor}>{props.text}</p>}
        </button>
    )
}