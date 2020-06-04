import React from 'react';
import styled from 'styled-components';
import { Menu, Carousel } from 'antd';

const TheHeader = () => {
  return (
    <HeaderContainer>
      <SlideContainer>
        <Carousel autoplay autoplaySpeed={2000} dots={false}>
          <Slider>
            <img src="http://alavion.like-themes.com/wp-content/uploads/2018/02/SLIDE_01.jpg" />
          </Slider>
          <Slider>
            <img src="http://alavion.like-themes.com/wp-content/uploads/2018/02/SLIDE_01.jpg" />
          </Slider>
          <Slider>
            <img src="http://alavion.like-themes.com/wp-content/uploads/2018/02/SLIDE_01.jpg" />
          </Slider>
        </Carousel>
      </SlideContainer>
      <NavigationContainer>
        <Navigation>
          <Logo>
            <img
              src="//alavion.like-themes.com/wp-content/uploads/2018/02/logo_1x_white.png"
              alt="Alavion"
              srcset="//alavion.like-themes.com/wp-content/uploads/2018/02/logo_1x_white.png 1x,//alavion.like-themes.com/wp-content/uploads/2018/02/logo_2x_white.png 2x"
            />
          </Logo>
          <Menu mode="horizontal">
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About us</Menu.Item>
            <Menu.Item>Product</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu>
        </Navigation>
      </NavigationContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100vw;
`;

const NavigationContainer = styled.div`
  background-color: transparent;
  height: 100px;
  position: absolute;
  width: 100%;
  padding: 0 5%;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  width: 30%;
`;

const Navigation = styled.nav`
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  height: 100%;
  justify-content: space-between;

  .ant-menu {
    background-color: transparent;
  }

  .ant-menu-horizontal {
    border-bottom: none;
  }
`;

const SlideContainer = styled.div`
  overflow: hidden;
  position: relative;

  .slick-slide {
    transition: transform 2s;
  }

  .slick-active.slick-current {
    transform: scale(1.1);
  }
`;

const Slider = styled.div`
  height: 110vh;
`;

export default TheHeader;
