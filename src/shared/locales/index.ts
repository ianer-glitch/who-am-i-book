import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageResources } from './languages';


i18next
    .use(initReactI18next)
    .init({
        LanguageResources,
        lng: 'ptBR',
        fallbackLng: 'ptBR',
        interpolation: {
            escapeValue: false,
        },
    })

export type LanguageResourcesType = keyof typeof LanguageResources;

export {
    useTranslation,
} from './hooks/useTranslation';

export default i18next;