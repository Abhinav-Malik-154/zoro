/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import ConnectButton from '../ConnectButton';
import ContractCallButton from '@/components/ContractCallButton';
import { Toolbar } from '../Toolbar';
import Breadcrumbs from './Breadcrumbs';
import { useStyles } from './styles';
import AppBar from '@mui/material/AppBar';
import React from 'react';

const Header: React.FC = () => {
  const styles = useStyles();
  return (
    <AppBar position='relative' css={styles.appBar} className='header-wrap'>
      <Toolbar css={styles.toolbar}>
        <Breadcrumbs />
        <div css={styles.ctaContainer}>
          {/* Contract call button — left of Connect Wallet */}
          <ContractCallButton />
          <ConnectButton />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;