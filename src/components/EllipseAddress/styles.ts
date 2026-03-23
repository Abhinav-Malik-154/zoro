import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

import { Breakpoint } from './types';

export const useStyles = () => {
  const theme = useTheme();

  return {
    getAddress: ({
      ellipseBreakpoint,
    }: {
      ellipseBreakpoint?: number | Breakpoint;
    }) => css`
      ${ellipseBreakpoint
        ? css`
            ${theme.breakpoints.down(ellipseBreakpoint as any)} {
              display: none;
            }
          `
        : css`
            display: none;
          `}
    `,
    getFormattedAddress: ({
      ellipseBreakpoint,
    }: {
      ellipseBreakpoint?: number | Breakpoint;
    }) => css`
      ${ellipseBreakpoint &&
      css`
        display: none;

        ${theme.breakpoints.down(ellipseBreakpoint as any)} {
          display: block;
        }
      `}
    `,
  };
};
