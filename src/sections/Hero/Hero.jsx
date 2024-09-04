// import CV from '../../assets/OrianaBautista__CV.pdf';
import  {useTypewriter}  from 'react-simple-typewriter'
import { UilGithub, UilLinkedin  } from '@iconscout/react-unicons'
import { useTranslation } from 'react-i18next';

function Hero() {

    const { t } = useTranslation();
    const [text] = useTypewriter({
        words: [ t('HELLO')+ '!', t('IAM')],
        loop: 1
      });

    return (
    <section id='hero' className='flex flex-col justify-center gap-5 text-left pt-36'>
        <div className='relative flex justify-start items-center gap-8'>
            <img className='object-cover h-16 w-16 rounded-full align-middle' src="/assets/my.jpg" alt="photo profile" />
            <span className='transition ease-in-out delay-150 bg-green-300 bg-opacity-25 border-2 border-green-500 py-1 px-4 rounded-full text-sm font-normal hover:scale-110 cursor-pointer'>{t('OPENTOWORK')}</span>
        </div>
        <div className='w-full flex flex-col gap-5'>
            <div className='min-h-[75px] md:min-h-[60px] lg:min-h-[80px] flex justify-start items-center'>
                <h1 className='text-4xl md:text-5xl lg:text-5xl'>{text}</h1>
            </div>
            <h2 className='font-medium text-base md:text-lg lg:text-xl'>Frontend Developer | Angular Developer | Web Developer</h2>
            <p className='w-full text-base md:text-lg lg:text-xl'>I am a frontend developer with over 2 years of experience in creating and developing highly functional and secure web platforms for large industries.</p>
            <span className='flex justify-normal items-center gap-6'>
                <a className='flex items-center gap-1 bg-github py-2 px-4 rounded-md bg-opacity-25' href="https://github.com/oriBautista99" target='_blank'>
                    <UilGithub size='20'/>
                    <span>GitHub</span>
                </a>
                <a className='flex items-center gap-1 bg-ts py-2 px-4 rounded-md bg-opacity-25' href="https://www.linkedin.com/in/oriana-stefany-bautista-iscala-b55a04211/" target='_blank'>
                    <UilLinkedin size='20'/>
                    <span>Linkedin</span>
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