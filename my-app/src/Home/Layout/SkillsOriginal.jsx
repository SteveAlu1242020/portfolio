import React from "react";
import SkillCapsule from "../Components/SkillCapsule";
import SkillsData from "../Json/SkillsData.json";

const Skills = () => {
  return (
    <div className="bg-[#AADCEC] dark:bg-gray-900">
      <div className="max-w-7xl m-auto border-box pt-10 pb-16 overflow-hidden">
        <h1 className="text-3xl text-center sm:text-left sm:pl-10 border-box dark:text-white">
          Skills
        </h1>
        <p>line + scroll on vertical only on below 903 / upto</p>

        <div className="flex flex-wrap gap-3 items-center justify-center py-10 max-h-96 overflow-y-scroll">
          <SkillCapsule />
          <SkillCapsule />
          <SkillCapsule />
          <SkillCapsule />
          <SkillCapsule />
          <SkillCapsule />
          <SkillCapsule />
          <SkillCapsule />
          <SkillCapsule />
          <SkillCapsule />
          <SkillCapsule />
          <SkillCapsule />
        </div>
      </div>
    </div>
  );
};

export default Skills;
