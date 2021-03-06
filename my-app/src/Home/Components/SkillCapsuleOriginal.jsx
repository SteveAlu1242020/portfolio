import React from "react";
import Html5 from "../Images/Html5.png";

const SkillCapsule = () => {
  return (
    <div
      className="w-72  dark:border-transparent p-2 border-box rounded-lg hover:shadow-md dark:bg-gray-700 transition
      backdrop-blur-xl bg-white/30 bg-clip-padding backdrop-filter bg-opacity-60">
      <div className="main flex items-center justify-between gap-2">
        <div className="left p-2 border-box rounded-full border bg-white">
          <img src={Html5} alt="HTML5" className="w-12" />
        </div>
        <div className="right w-full bg-gray-200 dark:bg-gray-500 rounded-full">
          <div
            className="bg-gradient-to-r from-blue-500 to-[#264E86] text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-l-full"
            style={{ width: "25%" }}>
            {" "}
            25%
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCapsule;
