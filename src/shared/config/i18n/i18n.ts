import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru', // язык по умолчанию
    // eslint-disable-next-line max-len
    debug: false, // || __IS_DEV__, // это свойство нужно что бы в консоль выводились данные для дебага
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
