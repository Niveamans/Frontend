import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react'



function Navbar() {

  const navRef = useRef();

  const showNavbar= () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <nav className="font-poppins bg-blue-200">
      <a className="p-4" href="index.html">
        helthApp
      </a>

      <div>
        <ul className="p-4 bg-blue-200 flex justify-center items-center h-[60px]">
          <li className="p-4 bg-blue-200">
            <a href="home">Home</a>
          </li>
          <li className="p-4 bg-blue-200">
            <a href="home">Patients</a>
          </li>
          <li className="p-4 bg-blue-200">
            <a href="home">Log Out</a>
          </li>
        </ul>

      </div>
      <button className="nav-btn nav-close-btn" onClick={{showNavbar}}>
        <FaTimes />
      </button>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </nav>

  );
}
export default Navbar;
