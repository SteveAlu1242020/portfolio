import React from "react";
import SkillCapsule from "../Components/SkillCapsule";
import SkillsData from "../Json/SkillsData.json";

// bg-[#AADCEC]
const Skills = () => {
  return (
    <div className=" dark:bg-gray-700" id="skillsSection">
      <div className="max-w-7xl m-auto border-box pt-10 pb-16 overflow-hidden">
        <h1 className="text-3xl text-center sm:text-right sm:pr-10 border-box dark:text-white">
          Skills
        </h1>
        <div className="flex flex-wrap gap-3 items-center justify-center py-10 max-h-96 overflow-y-scroll xl:overflow-hidden">
          {SkillsData
            ? SkillsData.map((res) => <SkillCapsule key={res.id} info={res} />)
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Skills;
