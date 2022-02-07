import React, { useState } from "react";
import Button from "../Components/Button";
import { FaRegSmile } from "react-icons/fa";
import Form from "../Components/Form";

const Contact = () => {
  const [display, setDisplay] = useState(false);
  const displayHandler = () => {
    setDisplay(!display);
  };

  return (
    <div className="mb-14 sm:mb-auto relative dark:bg-gray-700 bg-[url('https://ip413.net/portfolio/Graphics.svg')] dark:bg-[url('https://ip413.net/portfolio/Graphics-dark.svg')] h-[40rem] bg-cover bg-no-repeat bg-top  rounded-bl rounded-br">
      {/* -z-10 */}
      <div className="max-w-7xl m-auto">
        <div className="absolute top-[60%] left-1/2 translate-x-[-50%] ">
          <Button
            transition="transition"
            scale="hover:scale-105"
            type="submit"
            bgColor="bg-gray-200 dark:bg-gray-300"
            text="text-black"
            font="font-medium"
            border="rounded-full"
            onClick={displayHandler}>
            Let's Talk
            <FaRegSmile className="ml-1" />
          </Button>
          {display ? <Form handler={displayHandler} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Contact;
