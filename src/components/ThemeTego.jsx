import { blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const tegoTheme = createTheme({
    palette: {
      primary: {
        main: blueGrey[900],
      },
      secondary: {
          main: blueGrey[300],
        },
    },
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
  });
