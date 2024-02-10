
import { Hero } from '../../assets/image';
import { SocialAccount } from '../../constant';

const Profile = () => {
    return (
        <section className='flex flex-col items-center w-full' id='profile'>
            <img src={Hero} className='rounded-full h-[150px] w-[150px] object-fill'/>
            <h3 className='mt-5'>Iobitec dd</h3>
            <ol className='flex gap-2 mt-5 '>
                {
                  SocialAccount.map((data,index)=>(
                    <li key={index} className='hover:text-green-500 hover:bg-white'><a href={data.path}>{data.icon}</a></li>
                  ))
                }
                </ol>
        </section>
    )
}

export default Profile
