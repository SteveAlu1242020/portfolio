import React from "react";
import Designer from "../Images/designer.svg";

const Designs = () => {
  return (
    <div>
      {/*  */}
      <div className=" dark:bg-gray-900 bg-[#AADCEC]" id="skillsSection">
        <div className="max-w-7xl m-auto border-box pt-10 pb-8 overflow-hidden">
          <h1 className="text-3xl text-center sm:text-left sm:pl-10 border-box text-white">
            Designs
          </h1>
          <div className="my-4 mx-10 dark:bg-gray-800 rounded grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-opacity-50 grid bg-white box-border">
            {/* <div className="flex flex-wrap gap-3 my-4 mx-10 rounded items-center justify-center py-10 max-h-96 bg-white box-border"> */}

            <div className="item m-2 ">
              <a
                href="https://ip413.net/portfolio/flyer1.png"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://ip413.net/portfolio/flyer1.png"
                  alt=""
                  className="w-full border dark:border-gray-500 shadow rounded-tl rounded-tr"
                />
              </a>
              <div className="text-left text-sm dark:bg-gray-700 dark:text-white bg-white p-2 box-border mt-[-1px] rounded-bl rounded-br shadow-lg">
                <p>
                  <strong>Type:</strong> Flyer
                </p>
                <p>
                  <strong>Tool:</strong> Canva
                </p>
              </div>
            </div>
            <div className="item m-2 ">
              <a
                href="https://ip413.net/portfolio/flyer2.jpg"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://ip413.net/portfolio/flyer2.jpg"
                  alt=""
                  className="w-full border dark:border-gray-500 shadow rounded-tl rounded-tr"
                />
              </a>
              <div className="text-left text-sm dark:bg-gray-700 dark:text-white bg-white p-2 box-border mt-[-1px] rounded-bl rounded-br shadow-lg">
                <p>
                  <strong>Type:</strong> Flyer
                </p>
                <p>
                  <strong>Tool:</strong> Adobe PhotoShop
                </p>
              </div>
            </div>

            <div className="item m-2 ">
              <a
                href="https://ip413.net/portfolio/bookCover1.jpg"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://ip413.net/portfolio/bookCover1.jpg"
                  alt=""
                  className="w-full border  dark:border-gray-500 shadow rounded-tl rounded-tr"
                />
              </a>
              <div className="text-left text-sm dark:bg-gray-700 dark:text-white bg-white p-2 box-border mt-[-1px] rounded-bl rounded-br shadow-lg">
                <p>
                  <strong>Type:</strong> Book Cover
                </p>
                <p>
                  <strong>Tool:</strong> Adobe PhotoShop
                </p>
              </div>
            </div>

            <div className="hidden sm:flex md:hidden lg:flex item ml-2 pr-2 box-border dark:bg-gray-700 bg-white rounded-tr rounded-br  align-center justify-center">
              <img src={Designer} alt="designer" className="w-3/4 " />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Designs;
