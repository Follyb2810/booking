
import Template from '../Shared/Template'
import { AboutData } from '../../constant'

const About = () => {
    return (
        <Template subTitle='About the person' title='About'>
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-3' id='about'>
                {
                    AboutData.map((data,index)=>(
                        <div className='col-1' key={index}>
                            <img src={data.Img}/>
                            <h3>{data.title}</h3>
                            <p>{data.content}</p>
                            {data.tag && (<button className='border-2 p-3 border-blue-300 rounded-xl mt-3'>{data.tag}</button>)}
                        </div>
                    ))
                }
            
            </section>
        </Template>
    )
}

export default About
