import React from 'react';

declare global {
  interface Window {
    ethereum: any;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    small1: React.CSSProperties;
    small2: React.CSSProperties;
    tiny: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    small1?: React.CSSProperties;
    small2?: React.CSSProperties;
    tiny?: React.CSSProperties;
  }

  interface Palette {
    interactive: PaletteColor;
    button: PaletteColor;
  }
  interface PaletteOptions {
    interactive?: PaletteColor;
    button?: PaletteColor;
  }
}

// // Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    small1: true;
    small2: true;
    tiny: true;
  }
}
