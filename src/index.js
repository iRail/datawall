import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import 'typeface-pt-sans';

import store from './redux/store';
import App from './components/App';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  :root {
    font-size: 2.5vw;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: PT Sans, -apple-system, sans-serif;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
