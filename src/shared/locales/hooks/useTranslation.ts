import { useTranslation as useTranslationCore } from "react-i18next";
import { ptBr } from "../languages/ptBr";
import { LanguageResources } from "../languages";
import { TOptionsBase } from 'i18next';

type OptionsType<T = unknown> = TOptionsBase & {
    [key: string]: T;
} | undefined;

export function useTranslation(){
    const {t :tCore,i18n} = useTranslationCore()

    function t(param  : keyof typeof ptBr , options :OptionsType){
        return tCore(param,options)
    }

    async function changeLanguage (lang :keyof typeof LanguageResources ){
        i18n.changeLanguage(lang)
    }
    return {
        t,changeLanguage
    }
}