import { SHAPE } from '@/theme/MuiThemeProvider/muiTheme';
import { Interpolation, Theme, useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();
  const styles = {
    drawer: {
      display: 'block',
      width: SHAPE.drawerWidthDesktop,
      '> .MuiDrawer-paper': {
        borderRight: 'none',
      },
      [theme.breakpoints.down('xl')]: {
        width: SHAPE.drawerWidthTablet,
      },
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
    drawerContent: {
      width: '100%',
      [theme.breakpoints.down('xl')]: {
        width: SHAPE.drawerWidthTablet,
      },
      display: 'block',
      zIndex: 1000,
      position: 'sticky',
      top: 0,
      left: 0,
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'center',
      padding: '0px',
      minHeight: 0,
      [theme.breakpoints.down('lg')]: {
        minHeight: 'initial',
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 'initial',
        paddingRight: 'initial',
      },
      '.MuiButton-text': {
        padding: 0,
        minWidth: 0,
      },
      [theme.breakpoints.down('xl')]: {
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
      },
    },
    listItem: {
      transition: 'color 0.3s',
      padding: 0,
      ':hover': {
        backgroundColor: 'transparent',
      },
      ':hover > a': {
        backgroundColor: theme.palette.secondary.light,
      },
      a: {
        padding: '12px 18px 12px 18px',
        borderRadius: '30px',
        display: 'inline-flex',
        justifyContent: 'start',
        alignItems: 'center',
        width: '100%',
        textDecoration: 'none',
        [theme.breakpoints.down('xl')]: {
          width: 'auto',
          margin: 'auto',
          borderRadius: `${SHAPE.borderRadius.medium}px`,
          padding: theme.spacing(4),
          justifyContent: 'center',
        },
        [theme.breakpoints.down('lg')]: {
          borderRadius: 0,
        },
      },
      '.active-menu-item': {
        backgroundColor: '#dfbe52',
        svg: {
          color: theme.palette.text.primary,
        },
        p: {
          color: theme.palette.text.primary,
        },
      },
    },
    listItemIcon: {
      minWidth: theme.spacing(8),
      [theme.breakpoints.down('xl')]: {
        minWidth: 0,
        justifyContent: 'center',
      },
      color: 'inherit',
      svg: {
        height: theme.spacing(5),
        width: theme.spacing(5),
        color: 'var(--color-text-secondary)',
      },
    },
    listItemText: {
      display: 'block',
      [theme.breakpoints.down('xl')]: {
        display: 'none',
      },
      [theme.breakpoints.down('lg')]: {
        display: 'block',
      },
    },
    listItemNewBadge: {
      border: `1px solid ${theme.palette.interactive.success}`,
      backgroundColor: theme.palette.interactive.success10,
      borderRadius: theme.spacing(1),
      height: theme.spacing(5),
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      marginLeft: theme.spacing(3),
      [theme.breakpoints.down('xl')]: {
        display: 'none',
      },
      [theme.breakpoints.down('lg')]: {
        display: 'flex',
      },
    },
    listItemNewBadgeText: {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.interactive.success,
      marginTop: '1px',
    },
    logo: {
      display: 'block',
      [theme.breakpoints.down('xl')]: {
        display: 'block',
      },
      [theme.breakpoints.down('xl')]: {
        display: 'none',
      },
    },
    logoClosed: {
      display: 'none',
      [theme.breakpoints.down('xl')]: {
        maxWidth: theme.spacing(40),
        display: 'block',
      },
    },
    mobileMenuBox: {
      display: 'none',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(4),
      [theme.breakpoints.down('lg')]: {
        display: 'flex',
      },
    },
    mobileLogo: {
      flexShrink: 0,
      height: theme.spacing(10),
      width: theme.spacing(10),
    },
    burger: {
      height: theme.spacing(6),
      width: theme.spacing(6),
    },
    mobileMenu: {
      '.MuiMenu-list': {
        display: 'flex',
        flexDirection: 'column',
      },
      '> .MuiPaper-root': {
        backgroundColor: theme.palette.background.default,
        height: '100vh',
        maxHeight: '100vh',
        width: '100vw',
        maxWidth: '100vw',
        borderRadius: 0,
        border: 0,
        boxShadow: 'none',
        padding: theme.spacing(0, 0, 16),
        top: '0 !important',
      },
    },
    mobileListItem: {
      a: {
        color: theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        justifyContent: 'space-between',
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
      },
      ':hover': {
        marginLeft: 0,
        marginRight: 0,
        borderRadius: 0,
        textDecoration: 'none',
      },
      '.active-mobile-menu-item': {
        backgroundColor: theme.palette.secondary.light,
        svg: {
          color: theme.palette.interactive.primary,
        },
      },
    },
    mobileListItemText: {
      color: theme.palette.text.primary,
    },
    mobileArrow: {
      height: theme.spacing(6),
      width: theme.spacing(6),
    },
    mobileLabel: {
      flexDirection: 'row',
      justifyContent: 'center',
      display: 'inline-flex',
      alignItems: 'center',
      svg: {
        marginRight: theme.spacing(4),
      },
    },
    flexRow: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    doublePadding: {
      padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    },
    actionButton: {
      flexShrink: 0,
      width: theme.spacing(10),
      cursor: 'pointer',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      display: 'flex',
      justifyContent: 'center',
      padding: 0,
    },
    mobileConnectButton: {
      width: 'max-content',
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(8),
      height: theme.spacing(9),
      fontSize: theme.typography.small1.fontSize,
      borderWidth: '2px',
    },
    claimRewardButton: {
      margin: theme.spacing(4, 4, 0, 4),
    },
  };

  return styles;
};
