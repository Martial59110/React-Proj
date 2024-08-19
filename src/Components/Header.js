import React from 'react'
import { NavLink } from 'react-router-dom';
import ButtonTranslate from './ButtonTranslate';
import { useTranslation } from 'react-i18next'; 

function Header() {
    const { t } = useTranslation(); 
    return (
        <div>
            <header>
                 <h1>GestiSphere</h1>
                <ul className='LeftLink'>
                    <li>
                        <NavLink to="/" className="navLinkage">
                        {t('accueil')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="navLinkage">
                        {t('propos')}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="navLinkage">
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