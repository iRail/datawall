import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import './index.css';
import reducer from './redux/reducerQuery';

let store = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={store(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>,
  document.getElementById('root')
);
