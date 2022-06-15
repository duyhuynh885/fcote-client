import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './en-US'
import vi from './vi-VN'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['queryString', 'query'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
