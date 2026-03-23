'use client';

import { css } from '@emotion/react';
import { useTheme } from '@mui/material';
import { isFeatureEnabled } from '@/utilities';

export const useStyles = () => {
  const theme = useTheme();

  const styles = {
    container: {
      padding: `${theme.spacing(2)}`,
      backgroundColor: `${theme.palette.secondary.main}`,
      borderRadius: `${theme.spacing(6)}`,
      marginBottom: `${theme.spacing(6)}`,
      border: `1px ${theme.palette.secondary.light} solid`,
    },
    header: {
      marginBottom: `${
        !isFeatureEnabled('isolatedPools') && theme.breakpoints.down('xl')
          ? theme.spacing(6)
          : 0
      }`,
    },
    headerBottomRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
    tags: {
      display: `flex`,
      alignItems: `center`,
      flexWrap: `wrap`,
      marginRight: `${theme.spacing(4)}`,
      marginTop: `${theme.spacing(-2)}`,
      [theme.breakpoints.down('xl')]: {
        marginRight: 0,
      },
      [theme.breakpoints.down('md')]: {
        flexWrap: 'nowrap',
        overflowY: 'auto',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',

        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
    tag: {
      borderRadius: `${theme.spacing(6)}`,
      padding: `${theme.spacing(2, 5)}`,
      whiteSpace: 'nowrap',
      marginTop: `${theme.spacing(2)}`,
      ':not(:last-of-type)': {
        marginRight: `${theme.spacing(2)}`,
      },
    },
    rightColumn: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      justifySelf: 'flex-end',
    },
    tabletButtonGroup: {
      marginBottom: `${theme.spacing(6)}`,
    },
    tabletSearchTextField: {
      width: '100%',
      marginBottom: `${theme.spacing(6)}`,
    },
    desktopSearchTextField: {
      minWidth: `${theme.spacing(75)}`,
    },
    banner: {
      marginBottom: `${theme.spacing(6)}`,
    },
    desktopMarketTables: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: `${theme.spacing(10)}`,
    },
  };

  return styles;
};
