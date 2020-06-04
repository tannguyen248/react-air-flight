import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

const Hello = () => {
  const { t, i18n } = useTranslation();

  return <Button>{t('hello.label')}</Button>;
};

export default Hello;
