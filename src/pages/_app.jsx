import { ThemeProvider, createTheme } from '@mui/material/styles';

import '../styles.css'
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      'Helvetica',
      'Arial', 
      'sans-serif',
    ].join(',')
  }
});

theme.typography.h3 = {
  ...theme.typography.h3,
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

theme.typography.h2 = {
  ...theme.typography.h2,
  fontSize: '1.5em',
  '@media (min-width:600px)': {
    fontSize: '1.7em',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

export default function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
