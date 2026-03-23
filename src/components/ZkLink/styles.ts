import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();

  return {
    container: {
      display: 'inline-block',
      color: theme.palette.interactive.primary,
    },
    text: {
      display: 'flex',
      alignItems: 'center',
      color: 'inherit',
    },
    icon: {
      color: 'inherit',
      marginLeft: theme.spacing(2),
    },
  };
};
