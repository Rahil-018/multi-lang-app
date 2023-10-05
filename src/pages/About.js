import React from "react"
import Languageoption from "../components/Navi"
import i18next from "i18next"
import { useTranslation } from 'react-i18next';
const Aboutus = () => {
    const { t } = useTranslation();
    const handleClick = (e) => {
        i18next.changeLanguage(e.target.value)
    }
    return (
        <>
            <Languageoption onChange={(e) => handleClick(e)} />
            <h1 align="center" className="m-5">{t('welcome')} {t('about')}</h1>
            <div className="container" align="center">
                <div className="m-5 flex items-centre justify-between alert alert-primary">
                    <h4>{t('My Name Is')}, </h4>
                    <h1>{t('Rahil Khan')}<br />
                        <span>I'm Developer</span></h1><hr />
                    <h4>{t('Education')} :</h4>
                    <h4>BMS(E-COM) {t('Bachelor Of Management Studies')}<br /> with <b>CGPA 8.71</b> & <b>77.21%</b>, {t('The Main Objective of BMS is to develope future manager')} / {t('Software developer support professional,who would meet the dynamic needs of the industry in a competitive and challenging environment')}</h4>
                </div>
            </div>
        </>

    )
}
export default Aboutus;
