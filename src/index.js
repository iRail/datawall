import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import io from 'socket.io-client';

const socket = io();

socket.emit('fetchLogs', { arrivalStop: 'http://irail.be/stations/NMBS/008892007'});
socket.on('query', function(data) {
  console.log('query', data);
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
