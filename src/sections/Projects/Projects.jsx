import { useTranslation } from 'react-i18next';
import ProjectCard from '../../common/ProjectCard';
import { UilArrow } from '@iconscout/react-unicons'

function Projects() {

    const { t } = useTranslation();

    const projectsData = [
        {
            id: '01',
            title: 'Clone Trello',
            link: 'https://trello-clone-or99.netlify.app',
            repositorie: 'https://github.com/oriBautista99/trello-clone.git',
            descripcion: `PROJ1`,
            skills: [
                {
                    name: 'Angular 15',
                    color: 'angular',
                    icon: 'angular'
                },
                {
                    name: 'TailwindCss',
                    color: 'tailwind',
                    icon: 'tailwind'
                },
                {
                    name: 'Angular Material CDK',
                    color: 'angular',
                    icon: 'material'
                }
            ],
            images: [
                {
                    alt: 'trello login',
                    src: '/assets/trello_login.png'
                },
                {
                    alt: 'trello board',
                    src: '/assets/trello_board.png'
                }
            ]
        },
        {
            id: '02',
            title: 'Tip Calculator',
            link: 'https://oribautista99.github.io/tip-calculator/',
            repositorie: 'https://github.com/oriBautista99/tip-calculator.git',
            descripcion: `PROJ2`,
            skills: [
                {
                    name: 'HTML',
                    color: 'html',
                    icon: 'html'
                },
                {
                    name: 'CSS',
                    color: 'pink-500',
                    icon: 'scss'
                },
                {
                    name: 'JavaScript',
                    color: 'js',
                    icon: 'js'
                }
            ],
            images: [
                {
                    alt: 'Eco Store',
                    src: '/assets/splitter_desktop.png'
                },
                {
                    alt: 'Eco Store',
                    src: '/assets/splitter_mobile.png'
                }
            ]
        },
        {
            id: '03',
            title: 'Frontend Porfolio',
            link: 'https://oribautista99.netlify.app/',
            repositorie: 'https://github.com/oriBautista99/frontend_portfolio.git',
            descripcion: `PROJ3`,
            skills: [
                {
                    name: 'React js',
                    color: 'react',
                    icon: 'react'
                },
                {
                    name: 'TailwindCss',
                    color: 'tailwind',
                    icon: 'tailwind'
                }
            ],
            images: [
                {
                    alt: 'Portfolio home',
                    src: '/assets/portfolio_home.png'
                },
                {
                    alt: 'Portfolio grid',
                    src: '/assets/portfolio_grid.png'
                }
            ]
        }
    ];

    const listProjects = projectsData.map((project) => 
        <ProjectCard 
            key={project.id}
            image={project.images} 
            repositorie={project.repositorie}
            link={project.link}
            title={project.title}
            description={project.descripcion}
            skills={project.skills}
        />
    ) ;
    

  return (
    <section id='projects' className='flex flex-col text-center gap-10 pt-20'>
        <div className="flex justify-start items-center gap-2 text-textColor dark:text-textColorDark">
            <UilArrow  size='30'/>
            <h1 className='text-3xl'>{t('PROJECTS')}</h1>
        </div>
        <div className='flex flex-col items-center gap-12'>
            {listProjects}
        </div>
    </section>
  )
}

export default Projects