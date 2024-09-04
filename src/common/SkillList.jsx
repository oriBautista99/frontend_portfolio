import PropTypes from 'prop-types';
import { UilHtml5,UilCss3Simple,UilJavaScript,UilHome,UilLayerGroup, UilApps, UilChartBar,UilRss, UilCalendarAlt, UilReact  } from '@iconscout/react-unicons'
import {useTheme} from '../common/ThemeContext';

function SkillList({icon,skill,color, type, number}) {

  const {theme} = useTheme();
  const iconAngular = theme == 'light' ? '/src/assets/angular.svg' : '/src/assets/angular_dark.svg';
  const iconTailwind = theme == 'light' ? '/src/assets/tailwind.svg' : '/src/assets/tailwind_dark.svg';
  const iconScss = theme == 'light' ? '/src/assets/scss.svg' : '/src/assets/scss_dark.svg';
  const iconTs = theme == 'light' ? '/src/assets/typescript.svg' : '/src/assets/typescript_dark.svg';
  const iconTesting = theme == 'light' ? '/src/assets/testing.svg' : '/src/assets/testing_dark.svg';
  const iconFigma = theme == 'light' ? '/src/assets/figma.svg' : '/src/assets/figma_dark.svg';
  const iconResponsive = theme == 'light' ? '/src/assets/responsive.svg' : '/src/assets/responsive_dark.svg';

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
      <div className={`relative py-1 px-2 w-full h-full rounded-md border-2 border-${color} text-textColor dark:text-textColorDark text-sm font-normal cursor-pointer  bg-opacity-10 ${bgColor}`}>
        {iconsMap[icon]}
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