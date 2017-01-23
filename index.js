const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fetch = require('node-fetch');

function getLogs(socket) {
  const url = 'http://api.irail.be/logs';

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      emitSingleQueries(socket, filterQueries(data));
    })
    .catch((ex) => {
      socket.emit('parsing failed', ex);
    });
}

function filterQueries(data) {
  return data.filter(query => {
    if (query.querytype === 'connections' && query.query.arrivalStop['@id'] === "http://irail.be/stations/NMBS/008892007") {
      return query;
    }
  });
}

function emitSingleQueries(socket, data) {
  data.forEach(query => socket.emit('query', {
    origin: query.query.departureStop,
    querytime: query.querytime
  }));
}

io.on('connection', function(socket) {
  getLogs(socket);
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
