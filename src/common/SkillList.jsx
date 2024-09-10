import PropTypes from 'prop-types';
import { UilHtml5,UilCss3Simple,UilJavaScript,UilHome,UilLayerGroup, UilApps, UilChartBar,UilRss, UilCalendarAlt, UilReact  } from '@iconscout/react-unicons'
import {useTheme} from '../common/ThemeContext';
import { useState } from 'react';

function SkillList({icon,skill,color, type, number}) {

  const [isHovered, setIsHovered] = useState(false);

  const {theme} = useTheme();
  const iconAngular = theme == 'light' ? '/assets/angular.svg' : '/assets/angular_dark.svg';
  const iconTailwind = theme == 'light' ? '/assets/tailwind.svg' : '/assets/tailwind_dark.svg';
  const iconScss = theme == 'light' ? '/assets/scss.svg' : '/assets/scss_dark.svg';
  const iconTs = theme == 'light' ? '/assets/typescript.svg' : '/assets/typescript_dark.svg';
  const iconTesting = theme == 'light' ? '/assets/testing.svg' : '/assets/testing_dark.svg';
  const iconFigma = theme == 'light' ? '/assets/figma.svg' : '/assets/figma_dark.svg';
  const iconResponsive = theme == 'light' ? '/assets/responsive.svg' : '/assets/responsive_dark.svg';

  const bgColor = `bg-${color}`;

  const iconsMap = {
    html: <UilHtml5  size={!type ? "16" : "48"}/>,
    css: <UilCss3Simple size={!type ? "16" : "48"}/>,
    js: <UilJavaScript size={!type ? "16" : "48"}/>,
    material: <UilLayerGroup size={!type ? "16" : "48"}/>,
    angular: <img className={!type ? 'w-4 h-4' : 'h-12 w-12'} src={iconAngular}/>,
    scss: <img className={!type ? 'w-4 h-4' : 'h-12 w-12'} src={iconScss}/>,
    flex: <UilApps size={!type ? "16" : "48"}/>,
    ts: <img className={!type ? 'w-4 h-4' : 'h-12 w-12'} src={iconTs}/>,
    tailwind: <img  className={!type ? 'w-4 h-4' : 'h-12 w-12'}  src={iconTailwind}/>,
    testing: <img className={!type ? 'w-4 h-4' : 'h-12 w-12'} src={iconTesting}/>,
    figma: <img className={!type ? 'w-4 h-4' : 'h-12 w-12'} src={iconFigma}/>,
    responsive: <img className={!type ? 'w-4 h-4' : 'h-12 w-12'} src={iconResponsive}/>,
    chart: <UilChartBar size={!type ? "16" : "48"}/>,
    mqtt: <UilRss size={!type ? "16" : "48"}/>,
    calendar: <UilCalendarAlt size={!type ? "16" : "48"}/>,
    react: <UilReact size={!type ? "16" : "48"}/> 
  } 

  if(!type){
    return (
      <span className={`text-sm flex items-center gap-2 px-4 py-1 min-w-32 w-fit rounded-full bg-opacity-25 ${bgColor}`}>
          {iconsMap[icon] || <UilHome />} 
          {skill}
      </span>
    );    
  }else{
    return (
      <div className={`relative py-1 px-2 w-full h-full rounded-md border-2 border-${color} text-textColor dark:text-textColorDark text-sm font-normal cursor-pointer  bg-opacity-10 ${bgColor}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {iconsMap[icon]}
        <p className={` ${isHovered ? 'text-current' : 'text-transparent'} text-start text-[14px]`}>{skill}</p>
        <span className='absolute bottom-1 right-2'>{number}%</span>
      </div>
    );
  }

}

SkillList.propTypes = {
  icon: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  color: PropTypes.string,
  type: PropTypes.string,
  number: PropTypes.number,
};


export default SkillList