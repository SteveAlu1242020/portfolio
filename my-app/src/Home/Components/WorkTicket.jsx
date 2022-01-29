import React from "react";
import Starbucks from "../Images/starbucks.png";
import Button from "./Button";

const WorkTicket = (props) => {
  return (
    // <div
    //   className="p-16 border-box bg-[#AADCEC] h-80 w-[50rem] text-white m-auto border-box rounded-2xl before:content-[''] before:block before:bg-[#4A4F85] before:h-[35rem] before:absolute before:top-[-4rem] before:w-96 before:origin-center before:rotate-[-25deg] before:left-[-2rem]
    // ">
    //   <div className="bg-[#4A4F85]">Hello</div>
    // </div>
    <div className="flex justify-between p-4 border-box items-center h-80 text-white relative">
      <div className="circle_top absolute p-10 border-box bg-white top-[-4rem] right-72 rounded-full"></div>
      <div className="circle_right absolute p-16 border-box bg-white right-[-6rem] rounded-full"></div>
      <div className="circle_bottom absolute p-6 border-box bg-white bottom-[-2rem] right-28 rounded-full"></div>
      <div className="circle_main absolute p-2 h-64 w-64 shadow border-box bg-white rounded-full right-28">
        <div className="absolute text-black left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] w-[25rem]">
          <img src={Starbucks} alt="" className="" />
        </div>
      </div>

      <div className="left z-10 flex flex-col justify-between h-full">
        <div className="text-left">
          <h1 className="font-bold">Trip.com</h1>
          <div className="font-light">
            <p>
              An Awesome Landing Page
              <br />
              That Resembles The Actual Website
              <br />
              Trip.com
            </p>
            <hr className="my-2" />
            <p>
              React.js, SASS, Node,
              <br />
              Express.js, MongoDB, Rest API
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            type="submit"
            bgColor="bg-gray-100"
            text="text-gray-900"
            border="rounded-full">
            <span className="font-medium">View Details</span>
          </Button>
          <Button
            type="submit"
            bgColor="bg-gray-100"
            text="text-gray-900"
            border="rounded-full">
            <span className="font-medium">
              <a href={props.url}>Visit Site</a>
            </span>
          </Button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default WorkTicket;
