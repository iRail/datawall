import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'typeface-pt-sans';
import './index.css';

import store from './redux/store';
import App from './components/App';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
