import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/07-astronaut.jpg";
import img2 from "../images/08-bali-beach.jpg";
import img3 from "../images/09-beijing.jpg";
import img4 from "../images/10-borabora.jpg";
import img5 from "../images/11-havana.jpg";
import img6 from "../images/12-eiffel-tower.jpg";

// Custom arrow next and prev buttons

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      accessibility: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slideToScroll: 1,
      centerMode: true,
      fade: true,
      easing: "linear",
      arrows: true,
      autoplaySpeed: 2000,
      autoplay: true,
      centerPadding: "10px",
    };

    return (
      <Slider {...settings} className="slider-box">
        <div className="box">
          <p>
            $ <span>3,224,101</span>{" "}
          </p>
          <img src={img1} alt="product" />
        </div>
        <div className="box">
          <p>
            $ <span>1,265</span>{" "}
          </p>
          <img src={img2} alt="product" />
        </div>
        <div className="box">
          <p>
            $ <span>935</span>{" "}
          </p>
          <img src={img3} alt="product" />
        </div>
        <div className="box">
          <p>
            $ <span>1,062</span>{" "}
          </p>
          <img src={img4} alt="product" />
        </div>
        <div className="box">
          <p>
            $ <span>2,150</span>{" "}
          </p>
          <img src={img5} alt="product" />
        </div>
        <div className="box">
          <p>
            $ <span>1,185</span>{" "}
          </p>
          <img src={img6} alt="product" />
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;
