import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import img1 from "./images/mimg1.jpg";
import img2 from "./images/mimg2.jpg";
import img3 from "./images/mimg3.jpg";
import { Link } from "react-router-dom";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div>
        <div
          id="tl"
          style={{
            width: "auto",
            height: "500px",
            margin: "0 auto",
            padding: "0 350px",
            backgroundColor: "black",
          }}
        >
          <Slider {...settings}>
            <div className="img">
              <Link to="/musical">
                <img src={img1} />
              </Link>
            </div>
            <div className="img">
              <Link to="/musical">
                <img src={img2} />
              </Link>
            </div>
            <div className="img">
              <Link to="/musical">
                <img src={img3} />
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
