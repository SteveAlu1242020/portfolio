import React, { useRef, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Button from "../Home/Components/Button";

import { animateScroll as scroll } from "react-scroll";

const ScrollTopResponsive = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 200) {
        backToTop.current.style.transform = "translateX(-0.20rem)";
        backToTop.current.style.opacity = "0";
        backToTop.current.style.transition = "all 300ms ease-out";
      } else {
        backToTop.current.style.display = "block";
        backToTop.current.style.opacity = "0.8";
        backToTop.current.style.transform = "translateX(0)";
        backToTop.current.style.transition = "all 300ms ease-in";
      }
    });
  });

  const backToTop = useRef(null);

  return (
    <div
      className="hidden right-16 sm:right-4 bottom-4 z-50 fixed hover:opacity-100"
      ref={backToTop}>
      <div onClick={scrollToTop}>
        <Button bgColor="sm:bg-white sm:text-black sm:dark:bg-gray-800 sm:dark:text-white">
          <FaArrowUp />
        </Button>
      </div>
    </div>
    // <div className="hidden right-16 bottom-[0.7rem] z-50 fixed" ref={backToTop}>
    //   <div
    //     className="shadow text-white border px-5 py-2 rounded border-box hover:shadow-lg hover:cursor-pointer opacity-70 hover:opacity-100"
    //     onClick={takeMeTop}>
    //     <Button>
    //       <FaArrowUp />
    //     </Button>
    //   </div>
    // </div>
  );
};

export default ScrollTopResponsive;
