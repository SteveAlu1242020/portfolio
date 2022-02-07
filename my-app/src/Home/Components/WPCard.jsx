import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const WPCard = (props) => {
  const { info, custom } = props;
  return (
    <div className="">
      <div
        className={`${custom} " mb-10 sm:mb-auto relative bg-white dark:bg-gray-700 dark:text-white border-t-2 border-b-2 shadow hover:-translate-y-1 hover:shadow-lg transition duration-200 rounded-lg text-left w-52 h-72 p-4 border-box"`}>
        <h2 className="text-2xl">{info.title ? info.title : "Healthcare"}</h2>
        <p className="text-sm">
          {info.urlAddress ? info.urlAddress : "www.cfidoffice.com"}
        </p>
        <p className="text-sm font-bold flex gap-1 items-center hover:translate-x-1 transition">
          <a
            href={info.visitLink ? info.visitLink : "www.cfidoffice.com"}
            target="_blank"
            rel="noreferrer">
            Visit Now
          </a>
          <FaLongArrowAltRight className="" />
        </p>
        <div>
          <img
            src={info.image ? info.image : ""}
            alt={info.alt ? info.alt : "image"}
            className="absolute w-40 right-0 bottom-0 shadow rounded-tl-2xl "
          />
        </div>
      </div>
    </div>
  );
};

export default WPCard;
