import { Link } from "react-router-dom";
import "./css/Navbar.css";
import logo from "../assets/images/logoLast.png";
import menu from "../assets/hamburger.svg";
const Navbar = () => {
  return (
    <>
      <nav className=" bg-[#14e956] flex justify-between px-20 text-2xl font-bold items-center h-[12vh] sticky top-0 z-10">
        <div className="hover:scale-[1.01] transition-all logo h-[100%] text-white flex items-center">
          <img className="h-[11vh] w-[11vh] rounded-xl" src={logo} alt="logo" />
        </div>

        <div className="hamburger hover:scale-105 transition-all">
          <img src={menu} alt="menu" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
