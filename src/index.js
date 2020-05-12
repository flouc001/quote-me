/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from './theme';
import App from './App';

import './index.css';

import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Roboto'],
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
