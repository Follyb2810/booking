
import { Hero } from '../../assets/image'


const Heropage = () => {
    return (
        <section className='min-h-screen w-full sticky -z-20 bg-fixed' id='hero' style={{backgroundImage:`url(${Hero})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
            
            {/* <img src={Hero} className='w-full h-full object-fit'/> */}
        </section>
    )
}

export default Heropage