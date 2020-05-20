/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import configureStore from './redux/store';

import messages from './assets/messages';
import theme from './assets/theme';
import App from './components/app/App';

import './index.css';

import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Roboto'],
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

const store = configureStore();

ReactDOM.render(
  // Hard coding the below but would support multiple locales.
  <Provider store={store}>
    <IntlProvider locale="en-GB" messages={messages['en-GB']}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
