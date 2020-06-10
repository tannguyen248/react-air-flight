import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import Logo from './Logo';

const TheFooter = () => {
  return (
    <FooterContainer>
      <Content>
        <Logo src={logo} alt="ACT" />
        <div>
          Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum
          mattis, nisi ut faucibus commodo, risus ex commodo.
        </div>
      </Content>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #1e1f2d;
  background-image: url('http://alavion.like-themes.com/wp-content/uploads/2018/02/footer-bg.png');
  height: 605px;
  max-width: 100vw;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

export default TheFooter;
