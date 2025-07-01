import { useTranslation } from "@/shared/locales"
import { ConfigButton } from "../../atoms/configButton/ConfigButton"


export const LanguageButtons = () => {
    const {changeLanguage} = useTranslation()
    return(
        <ul className="flex items-center justify-baseline gap-2">
            <li>
                <ConfigButton onClick={() => changeLanguage("ptBr")}><p>PT-BR</p></ConfigButton>
            </li>
            <li>
                <ConfigButton onClick={() => changeLanguage("enUs")}><p>EN-US</p></ConfigButton>
            </li>
        </ul>
    )
}