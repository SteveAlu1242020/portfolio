import React, { useRef } from "react";
import Html5Logo from "../Images/Html5.png";
import SassLogo from "../Images/Sass.png";
import TailwindLogo from "../Images/Tailwind.png";
import ReactLogo from "../Images/React.png";
import ReduxLogo from "../Images/Redux.png";

import { FaCode, FaUserTie } from "react-icons/fa";
import TypingText from "../Components/TypingText";
import Button from "../Components/Button";

const Experience = () => {
  const ExpSection = useRef(null);
  return (
    <div
      className="relative bg-[#264E86] h-[33rem] md:h-[36rem] lg:h-80 mb-64 dark:bg-gray-800"
      ref={ExpSection}>
      <div className="max-w-7xl m-auto flex flex-col lg:block">
        <div className="p-6 lg:p-10 border-box order-2">
          <div className="lg:w-[50rem] m-auto relative flex flex-col lg:flex-row justify-center items-center">
            <div className="hidden lg:block lg:absolute bg-white p-5 border-box shadow-lg w-56 rounded left-[10%] top-[-4.95rem] z-10">
              I &#x2764; Front-end
            </div>

            <div className="order-2 lg:absolute mb-8 lg:m-auto bg-white p-2 sm:p-8 md:p-10 lg:p-14 border-box shadow-inner md:w-[20rem] lg:w-[25.8rem] rounded right-0 top-2 z-10 border-r-8 border-[#4A4F85]">
              <TypingText />
            </div>

            <div className="lg:absolute order-3 bottom-[-10.3rem] left-[45.6rem] top-6 z-10">
              <Button border="border-none lg:rounded-tl rounded-bl bg-[#4A4F85] px-3 py-2 rounded">
                Contact
              </Button>
            </div>
            <div className="lg:absolute order-1 mb-8 lg:m-auto lg:bg-[#AADCEC] lg:dark:bg-gray-700 p-0 lg:p-10 border-box lg:shadow w-auto lg:w-[30rem] right-[10%] top-[-7.5rem] rounded">
              <div className="flex items-center justify-center">
                <img
                  src={Html5Logo}
                  alt="HTML5"
                  className="w-14 bg-white rounded-full p-2 border-box shadow-md m-1 hover:shadow-lg"
                />
                <img
                  src={SassLogo}
                  alt="SASS"
                  className="w-14 bg-white rounded-full p-2 border-box shadow-md m-1 hover:shadow-lg"
                />
                <img
                  src={TailwindLogo}
                  alt="Tailwind"
                  className="w-14 bg-white rounded-full p-2 border-box shadow-md m-1"
                />
                <img
                  src={ReactLogo}
                  alt="React"
                  className="w-14 bg-white rounded-full p-2 border-box shadow-md m-1 hover:shadow-lg"
                />
                <img
                  src={ReduxLogo}
                  alt="Redux"
                  className="w-14 bg-white rounded-full p-2 border-box shadow-md m-1 hover:shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-white mt-6 lg:m-auto justify-center lg:justify-start lg:pl-[5.5rem]">
          <p className="flex items-center p-3 border-box flex-col justify-center gap-2">
            <FaUserTie className="text-2xl" />
            <strong>3</strong> Years
            <FaCode className="text-2xl" />
            {/* Work Experience */}
          </p>
          <div className="p-3 border-box text-left border-l-2 flex flex-col gap-4 justify-between">
            <p className="">
              Web Designer at AMG Streams, LLC
              <br />
              Florida, United States
              <br />
              <span className="text-sm">2019 - Present</span>
            </p>
            <p className="">
              Front-end Developer Intern at Atlas Softweb
              <br />
              Gujarat, India
              <br />
              <span className="text-sm">2018 - 2019</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
