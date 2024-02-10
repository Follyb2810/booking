// SideBar.js

import Navbar from '../Shared/Navbar';
import Profile from './Profile';
const SideBar = () => {
  return (
    <section className='hidden md:block col-span-1 md:col-span-1 lg:col-span-2 md:bg-gray-200 p-4 h-screen sticky '>
     <div className='flex flex-col justify-center items-center' >
        <Profile/>
        <Navbar/>
        </div>
     
    </section>
  );
};

export default SideBar;
