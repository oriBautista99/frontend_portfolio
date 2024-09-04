import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

const resources = {
  en: {
    translation: enTranslation
  },
  es: {
    translation: esTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma predeterminado
    fallbackLng: 'en', // Idioma a usar si no se encuentra la clave en el idioma seleccionado
    interpolation: {
      escapeValue: false // React ya hace el escape de las variables
    }
  });

export default i18n;