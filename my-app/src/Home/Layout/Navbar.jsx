import React, { useContext } from "react";
import Button from "../Components/Button";
import { FaRegMoon, FaSun } from "react-icons/fa";
import logo from "../Images/logo.png";
import Menu from "./Menu";
import { menuDisplayContext } from "../../App";

import { Link } from "react-scroll";

const Navbar = ({ dark, setDark }) => {
  const [menuOpen, setMenuOpen] = useContext(menuDisplayContext);

  return (
    <div className="flex justify-between bg-transparent max-w-7xl m-auto p-4 border-box items-center">
      <div className="flex dark:text-white items-center">
        <div className="px-2 border-box">
          <img src={logo} className="w-12" alt="logo" draggable="false" />
        </div>
        <div className="hidden sm:block px-2 border-box border-solid border-l-2 border-[#4A4F85] dark:border-gray-100 relative ">
          <span
            className="cursor-pointer"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}>
            Menu
          </span>
          {menuOpen && <Menu className="" />}
        </div>
      </div>
      <div className="flex">
        <div className="px-2 border-box hidden sm:block">
          {dark ? (
            <Button
              type="submit"
              className=""
              onClick={() => {
                setDark(!dark);
              }}>
              <span className="font-medium">Dark</span>
              <span className="pl-1 border-box">{<FaRegMoon />}</span>
            </Button>
          ) : (
            <Button
              type="submit"
              className=""
              onClick={() => {
                setDark(!dark);
              }}>
              <span className="font-medium">Light</span>
              <span className="pl-1 border-box">{<FaSun />}</span>
            </Button>
          )}
        </div>
        <div className="px-2 border-box ">
          <Link
            to="contactSection"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}>
            <Button type="submit" bgColor="bg-[#4A4F85] dark:bg-[#31345a]">
              <span className="tracking-wide">HIRE ME</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
