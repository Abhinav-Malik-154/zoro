import { useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();
  const thumbSize = theme.spacing(5.5);

  return {
    container: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    label: {
      marginRight: theme.spacing(2),
    },
    infoIcon: {
      marginRight: theme.spacing(2),
    },
    getSwitch: ({ isLight }: { isLight: boolean }) => ({
      flexShrink: 0,
      width: `calc(${thumbSize} * 2)`,
      height: thumbSize,
      padding: 0,

      '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 0,
        transitionDuration: '300ms',
        color: theme.palette.background.default,

        '&.Mui-checked': {
          color: theme.palette.background.default,
          transform: `translateX(${thumbSize})`,

          '& .MuiSwitch-thumb': {
            backgroundColor: theme.palette.interactive.primary,
          },

          '& + .MuiSwitch-track': {
            backgroundColor: isLight
              ? theme.palette.secondary.light
              : theme.palette.background.default,
          },
        },

        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },

      '.MuiSwitch-thumb': {
        backgroundColor: isLight
          ? theme.palette.text.secondary
          : theme.palette.secondary.light,
        boxShadow: 'none',
        boxSizing: 'border-box',
        width: thumbSize,
        height: thumbSize,
      },

      '.MuiSwitch-track': {
        borderRadius: thumbSize,
      },

      '.MuiSwitch-track, .Mui-checked + .MuiSwitch-track': {
        backgroundColor: isLight
          ? theme.palette.secondary.light
          : theme.palette.background.default,
        opacity: 1,
      },
    }),
  };
};
