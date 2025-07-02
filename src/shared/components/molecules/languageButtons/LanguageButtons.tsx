import { useTranslation } from "@/shared/locales"
import { ConfigButton } from "../../atoms/configButton/ConfigButton"


export const LanguageButtons = () => {
    const {changeLanguage} = useTranslation()
    return(
        <ul className="flex items-end justify-center flex gap-2 text-white">
            <li>
                <ConfigButton onClick={() => changeLanguage("ptBr")}><p className="!text-white">PT-BR</p></ConfigButton>
            </li>
            <li>
                <ConfigButton onClick={() => changeLanguage("enUs")}><p className="!text-white">EN-US</p></ConfigButton>
            </li>
        </ul>
    )
}