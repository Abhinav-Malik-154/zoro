import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();

  return {
    placeholderContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    placeholderText: {
      margin: `${theme.spacing(8)} 0`,
      textAlign: 'center',
    },
    wallet: {
      height: theme.spacing(24),
      backgroundColor: 'rgba(40, 41, 49, 1)',
      borderRadius: '50%',
      width: theme.spacing(24),
    },
  };
};
