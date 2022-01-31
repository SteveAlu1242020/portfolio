import React from "react";
import Starbucks from "../Images/starbucks.png";
import Button from "./Button";

const WorkTicket = (props) => {
  const { info } = props;
  return (
    <div className="flex justify-between p-4 border-box items-center h-[36rem] md:h-64 lg:h-80 text-white relative md:flex-row flex-col">
      <div className="circle_top hidden md:block absolute p-10 border-box bg-white top-[-4rem] right-72 rounded-full"></div>
      <div className="circle_right absolute p-16 border-box bg-white right-[-6.5rem] md:right-[-6rem] rounded-full"></div>
      <div className="circle_bottom absolute p-6 border-box bg-white bottom-[-2rem] right-6 md:right-28 rounded-full"></div>
      <div
        className="circle_main absolute p-2 h-48 lg:h-64 w-48 lg:w-64 shadow border-box bg-white rounded-full right-28
      left-[50%] md:left-auto translate-x-[-50%] md:translate-x-0 top-16 md:top-auto
      ">
        <div className="absolute text-black left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] w-80 lg:w-[25rem]">
          <img src={info.image ? info.image : Starbucks} alt="" className="" />
        </div>
      </div>

      <div className="left z-10 flex flex-col justify-end gap-4 md:justify-between h-full">
        <div className="text-left">
          <h1 className="font-bold">
            {info.title ? info.title : "*No Title*"}
          </h1>
          <div className="font-light">
            <p>
              {info.description.p1 ? info.description.p1 : "*No Data*"}
              <br />
              {info.description.p2 ? info.description.p2 : "*No Data*"}
              <br />
              {info.description.p3 ? info.description.p3 : "*No Data*"}
            </p>
            <hr className="my-2" />
            <p>
              React.js, SASS, Node,
              <br />
              Express.js, MongoDB, Rest API
            </p>
          </div>
        </div>
        <div className="flex gap-4 mb-3 md:mb-full">
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
              <a
                href={props.url ? props.url : "/"}
                rel="noreferrer"
                target="_blank">
                Visit Site
              </a>
            </span>
          </Button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default WorkTicket;
