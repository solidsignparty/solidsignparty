import { ThemeProvider, createTheme } from '@mui/material/styles';

import '../css/styles.css'
import '../css/protosans56.css';
import '@fontsource/literata/300.css';
import '@fontsource/literata/400.css';
import '@fontsource/literata/500.css';
import '@fontsource/literata/700.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';


const white = {
  light: '#fff',
  main: '#fff',
  dark: '#ddd',
  contrastText: '#000',
};

const link = {
  light: '#ddd',
  main: '#ddd',
  dark: '#ddd',
  contrastText: '#000',
};

const black = {
  light: '#000',
  main: '#000',
  dark: '#000',
  contrastText: '#000',
};

const theme = createTheme({
  palette: {
    primary: black,
    button: white,
    link: link,
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Helvetica',
      'Arial', 
      'sans-serif',
    ].join(',')
  }
});

export default function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
