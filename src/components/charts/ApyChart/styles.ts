import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

import { SPACING } from '@/theme/MuiThemeProvider/muiTheme';

export const useStyles = () => {
  const theme = useTheme();

  return {
    supplyChartColor: (theme.palette as any).interactive.success,
    borrowChartColor: (theme.palette as any).interactive.error,
    areaActiveDot: { r: SPACING * 2, strokeWidth: SPACING },
    container: {
      width: '100%',
      height: theme.spacing(62),
    },
  };
};
