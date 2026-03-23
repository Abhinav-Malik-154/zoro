import { SHAPE } from '@/theme/MuiThemeProvider/muiTheme';
import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();
  return {
    main: css`
      flex-grow: 1;
      padding: ${theme.spacing(8, 0, SHAPE.footerHeight)};
      width: 100%;
      max-width: ${theme.spacing(391.5)};
      margin: 0 auto;

      ${theme.breakpoints.down('lg')} {
        padding-left: ${theme.spacing(6)};
        padding-right: ${theme.spacing(6)};
      }

      ${theme.breakpoints.down('md')} {
        padding: ${theme.spacing(4)} ${theme.spacing(4)} ${SHAPE.footerHeight};
      }
    `,
    footer: css`
      position: fixed;
      bottom: 0;
      right: 0;
      width: calc(100% - ${SHAPE.drawerWidthDesktop});
      ${theme.breakpoints.down('xl')} {
        width: calc(100% - ${SHAPE.drawerWidthTablet});
      }

      ${theme.breakpoints.down('lg')} {
        width: 100%;
      }
    `,
  };
};
