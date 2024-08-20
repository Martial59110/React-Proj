import React, {useState} from "react";
import "../Styles/components/Home.scss";
import Header from "../Components/Header";
import imgHome1 from "../assets/img/imgHome1.jpg"
import { useTranslation } from 'react-i18next'; 
import Sphere from "../Components/ThreeSphere";


function Home()
{
    const { t } = useTranslation(); 
    return (
        <div>
            <Header />
                    <main><div className="M1"> <h1>{t('360')}</h1><p>{t('slogText')}</p></div>
                    <Sphere /> 
                    </main>
            
        </div>
    )
}

export default Home;