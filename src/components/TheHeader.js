import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, Button, Dropdown, Drawer } from 'antd';
import TheHeaderCarousel from './TheHeaderCarousel';
import logo from '../assets/logo.png';
import Logo from './Logo';
import { useTranslation } from 'react-i18next';
import { MenuFoldOutlined, DownOutlined } from '@ant-design/icons';

import ScrollAnim from 'rc-scroll-anim';
var Link = ScrollAnim.Link;

const TheHeader = () => {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  function handleMenuClick(e) {
    console.log(e);
    i18n.changeLanguage(e.key);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="cn">中文</Menu.Item>
    </Menu>
  );

  const NavigationMenu = () => {
    const isMobile = window.innerWidth < 768;
    return (
      <>
        {isMobile ? (
          <>
            <Button type="primary" onClick={showDrawer} icon={<MenuFoldOutlined />} />
            <Drawer
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
              style={{ backgroundColor: 'transparent' }}
            >
              <Menu className="verticalMenu" mode="vertical">
                <Item>
                  <Link to="home">{t('home')}</Link>
                </Item>
                <Item>
                  <Link to="about-us">{t('about')}</Link>
                </Item>
                <Item>
                  <Link to="services">{t('services')}</Link>
                </Item>
                <Item>
                  <Link to="contact">{t('contact')}</Link>
                </Item>
                <Dropdown overlay={menu}>
                  <Button type="text" className="languageSelector">
                    {i18n.language === 'cn' ? '中文' : 'English'} <DownOutlined />
                  </Button>
                </Dropdown>
              </Menu>
            </Drawer>
          </>
        ) : (
          <Menu mode="horizontal">
            <Item>
              <Link to="home">{t('home')}</Link>
            </Item>
            <Item>
              <Link to="about-us">{t('about')}</Link>
            </Item>
            <Item>
              <Link to="services">{t('services')}</Link>
            </Item>
            <Item>
              <Link to="contact">{t('contact')}</Link>
            </Item>
            <Dropdown overlay={menu}>
              <Button type="text" className="languageSelector">
                {i18n.language === 'cn' ? '中文' : 'English'} <DownOutlined />
              </Button>
            </Dropdown>
          </Menu>
        )}
      </>
    );
  };

  return (
    <HeaderContainer>
      <TheHeaderCarousel />
      <NavigationContainer>
        <Navigation>
          <LogoContainer>
            <Logo src={logo} alt="ACT" />
          </LogoContainer>
          <NavigationMenu />
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

  .languageSelector {
    color: white;
  }
`;

const LogoContainer = styled.div`
  width: 30%;
`;

const Navigation = styled.nav`
  align-items: center;
  //border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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

  .verticalMenu & {
    color: black;
  }
`;

export default TheHeader;
