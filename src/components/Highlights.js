import React from 'react';
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import RightOutlined from '@ant-design/icons';

import Tetris from './technology-comp/Tetris';
import Column from './technology-comp/Column';
import Coordinate from './technology-comp/Coordinate';
import Building from './technology-comp/Building';
import ship from '../assets/ship.png';

const pageData = [
  {
    title: 'Air Freight',
    content:
      'International freight forwarding is often a balancing act between time, cost and environmental concerns',
    Bg: Tetris,
  },
  {
    title: 'Ocean Freight',
    content:
      'By leveraging our strong and long-term carrier relationships, ACT offers you flexible, reliable and secure ocean freight solutions',
    img: <img src={ship} />,
  },
  {
    title: 'Solution consulting',
    content: 'Maximizing Your International, Long and Short Haul Transportation Efficiencies',
    Bg: Column,
  },
  {
    title: 'Customs Services',
    content: 'Node.js & Koa，为企业级框架和应用而生',
    links: (
      <a href="https://eggjs.org" target="_blank">
        查看详情&nbsp;&nbsp;
        <RightOutlined />
      </a>
    ),
    full: true,
    Bg: Building,
  },
];

export default class Design extends React.PureComponent {
  state = {
    hover: null,
  };
  onMouseEnter = (hover) => {
    this.setState({
      hover,
    });
  };
  onMouseLeave = () => {
    this.setState({
      hover: null,
    });
  };
  render() {
    const { isMobile } = this.props;
    const children = pageData.map((item, i) => {
      const colProps = {
        md: item.full ? 24 : 8,
        xs: 24,
      };
      return (
        <Col {...colProps} key={i.toString()} className="page2-item-wrapper">
          <div
            className={`page2-item${item.full ? ' full' : ''}`}
            onMouseEnter={() => {
              this.onMouseEnter(item.title);
            }}
            onMouseLeave={this.onMouseLeave}
          >
            <div className="page2-item-bg">
              {item.Bg &&
                React.createElement(item.Bg, {
                  hover: !isMobile && this.state.hover === item.title,
                  isMobile,
                })}
              {item.img && item.img}
            </div>
            <div className="page2-item-desc">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p className="page2-item-links">{item.links}</p>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <Wrapper>
        <div className="page-wrapper page2">
          <div className="page">
            <h1>SHIPPING SERVICES</h1>
            <i />
            <OverPack className="page2-content">
              <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
                {children}
              </QueueAnim>
            </OverPack>
          </div>
        </div>
      </Wrapper>
    );
  }
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
    >h1 {
      margin: 144px auto 32px;
      font-size: 38px;
      line-height: 46px;
      color: #0d1a26;
      font-weight: 400;
      text-align: center;
    }
    >i {
      width: 64px;
      margin: auto;
      height: 2px;
      display: block;
      background: rgb(22, 217, 227);
      background: linear-gradient(to right, rgba(22, 217, 227, 1) 0%, rgba(22, 119, 227, 1) 100%);
    }
  }
.page2 {
    background: url(https://gw.alipayobjects.com/zos/rmsportal/OciuRSqhtmcYCwJRJWSz.svg) no-repeat top;
    background-size: cover;
    min-height: 1475px;
    text-align: center;
    &-content {
      margin-top: 116px;
    }
    h1 {
      margin: 220px auto 32px;
      color: #fff;
    }
    h4 {
      color: #fff;
    }
    h4 {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 24px;
      text-shadow: 0 8px 12px #194EC1;
    }
    p {
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 32px;
      color: rgba(256, 256, 256, 0.7);
    }
    &-item {
      .card-style();
      max-width: 340px;
      width: 94%;
      border-radius: 4px;
      height: 384px;
      position: relative;
      margin: auto;
      &-wrapper {
        margin-bottom: 48px;
      }
      &.full {
        width: 100%;
        max-width: none;
        height: 420px;
      }
      &-bg {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        width: 100%;
      }
      & img {
          max-width: 190px;
      }
      &-desc {
        padding: 59px 46px 0;
        position: relative;
        z-index: 1;
      }
      &-links {
        margin-bottom: 58px;
        a {
          color: #fff;
          margin: 0 12px;
        }
      }
      .effect {
        height: 205px;
        background: url(https://gw.alipayobjects.com/zos/rmsportal/tGoBjrGoqlhsmCSSabgQ.svg) no-repeat;
        background-size: 100% 100%;
      }
    }
  }
`;
