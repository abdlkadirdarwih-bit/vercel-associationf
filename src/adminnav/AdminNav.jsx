

import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

import myImage from "../assets/WhatsApp Image 2026-01-25 at 10.31.44 PM.jpeg";

function AdminNavbar() {
  const [isOpen,setIsOpen] =useState(false);
  const menuRef = useRef(null); // reference to the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
    <header>
    <div className="container">
      <nav>
        {/* <div className="logo">
    <div className="baderschool"><Link className="bader-link" to="/homesch">
          BaderSchool
             </Link></div>        </div> */}
  
        {/* <ul className={isOpen ? "nav-link active" : "nav-link"}>
          <li><a href="/homesch "className={({ isActive }) => isActive ? "active-link" : ""} >Home</a></li>
          <li><a href="/aboutsch">About Us</a></li>
          <li><a href="/eventsch">Events</a></li>
          <li><a href="/contactsch">Contacts</a></li>
        </ul> */}
        <ul ref={menuRef} className={isOpen ? "nav-link active" : "nav-link"}>
 
 
  
  
    <li><NavLink to="/contactview" className={({ isActive }) => isActive ? "active-link" : ""}
          onClick={() => setIsOpen(false)}   // 👈 Close menu here
    >الاتصال</NavLink></li>
      <li><NavLink to="/servicesview" className={({ isActive }) => isActive ? "active-link" : ""}
        onClick={() => setIsOpen(false)}   // 👈 Close menu here
  > الخدمات  </NavLink></li>
    <li><NavLink to="/eventview" className={({ isActive }) => isActive ? "active-link" : ""}
        onClick={() => setIsOpen(false)}   // 👈 Close menu here
  > الأنشطة</NavLink></li>
  
   

</ul>

<div className="icon" onClick={toggleMenu}> 
      {isOpen ? <FaTimes /> : <FaBars />}
</div>
           <div className="logo">
      {/* <Link className="bader-link" to="/homesch">BaderSchool</Link> */}
  <Link to="/">
<img 
  className="img1-Navb-sch" 
  src={myImage} 
  alt="productName" 
/>           </Link>

</div>
      </nav>
          {/* <Outlet />  */}
    </div>
</header>
 <main className="content">
        <Outlet />
      </main>
<section>
 
</section>

</>
  )
}
export default AdminNavbar;
