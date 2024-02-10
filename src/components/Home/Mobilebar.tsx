import Navbar from '../Shared/Navbar';
import Profile from './Profile';
import { VoidProps } from '../../type';


const Mobilebar = ({handleToggle}:VoidProps) => {

   
  return (

     <div className='flex flex-col justify-center items-center py-4' >
        <Profile/>
        <Navbar handleToggle={handleToggle}/>
        </div>
  );
};

export default Mobilebar;
