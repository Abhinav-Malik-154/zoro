import { Breakpoint, useTheme } from '@mui/material';

export const useStyles = () => {
  const theme = useTheme();
  return {
    getRoot: ({ breakpoint }: { breakpoint: number | Breakpoint }) => ({
      paddingLeft: 0,
      paddingRight: 0,
      backgroundColor: theme.palette.secondary.light,

      [theme.breakpoints.down(breakpoint)]: {
        backgroundColor: 'transparent',
        paddingTop: 0,
        paddingBottom: 0,
      },
    }),
    getTitle: ({ breakpoint }: { breakpoint: number | Breakpoint }) => ({
      marginBottom: theme.spacing(4),
      padding: theme.spacing(0, 6),

      [theme.breakpoints.down(breakpoint)]: {
        padding: 0,
      },
    }),
    getTableContainer: ({
      breakpoint,
    }: {
      breakpoint: number | Breakpoint;
    }) => ({
      [theme.breakpoints.down(breakpoint)]: {
        display: 'none',
      },
    }),
    getCardsContainer: ({
      breakpoint,
    }: {
      breakpoint: number | Breakpoint;
    }) => ({
      display: 'none',

      [theme.breakpoints.down(breakpoint)]: {
        display: 'block',
      },
    }),
    cardsSelect: {
      width: theme.spacing(56),
      marginBottom: theme.spacing(4),
    },
    link: {
      color: theme.palette.text.primary,

      '&:hover': {
        textDecoration: 'none',
      },
    },
    tableWrapperMobile: ({ clickable }: { clickable: boolean }) => ({
      '&:not(:last-of-type)': {
        marginBottom: theme.spacing(6),
      },

      padding: theme.spacing(4, 0),

      ...(clickable && {
        cursor: 'pointer',

        '&:hover': {
          backgroundColor: theme.palette.interactive.hover,
        },
      }),
    }),
    rowTitleMobile: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    delimiterMobile: {
      margin: theme.spacing(4),
    },
    getTableRow: ({ clickable }: { clickable: boolean }) => ({
      height: theme.spacing(14),

      '&:hover': {
        backgroundColor: `${theme.palette.interactive.hover} !important`,
      },

      ...(clickable && {
        cursor: 'pointer',
      }),
    }),
    rowWrapperMobile: {
      display: 'grid',
      gridTemplateRows: '1fr',
    },
    cellMobile: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    cellTitleMobile: {
      color: theme.palette.text.secondary,
    },
    cellValueMobile: {
      paddingTop: theme.spacing(2),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.text.primary,
    },
    loader: {
      marginBottom: theme.spacing(6),
    },
    table: {
      tableLayout: 'fixed',

      '.MuiTableCell-root': {
        borderWidth: 0,
        fontWeight: theme.typography.body1.fontWeight,
        flexDirection: 'row',
        fontSize: theme.spacing(3.5),
        textTransform: 'none',
      },

      '.MuiTableCell-root:first-of-type': {
        paddingLeft: theme.spacing(6),
      },

      '.MuiTableCell-root:last-child': {
        paddingRight: theme.spacing(6),
      },
    },
    tableSortLabel: ({ orderable }: { orderable: boolean }) => ({
      cursor: orderable ? 'pointer' : 'auto',

      '&.MuiTableSortLabel-root': {
        span: {
          color: theme.palette.text.secondary,
        },
      },

      'span.MuiTableSortLabel-icon': {
        display: 'none',
      },

      '.MuiSvgIcon-root': {
        display: 'block',
        marginLeft: theme.spacing(2),
        transform: 'rotate(0deg)',
      },
      '.MuiTableSortLabel-iconDirectionDesc': {
        transform: 'rotate(180deg)',
      },

      '&.MuiTableSortLabel-root.Mui-active:hover': {
        color: theme.palette.text.secondary,
        '.MuiTableSortLabel-iconDirectionDesc': {
          opacity: 0.5,
        },
        '.MuiTableSortLabel-iconDirectionAsc': {
          opacity: 0.5,
        },
      },
    }),
    tableSortLabelIconsContainer: {
      marginTop: -2,
    },
    tableSortLabelIcon: ({ active }: { active: boolean }) => ({
      '&.MuiTableSortLabel-icon': {
        fill: theme.palette.text.primary,
      },
      '.Mui-active &.MuiTableSortLabel-icon': {
        fill: active
          ? theme.palette.interactive.success
          : theme.palette.text.primary,
        color: active
          ? theme.palette.interactive.success
          : theme.palette.text.primary,
      },
    }),
    cellWrapper: {
      height: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      padding: theme.spacing(0, 4),

      a: {
        color: 'inherit',
      },

      'a > *': {
        color: 'inherit',
      },

      ':first-of-type > a': {
        paddingLeft: 0,
      },

      ':last-of-type > a': {
        paddingRight: 0,
      },
    },
  };
};
