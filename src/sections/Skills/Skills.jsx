import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className='flex flex-col items-center'>
        <h1>Skills</h1>
        <div className='flex justify-evenly self-center flex-wrap gap-10'>
            <SkillList icon='check' skill='HTML' />
            <SkillList icon='check' skill='CSS' />
            <SkillList icon='check' skill='JavaScript' />
            <SkillList icon='check' skill='Angular' />
        </div>
    </section>
  )
}

export default Skills