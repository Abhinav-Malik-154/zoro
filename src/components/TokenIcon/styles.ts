import { SHAPE } from '@/theme/MuiThemeProvider/muiTheme';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();

  return {
    icon: {
      marginTop: '-2px',
      width: `${SHAPE.iconSize.xLarge}px`,
      height: `${SHAPE.iconSize.xLarge}px`,
    },
  };
};
