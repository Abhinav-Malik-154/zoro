import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();
  return {
    layout: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      height: '100vh',
      [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
      },
    },
    contentWith: {
      height: `calc(100vh - ${theme.spacing(24)})`,
      overflowY: 'scroll',
    },
    contentWithout: {
      height: `calc(100vh - ${theme.spacing(14)})`,
      overflowY: 'scroll',
    },
    notifyBar: {
      width: '100%',
      backgroundColor: '#ff5252',
      fontSize: '16px',
      padding: '5px 15px',
      boxShadow: '0 0 2px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
    },
    notifyText: {
      color: 'black',
      margin: '0px',
    },
    notifyClose: {
      border: '1px solid #0d08801',
      cursor: 'pointer',
      color: 'black',
    },
    hide: {
      display: 'none',
    },
  };
};
