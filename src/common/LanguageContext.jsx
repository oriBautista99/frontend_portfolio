import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const LangContext = createContext();

export const useLang = ()=> useContext(LangContext);

export const LangProvider = ({children}) => {
    const [lang, setLang] = useState(
        () => localStorage.getItem('lang') || 'en'
    );

    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    }, [lang]);

    const toggleLang = () => {
        setLang((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
    }

    return (
        <LangContext.Provider value={{lang, toggleLang}}>
            {children}
        </LangContext.Provider>
    )
}

LangProvider.propTypes = {
    children: PropTypes.any
}