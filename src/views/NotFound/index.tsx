/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import React from 'react';

import { useTranslation } from '@/translation';
import { useStyles } from './styles';
import LogoMobile from '@/assets/img/Logo-01.svg';
import LogoDesktop from '@/assets/img/Logo-02.svg';
import notfound404 from '@/assets/img/404.webp';
import Image from 'next/image';

const NotFound: React.FC = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <div css={styles.notfound as any}>
        <div css={styles.header as any}>
          <div css={styles.logo}>
            <LogoMobile css={styles.logoMobile} />
            <LogoDesktop css={styles.logoDesktop} />
          </div>
          <div css={styles.divider} />
        </div>
        <div css={styles.content as any}>
          <Image
            src={notfound404}
            css={styles.contentImg}
            alt={t('notfound.alt')}
            title={t('notfound.alt')}
          />
          <p css={styles.contentText as any}>{t('notfound.content')}</p>
        </div>
        <div css={styles.ellipseL as any} />
        <div css={styles.ellipseR as any} />
        <div css={styles.bg as any} />
      </div>
    </>
  );
};

export default NotFound;
