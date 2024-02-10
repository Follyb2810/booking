
import { Outlet } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
import Mobilebar from "../Home/Mobilebar";
import SideBar from "../Home/SideBar";


const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle =()=>{
    setToggle(prev=>!prev)
  }




  return (
    <>
    <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-10 h-screen">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block lg:col-span-2 bg-fuchsia-500 h-full z-10">
        <SideBar />
      </div>

      {/* Sidebar toggle for smaller screens */}
      <div
        className={`md:hidden fixed top-0 left-0 w-[300px] h-full transition-transform duration-300 ease-in-out transform ${
          toggle ? 'translate-x-0' : '-translate-x-full'
        } bg-gray-200 z-10`}
       
      >
      
          <Mobilebar  handleToggle={handleToggle}/>
      
      </div>

      <section className="col-span-1 md:col-span-3 lg:col-span-8 h-screen relative">
        {/* Hamburger icon for sidebar toggle */}
        <div className="block md:hidden relative p-3" onClick={handleToggle}>
          {toggle ? (
            <LiaTimesSolid
              size={30}
              className="fixed z-20 left-[90%] text-blue-500 hover:text-blue-300 hover:transition-all ease-in-out cursor-pointer duration-300"
            />
          ) : (
            <FaHamburger
              size={30}
              className="fixed z-20 left-[90%] text-blue-500 hover:text-blue-300 hover:transition-all ease-in-out cursor-pointer duration-300"
            />
          )}
        </div>
        <div className="relative">

        <Outlet />
        </div>
      </section>
    </section>
    </>
  );
};

export default Layout;