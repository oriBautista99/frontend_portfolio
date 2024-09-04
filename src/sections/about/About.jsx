import { UilUserCheck } from '@iconscout/react-unicons';
import SkillList from '../../common/SkillList';

function About() {

    const frameworks = [
        {
            id: 1,
            name: 'Angular',
            color: 'angular',
            porcent: 85
        },
        {
            id: 2,
            name: 'React',
            color: 'react',
            porcent: 40
        },
        {
            id: 3,
            name: 'TailwindCss',
            color: 'tailwind',
            porcent: 85
        },
        {
            id: 4,
            name: 'Angular Material',
            color: 'material',
            porcent: 85
        },
        {
            id:5,
            name: 'SCSS',
            color: 'scss',
            porcent: 80
        },
        {
            id: 6,
            name: 'JavaScript',
            color: 'js',
            porcent: 85
        },
        {
            id: 7,
            name: 'HTML',
            color: 'html',
            porcent: 70
        },
        {
            id: 8,
            name: 'CSS',
            color: 'css',
            porcent: 40
        },
        {
            id: 9,
            name: 'TypeScript',
            color: 'ts',
            porcent: 85
        },
        {
            id:10,
            name: 'Figma',
            color: 'figma',
            porcent: 60
        },
        {
            id: 11,
            name: 'Responsive Design',
            color: 'responsive',
            porcent: 80
        }
    ];
    
  return (
    <section id='about' className='flex flex-col text-center gap-10 pt-20'>
        <div className="flex justify-start items-center gap-2 text-textColor dark:text-textColorDark">
            <UilUserCheck  size='30'/>
            <h1 className='text-3xl'>About Me</h1>
        </div>
        <div className='w-full grid grid-cols-a md:grid-cols-2 gap-2'>
            <div className='col-span-1 text-base font-light text-left'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, voluptatum minus, asperiores atque reprehenderit ad hic at totam adipisci, perferendis laboriosam delectus consequuntur aliquam iste omnis dolorum alias laborum. Fugiat?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ad harum consequatur, quis vero ea accusamus nesciunt maiores. Hic nesciunt enim consectetur rerum eius placeat quo id magni tempora ea!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, impedit in alias, reprehenderit dolores rem ut voluptates facere exercitationem doloremque fuga voluptatibus laboriosam. Nisi blanditiis aspernatur a dolor, deserunt ipsa?</p>
            </div>
            <div className='col-span-1 grid grid-cols-3 grid-rows-4 md:grid-cols-3 md:grid-rows-6 gap-2'>
                <div className="row-span-2">
                    <SkillList 
                        key={frameworks[0].id}
                        skill={frameworks[0].name}
                        color={frameworks[0].color}
                        icon={frameworks[0].color}
                        type={'about'}
                        number={frameworks[0].porcent}
                    />
                </div>
                <div >
                <SkillList 
                        key={frameworks[1].id}
                        skill={frameworks[1].name}
                        color={frameworks[1].color}
                        icon={frameworks[1].color}
                        type={'about'}
                        number={frameworks[1].porcent}
                    />
                </div>
                <div className="row-span-2 col-start-2 row-start-2">
                    <SkillList 
                        key={frameworks[2].id}
                        skill={frameworks[2].name}
                        color={frameworks[2].color}
                        icon={frameworks[2].color}
                        type={'about'}
                        number={frameworks[2].porcent}
                    />
                </div>
                <div className="col-start-1 row-start-3">
                    <SkillList 
                        key={frameworks[4].id}
                        skill={frameworks[4].name}
                        color={frameworks[4].color}
                        icon={frameworks[4].color}
                        type={'about'}
                        number={frameworks[4].porcent}
                    />
                </div>
                <div className="row-span-2 col-start-1 row-start-4">
                    <SkillList 
                        key={frameworks[6].id}
                        skill={frameworks[6].name}
                        color={frameworks[6].color}
                        icon={frameworks[6].color}
                        type={'about'}
                        number={frameworks[6].porcent}
                    />
                </div>
                <div className="col-span-2 col-start-2 row-start-4">
                    <SkillList 
                        key={frameworks[5].id}
                        skill={frameworks[5].name}
                        color={frameworks[5].color}
                        icon={frameworks[5].color}
                        type={'about'}
                        number={frameworks[5].porcent}
                    />
                </div>
                <div className="row-span-2 col-start-2 row-start-5">
                    <SkillList 
                        key={frameworks[7].id}
                        skill={frameworks[7].name}
                        color={frameworks[7].color}
                        icon={frameworks[7].color}
                        type={'about'}
                        number={frameworks[7].porcent}
                    />
                </div>
                <div className="col-start-1 row-start-6">
                    <SkillList 
                        key={frameworks[10].id}
                        skill={frameworks[10].name}
                        color={'github'}
                        icon={frameworks[10].color}
                        type={'about'}
                        number={frameworks[10].porcent}
                    />
                </div>
                <div className="row-span-2 col-start-3 row-start-1">
                    <SkillList 
                        key={frameworks[3].id}
                        skill={frameworks[3].name}
                        color={'angular'}
                        icon={'material'}
                        type={'about'}
                        number={frameworks[3].porcent}
                    />
                </div>
                <div className="col-start-3 row-start-3">
                   <SkillList 
                        key={frameworks[9].id}
                        skill={frameworks[9].name}
                        color={frameworks[9].color}
                        icon={frameworks[9].color}
                        type={'about'}
                        number={frameworks[9].porcent}
                    />                    
                </div>
                <div className="row-span-2 col-start-3 row-start-5">
                    <SkillList 
                        key={frameworks[8].id}
                        skill={frameworks[8].name}
                        color={frameworks[8].color}
                        icon={frameworks[8].color}
                        type={'about'}
                        number={frameworks[8].porcent}
                    />
                </div>
            </div> 
        </div>

    </section>
  )
}

export default About