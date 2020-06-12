import React from 'react';
import styled from 'styled-components';

const Image = ({ src, isBig }) => {
  return <ImageWrapper src={src} isBig={isBig} />;
};

const ImageWrapper = styled.img`
  height: ${(props) => (props.isBig ? '80px' : '100px')};
`;

export default Image;
