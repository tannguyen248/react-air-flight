import React from 'react';
import { Modal, Button } from 'antd';
import { WechatFilled, QqSquareFilled } from '@ant-design/icons';
import styled from 'styled-components';

function info(text) {
  console.log('info');
  Modal.info({
    title: 'This is a notification message',
    content: (
      <Wrapper>
        <img src="https://vi.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/basic_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" />
        {text}
      </Wrapper>
    ),
    onOk() {},
  });
}

const SocialButton = ({ isWechat, ...props }) => {
  return (
    <>
      {isWechat ? (
        <Button onClick={() => info('素英')} icon={<WechatFilled />} {...props} />
      ) : (
        <Button onClick={() => info('172 505 3735')} icon={<QqSquareFilled />} {...props} />
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-right: 38px;
  img {
    height: 100px;
    width: 100px;
  }
`;
export default SocialButton;
