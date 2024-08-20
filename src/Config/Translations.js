import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        "accueil": "Home",
        "propos": "About",
        "commencer": "Get started",
        "360": "360° Management",
        "slogText": "Access a comprehensive overview and manage your projects with precision and ease."
      }
    },
    fr: {
      translation: {
        "accueil": "Accueil",
        "propos": "À propos",
        "commencer": "Commencer",
        "360": "Une gestion à 360°",
        "slogText": "Accédez à une vue d'ensemble complète et gérez vos projets avec précision et facilité."
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