import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();

  return {
    notfound: {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'var(--color-bg-main)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('lg')]: {
        // Add your styles for 'lg' breakpoint here
      },
    },
    header: {
      width: '100vw',
      height: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
    },
    logo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    divider: {
      width: '90vw',
      height: '1px',
      padding: '1px',
      background:
        'linear-gradient(90deg, rgba(223, 190, 82, 0.05) 0%, #DFBE52 52.02%, rgba(30, 30, 30, 0.07) 100%)',
      opacity: 0.6,
    },
    logoDesktop: {
      display: 'block',
      minWidth: '256px',
      height: 'auto',
      margin: '16px auto',
      color: 'white!important',
      [theme.breakpoints.down('xl')]: {
        display: 'none',
      },
    },
    logoMobile: {
      display: 'none',
      [theme.breakpoints.down('xl')]: {
        display: 'block',
        maxWidth: '76px',
        height: 'auto',
        margin: '16px auto',
      },
    },
    content: {
      zIndex: 3,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentImg: {
      maxWidth: '256px',
      height: 'auto',
    },
    contentText: {
      color: 'var(--White, #FFF)',
      textAlign: 'center',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '28px',
      opacity: 0.8,
    },
    bg: {
      width: '100%',
      height: '50%',
      position: 'absolute',
      bottom: '0px',
      margin: 'auto',
      flexShrink: 0,
      background:
        'linear-gradient(180deg, #0D0801 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(0deg, rgba(13, 8, 1, 0.50) 0%, rgba(13, 8, 1, 0.50) 100%), url(${notfound_bg}), lightgray 0px -538.06px / 100% 227.502% no-repeat',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      zIndex: 1,
    },
    ellipseL: {
      width: '56%',
      height: '52%',
      transform: 'rotate(53.512deg)',
      flexShrink: 0,
      borderRadius: '100%',
      opacity: 0.2,
      background:
        'linear-gradient(180deg, #a04e01 14.12%, #e38c27 47.51%, #dfbe52 91.58%)',
      filter: 'blur(200px)',
      position: 'absolute',
      left: '-40vw',
      top: '-10vh',
      zIndex: 2,
    },
    ellipseR: {
      width: '56%',
      height: '52%',
      transform: 'rotate(-126.848deg)',
      flexShrink: 0,
      borderRadius: '100%',
      opacity: 0.1,
      background:
        'linear-gradient(180deg, #927B2F 14.12%, #B8864B 47.51%, #DFBE52 91.85%)',
      filter: 'blur(200px)',
      position: 'absolute',
      top: '40vh',
      right: '-40vw',
      zIndex: 2,
    },
  };
};
