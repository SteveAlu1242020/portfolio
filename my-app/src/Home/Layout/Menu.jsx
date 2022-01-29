import React, { useContext } from "react";
import { menuDisplayContext } from "../../App";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useContext(menuDisplayContext);
  return (
    <div className="absolute border dark:border-[#4A4F85] bg-white text-black rounded-lg flex w-[15.3rem] top-[2.5rem] l-0 z-20 flex-col items-start ">
      <a
        href="/"
        className="font-medium hover:bg-[#4A4F85] hover:text-white p-4 border-box w-full m-0 rounded-tl-md rounded-tr-md text-left"
        onClick={() => {
          setMenuOpen(false);
          console.log(menuOpen);
        }}>
        Experience
      </a>

      <a
        href="/"
        className="font-medium hover:bg-[#4A4F85] hover:text-white p-4 border-box w-full m-0 text-left"
        onClick={() => {
          setMenuOpen(false);
        }}>
        Projects
      </a>
      <a
        href="/"
        className="font-medium hover:bg-[#4A4F85] hover:text-white p-4 border-box w-full m-0 text-left"
        onClick={() => {
          setMenuOpen(false);
        }}>
        Skills
      </a>
      <a
        href="/"
        className=" font-medium hover:bg-[#4A4F85] hover:text-white p-4 border-box w-full m-0 rounded-bl-md rounded-br-md text-left"
        onClick={() => {
          setMenuOpen(false);
        }}>
        Contact
      </a>
    </div>
  );
};

export default Menu;
