import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { AppRouter } from './Components/AppRouter';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global-style';
import { CssRemedy } from './styles/css-remedy';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssRemedy />
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
);
