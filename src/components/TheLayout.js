import React from 'react';
import styled from 'styled-components';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

const TheLayout = () => {
  return (
    <div>
      <TheHeader />
      <div>Content</div>
      <TheFooter />
    </div>
  );
};

export default TheLayout;
