import React, { useState, useRef } from "react";
import Button from "../Components/Button";
import { FaRegSmile } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import Form from "../Components/Form";

const Contact1 = () => {
  const [display, setDisplay] = useState(false);
  const displayHandler = () => {
    setDisplay(!display);
  };

  return (
    <div className="mb-14 sm:mb-auto relative dark:bg-gray-700 bg-[url('https://ip413.net/portfolio/Graphics.svg')] dark:bg-[url('https://ip413.net/portfolio/Graphics-dark.svg')] h-[40rem] bg-cover bg-no-repeat bg-top  rounded-bl rounded-br">
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

        <div className="flex items-center justify-center absolute bottom-0 left-1 sm:flex-row flex-col">
          <p className="flex items-center p-1 border-box text-white ">
            <a
              href="tel:+918220965738"
              className="flex items-center sm:tracking-wider bg-slate-100 p-2 border-box rounded-full mb-1 shadow-xl hover:shadow-none hover:bg-gray-300 transition">
              <AiOutlinePhone className="text-black " />
            </a>
          </p>
          <p className="flex items-center p-1 border-box text-white ">
            <a
              href="mailto:stevejose4c@gmail.com"
              className="flex items-center gap-1 sm:tracking-wider bg-slate-100 p-2 border-box rounded-full mb-1 shadow-xl hover:shadow-none hover:bg-gray-300 transition">
              <HiOutlineMail className="text-black " />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
