import { CSSReset, theme } from '@chakra-ui/core';
import { ThemeProvider } from 'emotion-theming';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
