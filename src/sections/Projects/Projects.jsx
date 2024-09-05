import { useTranslation } from 'react-i18next';
import ProjectCard from '../../common/ProjectCard';
import { UilArrow } from '@iconscout/react-unicons'

function Projects() {

    const { t } = useTranslation();

    const projectsData = [
        {
            id: '01',
            title: 'Clone Trello',
            link: '#',
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
            title: 'Eco Store',
            link: 'https://oribautista99.github.io/eco-store/',
            repositorie: 'https://github.com/oriBautista99/eco-store.git',
            descripcion: `PROJ2`,
            skills: [
                {
                    name: 'HTML',
                    color: 'html',
                    icon: 'html'
                },
                {
                    name: 'SCSS',
                    color: 'pink-500',
                    icon: 'scss'
                }
            ],
            images: [
                {
                    alt: 'Eco Store',
                    src: '/assets/eco_home.png'
                },
                {
                    alt: 'Eco Store',
                    src: '/assets/eco_products.png'
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