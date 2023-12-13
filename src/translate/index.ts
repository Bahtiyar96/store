import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import i18n from "i18next";
import ru from './locales/ru.json';
import en from './locales/en.json';

export const langs = ["ru", "en"];

const options = {
    resources: {
        "ru": {
            translation: ru
        },
        "en": {
            translation: en
        }
    },
};

i18n
.use(initReactI18next)
.use(LanguageDetector)
.init(options)


export default i18n;