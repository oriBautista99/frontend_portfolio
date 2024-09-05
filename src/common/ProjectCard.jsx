import SkillList from "./SkillList";
import PropTypes from 'prop-types';
import { UilLink } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import {useTheme} from '../common/ThemeContext';
import { useTranslation } from "react-i18next";

function ProjectCard({image, link, repositorie, title, description, skills}) {

  const {theme} = useTheme();
  const { t } = useTranslation();

  const listSkills = skills.map((skill) => 
    <SkillList key={skill.name} icon={skill.icon} skill={skill.name} color={skill.color} />
  );
  const colorIcon = theme == 'light' ? '#222' : '#fff';
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
      <div className="row-start-2 md:row-start-1 col-span-1 flex flex-col gap-4 text-base">
          <img className="h-full w-full border border-footerTextColorDark rounded-lg hover:scale-110 duration-100" src={image[0].src} alt={image[0].alt}/>      
          <img className="h-full w-full border border-footerTextColorDark rounded-lg  hover:scale-110 duration-100" src={image[1].src} alt={image[1].alt}/>      
      </div>
      <div className="col-span-1 space-y-4">
        <h3 className="text-xl font-bold text-left uppercase">{title}</h3>
        <div className="flex flex-wrap justify-between gap-2">
          {listSkills}
        </div>
        <p className="text-base text-left">{t(description)}</p>
        <div className="flex items-center space-x-2">
          <a className="flex space-x-2 bg-btnColor bg-opacity-25 p-2 rounded-lg" href={repositorie} target="_blank">
            <UilGithub  size="24" color={colorIcon}/>
            <span>Code</span>
          </a>
          <a className="flex space-x-2 bg-tooterTextColor bg-opacity-25 p-2 rounded-lg" href={link} target="_blank">
            <UilLink  size="24" color={colorIcon}/>
            <span>Preview</span>
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.array,
  link: PropTypes.string,
  repositorie: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array,
  tasks: PropTypes.array
};

export default ProjectCard;
