import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './languages';


i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ptBr',
        fallbackLng: 'ptBr',
        interpolation: {
            escapeValue: false,
        },
    })

export type LanguageResourcesType = keyof typeof resources;

export {
    useTranslation,
} from './hooks/useTranslation';

export default i18next;