import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { useTranslation } from 'react-i18next';

export default function Page4() {
  const { t } = useTranslation();
  const page4 = {
    title: t('partners'),
    children: [
      'https://gw.alipayobjects.com/zos/rmsportal/qImQXNUdQgqAKpPgzxyK.svg', // 阿里巴巴
      'https://gw.alipayobjects.com/zos/rmsportal/LqRoouplkwgeOVjFBIRp.svg', // 蚂蚁金服
      'https://gw.alipayobjects.com/zos/rmsportal/TLCyoAagnCGXUlbsMTWq.svg', // 人民网
      'https://gw.alipayobjects.com/zos/rmsportal/HmCGMKcJQMwfPLNCIhOH.svg', // cisco
      'https://gw.alipayobjects.com/zos/rmsportal/aqldfFDDqRVFRxqLUZOk.svg', // GrowingIO
      'https://gw.alipayobjects.com/zos/rmsportal/rqNeEFCGFuwiDKHaVaPp.svg', // 饿了么
      'https://gw.alipayobjects.com/zos/rmsportal/FdborlfwBxkWIqKbgRtq.svg', // 滴滴出行
      'https://gw.alipayobjects.com/zos/rmsportal/coPmiBkAGVTuTNFVRUcg.png', // 飞凡网
    ],
  };

  const children = page4.children.map((img, i) => (
    <Col md={6} xs={24} key={i.toString()} className="page4-item">
      <img src={img} alt="img" />
    </Col>
  ));

  return (
    <Wrapper>
      <div className="page-wrapper page4">
        <div className="page">
          <h1>{page4.title}</h1>
          <i />
          <OverPack playScale="0.3" always={false}>
            <QueueAnim
              component={Row}
              className="page4-item-wrapper"
              key="item"
              leaveReverse
              type="bottom"
            >
              {children}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .page {
    &-wrapper {
      width: 100%;
      will-change: transform;
    }
    width: 100%;
    max-width: 1200px;
    padding: 0 24px;
    margin: auto;
    overflow: hidden;
    > h1 {
      margin: 144px auto 32px;
      font-size: 38px;
      line-height: 46px;
      color: #0d1a26;
      font-weight: 400;
      text-align: center;
    }
    > i {
      width: 64px;
      margin: auto;
      height: 2px;
      display: block;
      background: rgb(22, 217, 227);
      background: linear-gradient(to right, rgba(22, 217, 227, 1) 0%, rgba(22, 119, 227, 1) 100%);
    }
  }

  .page4 {
    min-height: 664px;
    background: #f7f7f7;
    &-item {
      &-wrapper {
        margin-top: 96px;
      }
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 68px;
      img {
        max-width: 94%;
        display: inline-block;
      }
    }
  }
`;
