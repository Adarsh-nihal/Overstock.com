
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect,useState } from "react";
import "./Home.css";
import {  useMediaQuery } from "@chakra-ui/react";

export const ImageSlider = ({ imagess }) => {

 const [count,setCount]=useState(4)

 function SlideCount(){
  if(useMediaQuery(`(media(min-width:900px))`)){
    return 4
   }
   else{
    return 2
   }
 }

 

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: SlideCount(),
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    focusOnSelect: true,
  };
  return (
    <>
      <div className="tag">
        <div className="limitedtimeHeadingDiv">
          <h2 className="limitedtimeHeading">Savings to Bring in the Season</h2>
        </div>
      </div>
      <div className="imgslider">
        <Slider {...settings}>
          {imagess.map((item) => (
            <div key={item.id} className="slider_info">
              <div>
                <img src={item.src} alt={item.alt} />
              </div>
              <div className="slides">
                <h3 className="">{item.heading}</h3>
                <h4 className="">{item.subhead}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};