import { Breakpoint, styled, useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();

  return {
    title: styled('div')({
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
    }),
    header: styled('div')({
      flex: 1,
      marginBottom: theme.spacing(8),
      [theme.breakpoints.down('xxl' as Breakpoint)]: {
        marginBottom: theme.spacing(6),
      },
    }),
    headerDescription: styled('div')({
      marginRight: theme.spacing(6),
      color: theme.palette.text.primary,
      flex: 1,
      [theme.breakpoints.down('xxl' as Breakpoint)]: {
        marginBottom: theme.spacing(6),
        display: 'block',
      },
    }),
    isolatedPoolWarning: styled('div')({
      marginBottom: theme.spacing(8),
      [theme.breakpoints.down('xxl' as Breakpoint)]: {
        marginBottom: theme.spacing(6),
      },
    }),
    divider: styled('div')({
      border: 'none',
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      [theme.breakpoints.down('xxl' as Breakpoint)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
      },
    }),
  };
};
