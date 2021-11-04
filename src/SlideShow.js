import React, { Component } from 'react';
import Slider from 'react-slick';

class SlideShow extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className="slider_container">
        <Slider {...settings}>
          <div>
            <img src="./public/assets/comic1.png" />
          </div>
          <div>
            <img src="./public/assets/comic2.png" />
          </div>
          <div>
            <img src="./public/assets/comic3.png" />
          </div>
          <div>
            <img src="./public/assets/comic4.png" />
          </div>
          <div>
            <img src="./public/assets/comic5.png" />
          </div>
          <div>
            <img src="./public/assets/comic6.png" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SlideShow;
