import { ConfigButton } from "../../atoms/configButton/ConfigButton"


export const LanguageButtons = () => {
    return(
        <ul className="flex items-center justify-baseline">
            <li>
                <ConfigButton>PT-BR</ConfigButton>
            </li>
            <li>
                <ConfigButton>EN-US</ConfigButton>
            </li>
        </ul>
    )
}