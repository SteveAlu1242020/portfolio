import React from "react";
import WorkTicket from "../Components/WorkTicket";

const Projects = () => {
  return (
    //     <div className="max-w-7xl bg-red-200 m-auto border-box pt-10 pb-20">
    //     <h1 className="text-4xl">Recent Projects</h1>

    //     <div className="m-auto bg-green-300 w-[50rem] rounded-2xl">
    //       <div className="m-8 relative overflow-hidden w-[50rem]">
    //         <WorkTicket />
    //       </div>
    //     </div>
    //   </div>
    <div className="max-w-7xl  m-auto border-box pt-10 pb-20">
      {" "}
      {/* bg-green-200 */}
      <h1 className="text-4xl text-left pl-10 border-box">Recent Projects</h1>
      <div className="m-10">
        <div className="relative w-[50rem] m-auto overflow-hidden rounded-2xl bg-[#AADCEC] border-box hover:shadow-lg cursor-pointer">
          <div
            className=" 
        before:content-['']
        before:text-white
        before:bg-[#4A4F85]
        before:rotate-[-25deg]
        before:p-10
        before:border-box
        before:absolute
        before:left-[-4rem]
        before:top-[-2rem]
        before:h-[35rem]
        before:w-[26rem]
        
      ">
            <WorkTicket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
