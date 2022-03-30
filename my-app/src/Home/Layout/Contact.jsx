import React, { useState, useRef } from "react";
import Button from "../Components/Button";
import { FaRegSmile } from "react-icons/fa";
import { AiOutlinePhone, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import Form from "../Components/Form";
import Resume from "../Downloads/Stephen-Samuel_Resume.pdf";

const Contact = () => {
  const [display, setDisplay] = useState(false);
  const displayHandler = () => {
    setDisplay(!display);
  };

  return (
    <div className="mb-14 sm:mb-auto relative dark:bg-gray-700 bg-[url('https://ip413.net/portfolio/Graphics.svg')] dark:bg-[url('https://ip413.net/portfolio/Graphics-dark.svg')] h-[54rem] lg:h-[40rem] bg-cover bg-no-repeat bg-top  rounded-bl rounded-br">
      {/* -z-10 */}
      <div className="max-w-7xl m-auto">
        <div
          className="absolute top-[60%] left-1/2 translate-x-[-50%] "
          id="contactSection">
          <Button
            transition="transition"
            scale="hover:scale-105"
            type="submit"
            bgColor="bg-gray-200 dark:bg-gray-300"
            text="text-black"
            font="font-medium"
            border="rounded-full"
            onClick={displayHandler}>
            Let's Chat
            <FaRegSmile className="ml-1" />
          </Button>
          {display ? <Form handler={displayHandler} /> : ""}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-center absolute bottom-0 lg:left-1 w-full lg:w-auto">
          <p className="flex items-center border-box text-white bg-[#0000005c] lg:m-[0.5rem]  lg:rounded-2xl px-2 py-1 hover:text-gray-300 transition">
            <a
              href="tel:+974 6673 5247"
              className="flex items-center sm:tracking-wider">
              <AiOutlinePhone className="mr-1" />
              <span className="hover:scale-95">+974 6673 5247</span>
            </a>
            ,
            <a
              href="tel:+974 3050 9017"
              className="flex items-center sm:tracking-wider ml-1">
              <span className="hover:scale-95">3050 9017</span>
            </a>
          </p>

          <p className="flex items-center border-box text-white bg-[#0000005c] lg:m-[0.5rem]  lg:rounded-2xl px-2 py-1">
            <a
              href="mailto:stevejose4c@gmail.com"
              className="flex items-center gap-1 sm:tracking-wider hover:text-gray-300 transition">
              <HiOutlineMail />
              stevejose4c@gmail.com
            </a>
          </p>

          <p className="flex items-center border-box text-white bg-[#0000005c] lg:m-[0.5rem]  lg:rounded-2xl px-2 py-1">
            <a
              href="https://www.linkedin.com/in/stephen-j-samuel/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 sm:tracking-wider hover:text-gray-300 transition">
              <AiFillLinkedin />
              linkedin.com/in/stephen-j-samuel
            </a>
          </p>

          <p className="flex items-center border-box text-white bg-[#0000005c] lg:m-[0.5rem]  lg:rounded-2xl px-2 py-1 hover:text-gray-300 transition  rounded-bl rounded-br">
            <a
              href={Resume}
              className="flex items-center sm:tracking-wider"
              download>
              <FiDownload className="mr-1" />
              resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
