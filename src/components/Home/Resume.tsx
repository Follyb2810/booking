
import Template from '../Shared/Template'
import Skill from '../Shared/Skill'
import { SkillData } from '../../constant'

const Resume = () => {
    return (
        <Template title='Skill' subTitle='experience'>
            
        <section className='h-full gap-2' id='resume'>
            <Skill skillData={SkillData}/>
        </section>
        </Template>
    )
}

export default Resume
