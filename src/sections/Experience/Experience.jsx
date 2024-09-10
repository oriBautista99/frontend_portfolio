import { useTranslation } from "react-i18next";
import ExperienceCard from "../../common/ExperienceCard";
import { UilBagAlt } from '@iconscout/react-unicons'

function Experience() {

    const experienceList = [
        {
            id: '01',
            company: 'ActionTracker Solutions SL',
            position: 'Frontend Development Lead - Frontend Developer',
            descripcion: `EXP1`,
            time: '12/2021 - 06/2024',
            tasks: [
                'TASK11',
                'TASK12',
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
            ]
        },
        {
            id: '02',
            company: 'Prisma Hexagon',
            position: 'Frontend Developer',
            descripcion: `EXP2`,
            time: '06/2021 - 08/2021',
            tasks: [],
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
                    name: 'TypeScript',
                    color: 'ts',
                    icon: 'ts'
                }
            ]
        }
    ];

    const { t } = useTranslation();

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
            <h1 className="text-3xl">{t('EXPERIENCE')}</h1>
        </div>
        {listExperience}
    </section>
  )
}

export default Experience;