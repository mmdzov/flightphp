import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavList = () => {
  const [navList, setNavList] = useState([
    { title: "درباره", link: "/" },
    { title: "نصب", link: "/install" },
    { title: "آموزش", link: "/learn" },
    { title: "کد", link: "/code" },
  ]);

  return (
    <div className='NavList'>
      {navList.map((item,i) => (
        <div className='NavItem' key={i}>
          <NavLink to={item.link} className='NavbarLink'>
            {item.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default NavList;
