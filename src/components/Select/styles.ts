import { useTheme } from '@mui/material';
import imgMark from '@/assets/img/mark.svg';
import { SHAPE } from '@/theme/MuiThemeProvider/muiTheme';

export const SELECTED_MENU_ITEM_CLASSNAME = 'SELECTED_MENU_ITEM_CLASSNAME';
export const useStyles = () => {
  const theme = useTheme();

  return {
    getContainer: ({ placeLabelToLeft }: any) => ({
      ...(placeLabelToLeft && {
        display: 'inline-flex',
        alignItems: 'center',
      }),
    }),
    getLabel: ({ placeLabelToLeft }: any) => ({
      ...(placeLabelToLeft
        ? {
            flexShrink: 0,
            marginRight: theme.spacing(3),
          }
        : {
            marginBottom: theme.spacing(1),
            label: {
              color: theme.palette.text.primary,
            },
          }),
    }),
    select: ({ isOpen }: any) => ({
      flex: 1,
      backgroundColor: theme.palette.secondary.light,
      borderRadius: `${SHAPE.borderRadius.small}px`,
      border: `1px solid ${
        isOpen ? theme.palette.interactive.primary : 'transparent'
      }`,
      width: '100%',
      fontSize: theme.typography.small2.fontSize,
      fontWeight: theme.typography.small2.fontWeight,
      '> div': {
        padding: `${theme.spacing(3, 4)}`,
      },
    }),
    getArrowIcon: ({ isMenuOpened }: any) => ({
      position: 'absolute',
      right: theme.spacing(4),
      width: theme.spacing(3),
      transition: 'transform 0.3s',
      transform: `rotate(${isMenuOpened ? '0' : '180deg'})`,
    }),
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: theme.palette.text.primary,
      fontSize: theme.typography.small2.fontSize,
      fontWeight: theme.typography.small2.fontWeight,
      '&:active, &:hover, &:focus': {
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down('sm')]: {
          backgroundColor: theme.palette.secondary.light,
        },
      },
      [`&.${SELECTED_MENU_ITEM_CLASSNAME}`]: {
        backgroundColor: `${theme.palette.background.default}!important`,
        [theme.breakpoints.down('sm')]: {
          backgroundColor: `${theme.palette.secondary.light}!important`,
        },
        '&::after': {
          content: '',
          backgroundImage: `url(${imgMark})`,
          backgroundSize: 'cover',
          width: '12px',
          height: '8px',
        },
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
      },
    },
    mobileHeader: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        padding: `${theme.spacing(6, 4)}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        backgroundColor: theme.palette.background.paper,
        zIndex: 1,
        borderBottom: `1px solid ${theme.palette.secondary.light}`,
      },
    },
    closeMenuButton: {
      position: 'absolute',
      right: 0,
    },
    menuWrapper: {
      backgroundColor: theme.palette.secondary.light,
      padding: 0,
      marginTop: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        minWidth: 'calc(100vw)',
        height: '100%',
        backgroundColor: theme.palette.background.paper,
      },
    },
    label: {
      marginBottom: theme.spacing(1),
      label: {
        color: theme.palette.text.primary,
      },
    },
  };
};
