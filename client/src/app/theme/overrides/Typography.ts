import { Theme } from '@mui/material/styles';

export default function Typography(theme: Theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
        // Apply consistent font family to all typography components
        root: {
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
  };
}