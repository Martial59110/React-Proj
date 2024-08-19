import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        "accueil": "Home",
        "propos": "About",
        "commencer": "Get started"
      }
    },
    fr: {
      translation: {
        "accueil": "Accueil",
        "propos": "À propos",
        "commencer": "Commencer"
      }
    }
  };
  
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "fr",
      interpolation: {
        escapeValue: false 
      }
    });
  
  export default i18n;