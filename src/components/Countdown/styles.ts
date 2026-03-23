import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();

  return {
    activeUntilDate: {
      paddingLeft: theme.spacing(1),
    },
  };
};
