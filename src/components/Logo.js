import React from 'react';
import styled from 'styled-components';

const Image = ({ src }) => {
  return <ImageWrapper src={src} />;
};

const ImageWrapper = styled.img`
  height: 80px;
`;

export default Image;
