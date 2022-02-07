import React, { useRef, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 200) {
        backToTop.current.style.transform = "translateX(10rem)";
        backToTop.current.style.transition = "all 500ms ease-out";
      } else {
        backToTop.current.style.display = "block";
        backToTop.current.style.transform = "translateX(0)";
        backToTop.current.style.transition = "all 1000ms ease-in";
      }
    });
  });

  const backToTop = useRef(null);

  const takeMeTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      className="sm:fixed sm:right-5 bottom-2 sm:bottom-5 z-50 hidden "
      ref={backToTop}>
      <div
        className="shadow bg-white dark:bg-gray-500 dark:text-white p-3 rounded border-box hover:shadow-lg hover:cursor-pointer opacity-70 hover:opacity-100"
        onClick={takeMeTop}>
        <FaArrowUp />
      </div>
    </div>
  );
};

export default ScrollTop;
