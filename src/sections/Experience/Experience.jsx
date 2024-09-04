import ExperienceCard from "../../common/ExperienceCard";
import { UilBagAlt } from '@iconscout/react-unicons'

function Experience() {

    const experienceList = [
        {
            id: '01',
            company: 'ActionTracker Solutions SL',
            position: 'Frontend Development Lead - Frontend Developer',
            descripcion: `I began my journey at ActionTracker Solutions SL as a frontend developer, 
            joining the team responsible for developing a Monitoring and Security platform aimed at 
            large industries. After a year, I was promoted to Head of Frontend Development, taking on 
            the responsibility of leading the frontend team until the project's completion`,
            time: 'Dic 2021 - Jun 2024',
            tasks: [
                'Implementation of roles and permissions within the system, including the creation of specific screens for permissions management.',
                'Development and integration of audible and visual alarms using the MQTT protocol.',
                'Implementation of Azure authentication for user login.',
                'Consumption of REST APIs for communication between frontend and backend.',
                'Management of different development environments, including QA and production.',
                'Development of features for uploading and downloading files in multiple formats across the application.',
                'Application of reactive programming with Angular, optimizing data updates and server requests.'
            ],
            skills: [
                {
                    name: 'Angular 11',
                    color: 'angular',
                    icon: 'angular'
                },
                {
                    name: 'TailwindCss',
                    color: 'tailwind',
                    icon: 'tailwind'
                },
                {
                    name: 'Angular Material',
                    color: 'angular',
                    icon: 'material'
                },
                {
                    name: 'SCSS',
                    color: 'pink-500',
                    icon: 'scss'
                },
                {
                    name: 'TypeScript',
                    color: 'ts',
                    icon: 'ts'
                },
                {
                    name: 'Flexbox',
                    color: 'css',
                    icon: 'flex'
                }
            ],
            // tools: [
            //     {
            //         name: 'Chart.js',
            //         color: 'angular',
            //         icon: 'chart'
            //     },
            //     {
            //         name: 'MQTT',
            //         color: 'js',
            //         icon: 'mqtt'
            //     },
            //     {
            //         name: 'Angular calendar',
            //         color: 'angular',
            //         icon: 'calendar'
            //     },
            //     {
            //         name: 'Testing Jasmin',
            //         color: 'tailwind',
            //         icon: 'testing'
            //     },
            //     {
            //         name: 'Figma',
            //         color: 'html',
            //         icon: 'figma'
            //     },
            //     {
            //         name: 'Responsive Desing',
            //         color: 'ts',
            //         icon: 'responsive'
            //     }
            // ],
            // images: [
            //     {
            //         alt: 'Company logo',
            //         src: '../../assets/viberr.png'
            //     },
            //     {
            //         alt: 'Plataforma',
            //         src: '../../assets/viberr.png'
            //     }
            // ]
        },
        {
            id: '02',
            company: 'Prisma Hexagon',
            position: 'Frontend Developer',
            descripcion: `I collaborated with the Frontend development in the admin panel,
             as well as administration panel, as well as adjustments and implementation of 
             modules for the base CRM system with the Angular framework (TypeScript) with 
             framework Angular (TypeScript) using TailwindCSS.`,
            time: 'Jun 2021 - Agus 2021',
            tasks: [
                'Development admin panel'
            ],
            skills: [
                {
                    name: 'Angular',
                    color: 'angular',
                    icon: 'angular'
                },
                {
                    name: 'TailwindCss',
                    color: 'tailwind',
                    icon: 'tailwind'
                },
                {
                    name: 'CSS',
                    color: 'css',
                    icon: 'css'
                },
                {
                    name: 'TypeScript',
                    color: 'ts',
                    icon: 'ts'
                }
            ]
        }
    ];

    const listExperience = experienceList.map((experience) => 
        <ExperienceCard
            key={experience.id}
            company={experience.company}
            position={experience.position}
            description={experience.descripcion}
            skills={experience.skills}
            time={experience.time}
            tasks={experience.tasks}
        />
    );

  return (
    <section id="experience" className="flex flex-col text-center gap-10 pt-20">
        <div className="flex justify-start items-center gap-2 text-textColor dark:text-textColorDark">
            <UilBagAlt size='30'/>
            <h1 className="text-3xl">Experience</h1>
        </div>
        {listExperience}
    </section>
  )
}

export default Experience;