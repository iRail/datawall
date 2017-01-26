const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const {startPolling} = require('./src/lib/api');

const STATION = {
  URI: 'http://irail.be/stations/NMBS/008892007',
  name: 'Gent Sint-Pieters'
}; // can't import from constants because that's an es6 export


startPolling(io, {stop: STATION.URI});

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
}

http.listen(app.get('port'), function() {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
