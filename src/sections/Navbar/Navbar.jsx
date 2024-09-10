import { useEffect, useState } from 'react';
import { useTheme } from '../../common/ThemeContext';
import { useTranslation } from 'react-i18next';
import { UilAngleDown } from '@iconscout/react-unicons'
import { useLang } from '../../common/LanguageContext';

function Navbar() {

    const { theme, toggleTheme } = useTheme();
    const { lang, toggleLang } = useLang();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setMenuLang] = useState(false);
    const themeColor  = theme == 'light' ? 'dark_mode' : 'light_mode';
    const oppositeColor = theme == 'light' ? 'DARK' : 'LIGHT'; 
    const { t } = useTranslation();

    const currentLanguage = lang;
    const oppositeLanguage = currentLanguage === 'en' ? 'es' : 'en';
    const oppositeLanguageIcon = currentLanguage === 'en' ? '/assets/es.svg' : '/assets/en.svg';

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const closeMenu = () => {
        setMenuLang(!isOpen);
    }
    

    return (
        <nav className='w-full fixed top-0 right-0 flex justify-center items-center z-50'>
            <ul className={`relative mt-4 mx-2 px-3 md:px-6 rounded-full md:mx-auto max-w-2xl flex md:items-center gap-3 md:gap-6 font-normal tracking-tight text-xs md:text-base text-textColor dark:text-textColorDark bg-backgroundColor dark:bg-backgroundColorDark bg-opacity-60 dark:bg-opacity-60 dark:backdrop-blur-sm backdrop-blur-sm ${isScrolled ? 'shadow-md shadow-backgroundColorDark/40 dark:shadow-backgroundColor/40 ' : 'bg-transparent'}`}>
                <li className='cursor-pointer hover:text-btnColor py-2'>
                    <a href="#hero">{t('HOME')}</a>
                </li>
                <li className='cursor-pointer hover:text-btnColor py-2'>
                    <a href="#experience">{t('EXPERIENCE')}</a>
                </li>
                <li className='cursor-pointer hover:text-btnColor py-2'>
                    <a href="#projects">{t('PROJECTS')}</a>
                </li>
                <li className='cursor-pointer hover:text-btnColor py-2'>
                    <a href="#about">{t('ABOUT')}</a>
                </li>
                <li className='hidden md:flex items-center'>
                    <div className='h-8 md:h-10 flex justify-center items-center font-light cursor-pointer'>
                        <span className="material-symbols-outlined"
                            onClick={toggleTheme}>
                            {themeColor}
                        </span>       
                    </div>
                </li>
                <li className='flex items-center cursor-pointer' onClick={closeMenu}>
                    <UilAngleDown size="24" />
                </li>
                <li className={ `${isOpen ? 'absolute' : 'hidden'}  right-4 top-12 w-auto rounded-md bg-backgroundColor dark:bg-backgroundColorDark shadow-md shadow-backgroundColorDark/40 dark:shadow-backgroundColor/40`}>
                    <ul className='flex flex-col w-auto'>
                        <li className={`p-2 rounded-t-md flex md:hidden items-center justify-between gap-2 cursor-pointer hover:bg-backgroundColorDark dark:hover:bg-backgroundColor  hover:bg-opacity-25 dark:hover:bg-opacity-25`} onClick={() => {toggleTheme(), closeMenu()}}>
                            <div className='h-6 md:h-10 flex justify-center items-center font-light'>
                                <span className="material-symbols-outlined">
                                    {themeColor}
                                </span>   
                            </div>
                            <span>{t(oppositeColor)}</span>   
                        </li>
                        <li className='p-2 rounded-b-md md:rounded-md flex items-center justify-start gap-2 cursor-pointer hover:bg-backgroundColorDark dark:hover:bg-backgroundColor  hover:bg-opacity-25 dark:hover:bg-opacity-25' onClick={() => {toggleLang(), closeMenu()}}>
                            <img className='h-6 w-6 md:h-8 md:w-8' src={oppositeLanguageIcon} alt="languaje icon" />
                            <span>{t(oppositeLanguage == 'es'? 'SPANISH' : 'ENGLHIS')}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar