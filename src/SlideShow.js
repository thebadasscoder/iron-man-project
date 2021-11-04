import React, { Component } from 'react';
import Slider from 'react-slick';

class SlideShow extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div className="slider_container">
        <Slider {...settings}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Slider>
      </div>
    );
  }
}

export default SlideShow;
