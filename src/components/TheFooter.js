import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import Logo from './Logo';
import { useTranslation } from 'react-i18next';
import { MailFilled } from '@ant-design/icons';
import { Button } from 'antd';
import SocialButton from './SocialButton';

import ScrollAnim from 'rc-scroll-anim';
var Element = ScrollAnim.Element;

const TheFooter = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer id="contact">
      <Content>
        <Logo src={logo} alt="ACT" />
        <Text>{t('about.main')}</Text>
        <Contacts>
          <SocialButton isWechat />
          <SocialButton isWechat={false} />
          <Button icon={<MailFilled />} href="mailto:alyssa@ancattuong.com.vn"></Button>
        </Contacts>
      </Content>
    </FooterContainer>
  );
};

const FooterContainer = styled(Element)`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  background-image: url('http://alavion.like-themes.com/wp-content/uploads/2018/02/footer-bg.png');
  display: flex;
  height: 405px;
  justify-content: center;
  max-width: 100vw;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  height: 300px;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 12px;
  color: white;
  margin-bottom: 10px;

  @media (min-width: 568px) {
    font-size: 18px;
  }
`;

const Contacts = styled.div`
  display: flex;
  justify-coontent: center;

  > * {
    margin-right: 5px;
  }
`;
export default TheFooter;
