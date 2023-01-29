import "./Home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ImageSlider = ({ imagess }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="tag">
        <div className="limitedtimeHeadingDiv">
          <h2 className="limitedtimeHeading">Savings to Bring in the Season</h2>
        </div>
      </div>
      <div align="center" className="imgslider">
        <Carousel
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          rewind={true}
          rewindWithAnimation={true}
        >
          {imagess.map((item) => (
            <div key={item.id} className="slider_info">
              <div>
                <img src={item.src} alt={item.alt} className="slider-img" />
              </div>
              <div className="slides">
                <h3 className="">{item.heading}</h3>
                <h4 className="">{item.subhead}</h4>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
