import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();
  return {
    arrow: (expanded: boolean) => ({
      marginRight: theme.spacing(4.5),
      height: theme.spacing(3),
      width: theme.spacing(3),
      color: theme.palette.text.primary,
      transform: !expanded && 'rotate(180deg)',
    }),
    iconButton: {
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 0,
      display: 'flex',
      alignItems: 'center',
    },
    accordionRoot: {
      padding: 0,
      marginBottom: theme.spacing(3),
      '&::before': {
        display: 'none',
      },
      '&.Mui-expanded': {
        margin: 0,
      },
    },
    accordionSummary: {
      display: 'flex',
      flexDirection: 'row',
      minHeight: '0 !important',
      padding: '0 !important',
      '> div': {
        margin: '0 !important',
        justifyContent: 'space-between',
      },
      margin: 0,
    },
    accordionLeft: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    content: {
      margin: `${theme.spacing(3)} 0`,
      padding: theme.spacing(6),
      borderRadius: theme.spacing(4),
      backgroundColor: theme.palette.secondary.light,
    },
  };
};
