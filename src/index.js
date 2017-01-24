import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import io from 'socket.io-client';
const apiBaseUrl = process.env.NODE_ENV === 'development' ? 'localhost:3001' : '/';

const socket = io(apiBaseUrl);

socket.emit('fetchLogs', { arrivalStop: 'http://irail.be/stations/NMBS/008892007'});
socket.on('query', function(data) {
  console.log('query', data);
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
