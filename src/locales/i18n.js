import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
//
import enLocales from './en.json';
import arLocales from './ar.json';

// ----------------------------------------------------------------------

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translations: arLocales },
      en: { translations: enLocales }
    },
    lng: localStorage.getItem('i18nextLng') || 'ar',
    fallbackLng: 'ar',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
