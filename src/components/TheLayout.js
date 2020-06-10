import React from 'react';
import styled from 'styled-components';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

const TheLayout = ({ children }) => {
  return (
    <div>
      <TheHeader />
      {children}
      <TheFooter />
    </div>
  );
};

export default TheLayout;
