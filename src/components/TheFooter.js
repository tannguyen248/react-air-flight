import React from 'react';
import styled from 'styled-components';

const TheFooter = () => {
  return (
    <FooterContainer>
      <Content>
        <img
          src="//alavion.like-themes.com/wp-content/uploads/2018/02/logo_1x_white.png"
          alt="Alavion"
          srcset="//alavion.like-themes.com/wp-content/uploads/2018/02/logo_1x_white.png 1x,//alavion.like-themes.com/wp-content/uploads/2018/02/logo_2x_white.png 2x"
        />
        <div>Etiam consequat sem ullamcorper, euismod metus sit amet, tristique justo. Vestibulum mattis, nisi ut faucibus commodo, risus ex commodo.</div>
      </Content>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #1e1f2d;
  background-image: url('http://alavion.like-themes.com/wp-content/uploads/2018/02/footer-bg.png');
  height: 605px;
  width: 100vw;
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
