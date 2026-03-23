import { useTheme } from '@mui/material';

export const useDelimiterStyles = () => {
  const theme = useTheme();

  return {
    root: {
      marginTop: 0,
      marginBottom: 0,
      borderColor: theme.palette.secondary.light,
      borderStyle: 'solid',
    },
  };
};
