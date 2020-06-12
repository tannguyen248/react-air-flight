import React from 'react';
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import Building from './technology-comp/Building';
import { withTranslation } from 'react-i18next';

import ScrollAnim from 'rc-scroll-anim';
var Element = ScrollAnim.Element;

class Design extends React.PureComponent {
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
    const { isMobile, t } = this.props;
    const pageData = [
      {
        title: t('services.air'),
        content: t('services.air.des'),
        Bg:
          'https://us.123rf.com/450wm/tratong/tratong1702/tratong170200036/71961962-air-cargo-freighter.jpg?ver=6',
      },
      {
        title: t('services.ocean'),
        content: t('services.ocean.des'),
        Bg:
          'https://www.apllogistics.com/wp-content/uploads/2019/05/Home_End-to-end-solutions-2880x1618.jpg',
      },
      {
        title: t('services.solution'),
        content: t('services.solution.des'),
        Bg:
          'https://www.apllogistics.com/wp-content/uploads/2019/05/Home_Adaptability-2401x1800.jpg',
      },
      {
        title: t('services.customs'),
        content: t('services.customs.des'),
        full: true,
        Bg: Building,
      },
    ];

    const children = pageData.map((item, i) => {
      const colProps = {
        md: item.full ? 24 : 8,
        xs: 24,
      };
      return (
        <>
          {item.full ? (
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
          ) : (
            <Col className="card-wrapper page2-item-wrapper" key={i.toString()} md={8} xs={24}>
              <div className="card" href={item.href} style={{ backgroundImage: `url(${item.Bg})` }}>
                {/* <div className="backdrop"></div> */}
                <h3 className="title">{item.title}</h3>
                <div className="card-body">
                  <span className="description text-secondary">{item.content}</span>
                </div>
              </div>
            </Col>
          )}
        </>
      );
    });
    return (
      <Wrapper id="services">
        <div className="page-wrapper page2">
          <div className="page">
            <h1>{t('services')}</h1>
            <i />
            <OverPack className="page2-content" always={false}>
              <QueueAnim component={Row} key="queue" type="bottom">
                {children}
              </QueueAnim>
            </OverPack>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled(Element)`
  .backdrop {
  }

  .card {
    text-decoration: none;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .title,
    .description {
      color: rgb(255, 255, 255) !important;
      font-weight: 600;
      font-size: 25px;
    }

    .description {
      font-size: 16px;
      line-height: 1.6;
      letter-spacing: 0.6px;
    }
  }

  // .card::before {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: black;
  //   opacity: 0.6;
  // }

  .card:hover {
    .title,
    .description {
      color: rgba(255, 255, 255, 1) !important;
      font-weight: 700;
    }
  }

  .card-wrapper {
    will-change: transform;
  }

  .card {
    transition: transform 0.3s @ease-out, box-shadow 0.3s @ease-out;
    position: relative;
    color: #868e96;
    display: inline-block;
    max-width: 360px;
    height: 315px;
    padding: 32px;
    box-shadow: 0 2px 2px rgba(84, 48, 132, 0.06);
    margin: 0 auto;
    flex-direction: column;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    text-align: center;
    border-radius: 4px;
    .card-img-top {
      width: 100%;
      border-top-left-radius: calc(0.25rem - 1px);
      border-top-right-radius: calc(0.25rem - 1px);
    }
    h3 {
      font-size: 30px;
    }
    img {
      height: 50px;
      margin: 20px 0;
    }
    &:hover {
      text-decoration: none;
      transform: translateY(-12px);
      box-shadow: 0 12px 24px rgba(84, 48, 132, 0.06);
    }
  }
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
  .page2 {
    background: url(https://gw.alipayobjects.com/zos/rmsportal/OciuRSqhtmcYCwJRJWSz.svg) no-repeat
      top;
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
      text-shadow: 0 8px 12px #194ec1;
    }
    p {
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 32px;
      color: rgba(256, 256, 256, 0.7);
    }
    &-item {
      background: linear-gradient(to bottom, #2469f4, #113bbf);
      box-shadow: 0px 16px 40px #0f2da0;
      transition: transform 0.3s @ease-in-out, box-shadow 0.3s @ease-in-out;
      &:hover {
        transform: translateY(-4px);
        box-shadow: 0px 20px 40px #0f2da0;
      }
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
        background: url(https://gw.alipayobjects.com/zos/rmsportal/tGoBjrGoqlhsmCSSabgQ.svg)
          no-repeat;
        background-size: 100% 100%;
      }
    }
  }
`;

export default withTranslation()(Design);
