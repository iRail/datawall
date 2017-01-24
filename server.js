const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const {fetchLogs, refreshQueries} = require('./src/lib/api');

io.on('connection', function(socket) {
  // client passes object with arrivalStop, etc.
  // eventually make this the actual station object
  socket.on('fetchLogs', (inputData) => {
    // fetch logs for the first time
    fetchLogs(socket, inputData);
    // start polling
    refreshQueries(socket, inputData);
  });
});


app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
}

http.listen(app.get('port'), function() {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
