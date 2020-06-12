import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import ocean from '../assets/ocean.jpg';
import flight from '../assets/flight.jpg';

const TheHeaderCarousel = () => {
  return (
    <SlideContainer id="home">
      <Carousel autoplaySpeed={1800} dots={false}>
        <Slider backgroundSrc={ocean}></Slider>
        <Slider backgroundSrc={flight}></Slider>
      </Carousel>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  overflow: hidden;
  position: relative;
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
  background-image: url(${(props) => props.backgroundSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export default TheHeaderCarousel;
