import React from 'react';
import styled from 'styled-components';

import { Affix, Badge } from 'antd';
import SocialButton from './SocialButton';

const MessengerContainer = () => {
  return (
    <>
      <Affix
        style={{ position: 'fixed', right: '15px' }}
        offsetBottom={80}
        onChange={(affixed) => console.log(affixed)}
      >
        <Badge dot>
          <SocialButton shape="circle-outline" size="large" isWechat={false} />
        </Badge>
      </Affix>
      <Affix
        style={{ position: 'fixed', right: '15px' }}
        offsetBottom={140}
        onChange={(affixed) => console.log(affixed)}
      >
        <Badge dot>
          <SocialButton shape="circle-outline" size="large" isWechat />
        </Badge>
      </Affix>
    </>
  );
};

const ContenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 10px;
    cursor: pointer;
  }

  .zaloContainer {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;

export default MessengerContainer;
