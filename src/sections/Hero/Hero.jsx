import CV from '/public/assets/OrianaBautista__CV.pdf';
// import  {useTypewriter}  from 'react-simple-typewriter'
import { UilGithub, UilLinkedin, UilFileDownloadAlt  } from '@iconscout/react-unicons'
import { useTranslation } from 'react-i18next';

function Hero() {

    const { t } = useTranslation();
    // const [text] = useTypewriter({
    //     words: [ '👋 '+t('HELLO')+ '!', t('IAM')],
    //     loop: 1
    //   });

    return (
    <section id='hero' className='flex flex-col justify-center gap-5 text-left pt-36'>
        <div className='relative flex justify-start items-center gap-8'>
            <img className='object-cover h-16 w-16 rounded-full align-middle' src="/assets/my.jpg" alt="photo profile" />
            <span className='transition ease-in-out delay-150 bg-green-300 bg-opacity-25 border-2 border-green-500 py-1 px-4 rounded-full text-sm font-normal hover:scale-110 cursor-pointer'>{t('OPENTOWORK')}</span>
        </div>
        <div className='w-full flex flex-col gap-5'>
            <div className='min-h-[75px] md:min-h-[60px] lg:min-h-[80px] flex flex-col justify-start'>
                <h1 className='text-4xl md:text-5xl lg:text-5xl'>{t('HELLO')}</h1>
                <h1 className='text-4xl md:text-5xl lg:text-5xl'>{t('IAM')}</h1>
            </div>
            <h2 className='font-medium text-base md:text-lg lg:text-xl'>Frontend Developer 👩🏻‍💻</h2>
            <p className='w-full text-base md:text-lg lg:text-xl'>{t('INTRO')}</p>
            <span className='flex justify-normal items-center gap-6'>
                <a href={CV} download>
                    <button className='flex items-center gap-1 bg-btnColor py-2 px-4 rounded-md bg-opacity-25 font-medium'>
                        {t('CV')}
                        <UilFileDownloadAlt size='25'/>
                    </button>
                </a>
                <a className='flex items-center gap-1 p-2 rounded-full bg-formTextColor bg-opacity-0 hover:bg-opacity-25' href="https://github.com/oriBautista99" target='_blank'>
                    <UilGithub size='25'/>
                </a>
                <a className='flex items-center gap-1 p-2 rounded-full bg-formTextColor bg-opacity-0  hover:bg-opacity-25' href="https://www.linkedin.com/in/oriana-stefany-bautista-iscala-b55a04211/" target='_blank'>
                    <UilLinkedin size='25'/>
                </a>
                
            </span>
            {/* <a href={CV} download>
                <button className='hover'>
                    Resume
                </button>
            </a> */}
        </div>
    </section>
  )
}

export default Hero