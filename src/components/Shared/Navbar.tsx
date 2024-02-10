import { useState } from "react";
import { NavBarItem } from "../../constant";
import { VoidProps } from "../../type";
import { Link, useLocation, useMatch } from "react-router-dom";

const Navbar = ({ handleToggle }: VoidProps) => {
  const pathname = useMatch('/booking')
  const path = useLocation()
  console.log(path)
  console.log(pathname)
  const [active, setactive] = useState(0);
  const changeActive = (index: number) => {
    setactive(index);
  };
  return (
    <nav className="mt-10 w-full" id="portfolio">
      <ol role="menu" className="list-none">
        {NavBarItem.map((data, index) => (
          <li
            role="none"
            key={index}
            className="mb-4 group"
            onClick={() => {
              { handleToggle ? handleToggle() :''}
              changeActive(index);
            }}
          >
            
            {data.path.startsWith('#') && path.pathname !== '/booking' ? (
              <a
                href={data.path}
                className={`no-underline p-2 ${
                  active === index ? "text-blue-600" : "text-black"
                }  flex items-center text-start group-hover:text-white group-hover:bg-slate-400 transition-all duration-200`}
              >
                <span className="mr-3">{data.icon}</span>
                {data.name}
              </a>
            ) : (
              <Link
                to={path.pathname === '/booking' ? '/' : data.path}
                className={`no-underline p-2 ${
                  active === index ? "text-blue-600" : "text-black"
                }  flex items-center text-start group-hover:text-white group-hover:bg-slate-400 transition-all duration-200`}
              >
                <span className="mr-3">{data.icon}</span>
                {data.name}
              </Link>
            )}
            
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Navbar;
