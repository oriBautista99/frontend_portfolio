import {UilReact} from '@iconscout/react-unicons'
import { useTranslation } from 'react-i18next';

function Footer() {

  const { t } = useTranslation();

  return (
    <section id='footer' className='my-12 text-center text-base font-light flex flex-col items-center justify-center'>
        <p>
            &copy; 2024 Oriana Bautista. 
        </p>
        <p className='flex'>{t('FOOTER')} React <UilReact className="text-react" size="24"/> </p>
    </section>
  )
}

export default Footer