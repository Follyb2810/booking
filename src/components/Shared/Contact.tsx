
import Template from './Template'
import { socialAccounts } from '../../constant'

const Contact = () => {
    return (
        <Template subTitle='' title='Contact me' id='contact'>
            <section className='grid grid-cols-2 md:grid-cols-4 gap-3' >
                {
                    socialAccounts.map((data,index)=>(
                        <div key={index} className='p-3 border border-blue-300 rounded-xl '>
                            <a href={data.link} className='flex justify-between items-center'>
                            <div>{data.icon}</div>
                            <div>{data.platform}</div>
                            </a>
                        </div>
                    ))
                }
            </section>
        </Template>
    )
}

export default Contact
