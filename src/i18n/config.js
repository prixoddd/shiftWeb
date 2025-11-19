import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './locales/en.json'
import ruTranslations from './locales/ru.json'
import etTranslations from './locales/et.json'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslations,
        },
        ru: {
            translation: ruTranslations,
        },
        et: {
            translation: etTranslations,
        },
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})

export default i18n

