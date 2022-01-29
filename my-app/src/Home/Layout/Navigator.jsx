import React, { useContext } from "react";
import Button from "../Components/Button";
import { FaRegMoon, FaSun } from "react-icons/fa";
import Menu from "./Menu";
import { menuDisplayContext } from "../../App";

const Navigator = ({ dark, setDark }) => {
  const [menuOpen, setMenuOpen] = useContext(menuDisplayContext);
  return (
    <div className="w-full p-3 bg-gray-900  fixed left-0 right-0 bottom-0 sm:hidden shadow-2xl z-30 flex justify-between items-center">
      <div className="px-2 border-box">
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
      <div className="text-white relative">
        <div className="absolute top-[-282px] left-[-192px]">
          {menuOpen && <Menu className="" />}
        </div>
        <p
          className="cursor-pointer"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}>
          Menu
        </p>
      </div>
    </div>
  );
};

export default Navigator;
