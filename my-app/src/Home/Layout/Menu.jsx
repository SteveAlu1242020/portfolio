import React, { useContext } from "react";
import { menuDisplayContext } from "../../App";

import { Link } from "react-scroll";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useContext(menuDisplayContext);
  return (
    <div className="absolute border dark:border-[#4A4F85] bg-white text-black rounded-lg flex w-[15.3rem] top-[2.5rem] l-0 z-20 flex-col items-start ">
      <Link
        to="experienceSection"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
        className="font-medium hover:bg-[#4A4F85] hover:text-white p-4 border-box w-full m-0 rounded-tl-md rounded-tr-md text-left cursor-pointer">
        <p
          onClick={() => {
            setMenuOpen(false);
            console.log(menuOpen);
          }}>
          Experience
        </p>
      </Link>

      <Link
        to="projectSection"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
        className="font-medium hover:bg-[#4A4F85] hover:text-white p-4 border-box w-full m-0 text-left cursor-pointer">
        <p
          onClick={() => {
            setMenuOpen(false);
          }}>
          Projects
        </p>{" "}
      </Link>
      <Link
        to="skillsSection"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="font-medium hover:bg-[#4A4F85] hover:text-white p-4 border-box w-full m-0 text-left cursor-pointer">
        {" "}
        <p
          onClick={() => {
            setMenuOpen(false);
          }}>
          Skills
        </p>{" "}
      </Link>
      <Link
        to="contactSection"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={900}
        className=" font-medium hover:bg-[#4A4F85] hover:text-white p-4 border-box w-full m-0 rounded-bl-md rounded-br-md text-left cursor-pointer">
        {" "}
        <p
          onClick={() => {
            setMenuOpen(false);
          }}>
          Contact
        </p>{" "}
      </Link>
    </div>
  );
};

export default Menu;
