import React from "react";
import WorkTicket from "../Components/WorkTicket";
import SiteInfo from "../Json/SiteInfo.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };
  return (
    <div className="dark:bg-gray-900" id="projectSection">
      <div className="max-w-7xl m-auto border-box pt-10 pb-16 overflow-hidden">
        <h1 className="text-3xl text-center sm:text-left sm:pl-10 border-box dark:text-white">
          Recent Projects
        </h1>
        <div className="">
          <Slider {...settings}>
            {SiteInfo
              ? SiteInfo.map((res) => <WorkTicket key={res.id} info={res} />)
              : ""}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
