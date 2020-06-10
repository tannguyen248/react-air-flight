import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import TheHeaderCarousel from './TheHeaderCarousel';
import logo from '../assets/logo.png';
import Logo from './Logo';

const TheHeader = () => {
  return (
    <HeaderContainer>
      <TheHeaderCarousel />
      <NavigationContainer>
        <Navigation>
          <LogoContainer>
            <Logo src={logo} alt="ACT" />
          </LogoContainer>
          <Menu mode="horizontal">
            <Item>Home</Item>
            <Item>About us</Item>
            <Item>Product</Item>
            <Item>Contact</Item>
          </Menu>
        </Navigation>
      </NavigationContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div``;

const NavigationContainer = styled.div`
  background-color: transparent;
  height: 100px;
  position: absolute;
  width: 100%;
  padding: 0 5%;
  top: 0;
  left: 0;
`;

const LogoContainer = styled.div`
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

const Item = styled(Menu.Item)`
  font-weight: bold;
  color: white;
  font-size: 18px;
`;

export default TheHeader;
