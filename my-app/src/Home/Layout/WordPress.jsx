import React from "react";
import WPCard from "../Components/WPCard";
import WPInfo from "../Json/WPInfo.json";

const WordPress = () => {
  return (
    <div className="bg-[#F4F9FC] dark:bg-gray-800">
      <div className="max-w-7xl m-auto border-box py-10 overflow-hidden">
        <h1 className="text-3xl text-center sm:text-right sm:pr-10 border-box dark:text-white">
          WordPress Projects
        </h1>

        <div className="flex justify-center my-10">
          <div className="sm:grid sm:grid-cols-2 lg:flex align-center gap-8">
            {WPInfo
              ? WPInfo.map((res) => (
                  <WPCard
                    key={res.id}
                    info={res}
                    custom={res.id % 2 === 0 ? "sm:mt-8 lg:mt-10 " : ""}
                  />
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordPress;
