import { useTranslation } from "@/shared/locales"
import { ConfigButton } from "../../atoms/configButton/ConfigButton"


export const LanguageButtons = () => {
    const {changeLanguage} = useTranslation()
    return(
        <ul className="flex items-center justify-baseline">
            <li>
                <ConfigButton onClick={() => changeLanguage("ptBr")}>PT-BR</ConfigButton>
            </li>
            <li>
                <ConfigButton onClick={() => changeLanguage("enUs")}>EN-US</ConfigButton>
            </li>
        </ul>
    )
}