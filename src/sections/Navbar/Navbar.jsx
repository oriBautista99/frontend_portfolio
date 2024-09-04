import { useEffect, useState } from 'react';
import { useTheme } from '../../common/ThemeContext';
import { useTranslation } from 'react-i18next';

function Navbar() {

    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const themeColor  = theme == 'light' ? 'light_mode' : 'dark_mode';
    const { t, i18n } = useTranslation();

    const currentLanguage = i18n.language;
    const oppositeLanguage = currentLanguage === 'en' ? 'es' : 'en';
    const oppositeLanguageIcon = currentLanguage === 'en' ? '/es.svg' : '/en.svg';

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

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

    

    return (
        <nav className='w-full fixed t-0 right-0 flex justify-center items-center z-50'>
            <ul className={`mt-4 px-6 rounded-full mx-auto max-w-2xl flex md:items-center gap-4 md:gap-6 font-normal text-sm text-textColor dark:text-textColorDark bg-backgroundColor dark:bg-backgroundColorDark bg-opacity-60 dark:bg-opacity-60 dark:backdrop-blur-sm backdrop-blur-sm ${isScrolled ? 'shadow-md shadow-backgroundColorDark/40 dark:shadow-backgroundColor/40  ' : 'bg-transparent'}`}>
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
                <li className='flex items-center gap-2'>
                    <div className='h-10 flex justify-center items-center font-light cursor-pointer'>
                        <span className="material-symbols-outlined"
                            onClick={toggleTheme}>
                            {themeColor}
                        </span>       
                    </div>
                    <button className='h-8 w-8' type='button' onClick={() => changeLanguage(oppositeLanguage)}>
                        <img src={oppositeLanguageIcon} alt="languaje icon" />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar