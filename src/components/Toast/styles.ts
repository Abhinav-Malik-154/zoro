import { useTheme } from '@mui/material';
import { FONTS, SHAPE } from '@/theme/MuiThemeProvider/muiTheme';

export const useStyles = () => {
  const theme = useTheme();

  return {
    iconSize: SHAPE.iconSize.large,
    btnClose: {
      position: 'absolute',
      padding: 0,
      right: theme.spacing(5),
      top: theme.spacing(2),
      color: theme.palette.text.secondary,
      '&:hover:not(:disabled) svg, &:active:not(:disabled) svg': {
        color: theme.palette.text.primary,
      },
    },
    /* extra padding for placing the close button */
    noticeContainer: {
      maxWidth: theme.spacing(140),
      paddingRight: theme.spacing(9),
      [theme.breakpoints.down('md')]: {
        paddingRight: theme.spacing(8),
      },
    },
  };
};

export const customToastGlobalStyles = {
  '.Toastify__toast-container': {
    width: 'auto',
    maxWidth: 'calc(100vw - 40px)',
    '.Toastify__toast': {
      fontFamily: FONTS.primary,
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
};
