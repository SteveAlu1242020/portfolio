import React from "react";
import WorkTicket from "../Components/WorkTicket";
import SiteInfo from "../Json/SiteInfo.json";

const Projects = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="max-w-7xl  m-auto border-box pt-10 pb-20">
        <h1 className="text-3xl text-left pl-10 border-box dark:text-white">
          Recent Projects
        </h1>
        <div className="my-10">
          <div className="relative w-80 md:w-[44rem] lg:w-[50rem] m-auto overflow-hidden rounded-2xl bg-[#AADCEC] dark:bg-gray-700 border-box hover:shadow-lg cursor-pointer">
            <div
              className=" 
        before:content-['']
        before:text-white
        before:bg-[#4A4F85]
        before:dark:bg-[#31345a]        
        md:before:rotate-[-25deg]
        before:p-10
        before:border-box
        before:absolute
        before:left-[-4rem]
        before:top-80
        md:before:top-[-2rem]
        before:h-[35rem]
        before:w-[26rem]        
      ">
              {SiteInfo
                ? SiteInfo.map((res) => <WorkTicket key={res.id} info={res} />)
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
