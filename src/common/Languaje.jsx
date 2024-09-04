
import { useTranslation } from 'react-i18next';

function Languaje() {

    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const oppositeLanguage = currentLanguage === 'en' ? 'es' : 'en';
    const oppositeLanguageIcon = currentLanguage === 'en' ? '/assets/es.svg' : '/assets/en.svg';

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

  return (
    <div className='fixed bottom-2 right-2 md:top-4 md:bottom-auto bg-backgroundColor dark:bg-backgroundColorDark flex justify-center items-center p-2 rounded-full hover:shadow-md hover:shadow-backgroundColorDark/40 hover:dark:shadow-backgroundColor/40 z-50'>
        <button className='h-8 w-8' type='button' onClick={() => changeLanguage(oppositeLanguage)}>
            <img src={oppositeLanguageIcon} alt="languaje icon" />
        </button>
    </div>
  )
}

export default Languaje