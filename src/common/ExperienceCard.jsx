import PropTypes from 'prop-types';
import SkillList from "./SkillList";
import {useTheme} from '../common/ThemeContext';
import { useTranslation } from 'react-i18next';

function ExperienceCard({company, position, time, description, skills, tasks}) {

    const {theme} = useTheme();
    const { t } = useTranslation();

    const iconCheck = theme == 'light' ? '/assets/check.svg' : '/assets/check_dark.svg';
  
    const listSkills = skills.map((skill) => 
        <SkillList key={skill.name} icon={skill.icon} skill={skill.name} color={skill.color} />
    );
    
    const listTask = tasks.map((task,index) => 
        <li key={index} className="flex justify-start items-start gap-2">
          <img className="h-5 mt-1" src={iconCheck} alt="task icon" />
          <span className="text-left">{t(task)}</span>
        </li>
    );

    return (
        <div className='flex flex-col space-y-4'>
            <div className="grid grid-cols-1 row-span-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8">
                <div className="col-span-3 flex flex-col gap-4 text-base">
                    <div className="flex flex-col gap-1 text-left">
                    <h3 className="text-xl font-extrabold py-2 uppercase">{position}</h3>
                    <h4 className="font-medium">{company}</h4>
                    <span className="text-left">{time}</span>
                    </div>
                    <p className="text-base text-left font-normal">{t(description)}</p>          
                </div>
                <div className="row-span-1 col-span-2">
                    <div className="h-full flex flex-wrap lg:flex-col gap-4 justify-between lg:justify-evenly">
                        {listSkills}
                    </div>        
                </div>
            </div>
            <ul className="space-y-2" >
                {listTask}
            </ul>
        </div>
    );
}

ExperienceCard.propTypes = {
    time: PropTypes.string,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.array,
    tasks: PropTypes.array
  };

export default ExperienceCard