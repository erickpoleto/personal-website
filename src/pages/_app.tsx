import '../styles/globals.css'
import {ThemeProvider} from 'styled-components'
import {theme} from "../components/foundation/themes";
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
