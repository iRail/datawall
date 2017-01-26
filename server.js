const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const {startPolling} = require('./src/lib/api');

const listening = [];

io.on('connection', function(socket) {
  // client passes object with stop, etc.
  // eventually make this the actual station object
  socket.on('fetchLogs', (inputData) => {
    // start polling
    if (!listening.includes(inputData.stop)) {
      listening.push(inputData.stop);
      startPolling(socket, inputData);
    }
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
