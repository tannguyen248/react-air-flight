import React from 'react';
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { useTranslation } from 'react-i18next';
import ScrollAnim from 'rc-scroll-anim';
var Element = ScrollAnim.Element;

export default function Page2() {
  const { t } = useTranslation();

  return (
    <Wrapper id="about-us">
      <OverPack always={false} component="section" className="page-wrapper page2">
        <QueueAnim type="bottom" className="page text-center" key="page">
          <h2 key="title">{t('about')}</h2>
          <span key="line" className="separator" />
          <QueueAnim type="bottom" className="info-content" key="content">
            <p className="main-info" key="1">
              {t('about.main')}
            </p>
            <p className="main-info" key="2">
              {t('about.sub')}
            </p>
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </Wrapper>
  );
}

const Wrapper = styled(Element)`
  .page-wrapper {
    width: 100%;
    padding: 0;
    overflow: hidden;
    .title {
      text-transform: uppercase;
    }
    .page {
      width: 90%;
      max-width: 1200px;
      margin: auto;
      position: relative;
      h2 {
        margin-bottom: 30px;
        font-size: 2rem;
      }
      .separator {
        margin-bottom: 65px;
        display: inline-block;
        width: 30px;
        height: 5px;
        background: #1890ff;
        border-radius: 2.5px;
      }
    }
  }
  .page2 {
    min-height: 555px;
    .page {
      padding: 112px 0 146px;
    }
    .info-content {
      max-width: 900px;
      line-height: 48px;
      margin: 0 auto;
      font-size: 20px;
      font-weight: 300;
    }
  }
`;
