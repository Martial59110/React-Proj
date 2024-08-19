
import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import '../Config/Translations'; 
import frFlag from '../assets/img/fr.png'
import enFlag from '../assets/img/en.png'


function ButtonTranslate() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // Utilise la langue initiale configurée
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = {
    en: { label:"English", flag: enFlag },
    fr: { label: "Français", flag: frFlag },
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng); // Met à jour la langue sélectionnée
    setIsDropdownOpen(false); // Ferme le menu déroulant après la sélection
  };

  return (
    <div className="LanguageButtonContainer">
      {/* Bouton principal affichant le drapeau de la langue sélectionnée */}
      <button
        className="LanguageButton mainButton"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <img
          className="DrapLogo"
          src={languages[selectedLanguage].flag}
          alt={languages[selectedLanguage].label}
          width="40px"
        />
      </button>

      {/* Menu déroulant */}
      {isDropdownOpen && (
        <div className="DropdownMenu">
          {Object.keys(languages).map((lng) => (
            <button
              key={lng}
              className="LanguageButton"
              onClick={() => changeLanguage(lng)}
            >
              <img
                className="DrapLogo"
                src={languages[lng].flag}
                alt={languages[lng].label}
                width="30px"
              />
              
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ButtonTranslate;