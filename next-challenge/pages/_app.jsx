import Head from 'next/head';
import { /* ColorModeProvider, */ CSSReset } from '@chakra-ui/core';
import { ThemeProvider } from 'emotion-theming';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/loader.css';

import Header from '../components/common/header';
import customTheme from './theme';

function MyApp({ Component, pageProps, children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&amp;display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        {/* <ColorModeProvider> */}
        <Header />
        <Component {...pageProps} />
        {/* </ColorModeProvider> */}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
