import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import ocean from '../assets/ocean.jpg';
import flight from '../assets/flight.jpg';

const TheHeaderCarousel = () => {
  return (
    <SlideContainer>
      <Carousel autoplay autoplaySpeed={1800} dots={false}>
        <Slider>
          <img src={ocean} />
        </Slider>
        <Slider>
          <img src={flight} />
        </Slider>
        {/* <Slider>
          <img src="http://alavion.like-themes.com/wp-content/uploads/2018/02/SLIDE_01.jpg" />
        </Slider> */}
      </Carousel>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 110vh;

  .slick-slide {
    transition: transform 2s;
  }

  .slick-active.slick-current {
    transform: scale(1.1);
  }
`;

const Slider = styled.div`
  height: 110vh;

  img {
    max-height: 110vh;
    height: 110vh;
  }
`;

export default TheHeaderCarousel;
