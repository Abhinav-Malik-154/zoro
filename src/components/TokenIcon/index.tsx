/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */

import { useStyles } from './styles';
import { Token } from '@/types';
import { SerializedStyles } from '@emotion/react';
import React from 'react';

export interface TokenIconProps {
  token: Token;
  className?: string;
}

export const TokenIcon: React.FC<TokenIconProps> = ({ className, token }) => {
  const styles = useStyles();

  if (typeof token.asset === 'function') {
    const Icon = token.asset as React.ComponentType<{
      css: SerializedStyles;
      className: string | undefined;
    }>;

    if (!Icon) {
      return null;
    }

    return <Icon css={styles.icon as any} className={className} />;
  }

  return (
    <img
      src={(token.asset as any).src}
      css={styles.icon}
      alt={token.symbol}
      className={className}
      title={token.symbol}
    />
  );
};
