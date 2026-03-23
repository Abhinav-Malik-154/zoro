import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();

  return {
    container: {
      display: 'flex',
      [theme.breakpoints.down('xl')]: {
        display: 'block',
      },
    },
    column: {
      ':not(:first-of-type)': {
        marginLeft: theme.spacing(4),
      },
      ':not(:last-of-type)': {
        marginRight: theme.spacing(4),
      },
      [theme.breakpoints.down('xl')]: {
        ':not(:first-of-type)': {
          marginLeft: 0,
        },
        ':not(:last-of-type)': {
          marginRight: 0,
        },
      },
    },
    graphsColumn: {
      flex: 2,
    },
    statsColumn: {
      flex: 1,
    },
    statsColumnButtonContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(6),
    },
    statsColumnButton: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      ':first-of-type': {
        marginLeft: 0,
      },
      ':last-of-type': {
        marginRight: 0,
      },
    },
    graphCard: {
      ':not(:last-of-type)': {
        marginBottom: theme.spacing(6),
      },
      [theme.breakpoints.down('xl')]: {
        ':last-of-type': {
          marginBottom: theme.spacing(6),
        },
      },
    },
    legendColors: {
      supplyApy: theme.palette.interactive.success,
      borrowApy: theme.palette.interactive.error,
      utilizationRate: theme.palette.interactive.primary,
    },
    apyChart: {
      marginRight: theme.spacing(-2.5),
    },
  };
};
