/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material';
import BigNumber from 'bignumber.js';
import React, { PropsWithChildren } from 'react';
import { Token } from '@/types';
import { convertWeiToTokens } from '@/utilities';

import { ZkLink } from '../ZkLink';
import { Icon } from '../Icon';
import { Modal, ModalProps } from '../Modal';
import { TokenIcon } from '../TokenIcon';
import { useStyles } from './styles';

export interface SuccessfulTransactionModalProps
  extends Omit<ModalProps, 'content'> {
  title: string;
  content?: string | React.ReactElement;
  transactionHash: string;
  amount?: {
    token: Token;
    valueWei: BigNumber;
  };
  className?: string;
}

export const SuccessfulTransactionModal = ({
  className,
  title,
  content,
  amount,
  transactionHash,
  isOpen,
  handleClose,
}: Omit<SuccessfulTransactionModalProps, 'children'>) => {
  const styles = useStyles();

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className={className} css={styles.container}>
        <Icon name='check' css={styles.headerIcon} />

        <h3 css={styles.title}>{title}</h3>

        <div css={styles.messageContainer}>
          {!!content && (
            <Typography variant='small1' component='p'>
              {content}
            </Typography>
          )}
          {amount && (
            <div css={styles.amountContainer}>
              <TokenIcon token={amount.token} css={styles.amountTokenIcon} />

              <Typography variant='small1' component='span'>
                {convertWeiToTokens({
                  valueWei: amount.valueWei,
                  token: amount.token,
                  returnInReadableFormat: true,
                })}
              </Typography>
            </div>
          )}
        </div>

        <ZkLink hash={transactionHash} urlType='tx' />
      </div>
    </Modal>
  );
};
