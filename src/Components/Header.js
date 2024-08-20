import React from 'react'
import { NavLink } from 'react-router-dom';
import ButtonTranslate from './ButtonTranslate';
import { useTranslation } from 'react-i18next'; 
import Logo from '../assets/img/logo.png'

function Header() {
    const { t } = useTranslation(); 
    return (
        <div>
            <header>
                 <img className='Logo' src={Logo} alt="Getisphere" width="250px" />
                <ul className='LeftLink'>
                    <li>
                        <NavLink to="/" className="navLinkage navAfter">
                        {t('accueil')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="navLinkage navAfter">
                        {t('propos')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="navLinkage navAfter">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <ul className='RightLink'>
                    <li>
                        <NavLink to="/" className="navLinkage startButton">
                      
                        {t('commencer')}
    
                        </NavLink>
                    </li>
                    <li>
                        <ButtonTranslate/>
                    </li>

                </ul>

            </header>
        </div>
    )
}
export default Header;