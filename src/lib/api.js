const fetch = require('node-fetch');

// fetches logs using fetch
function fetchLogs(socket, inputData) {
  const url = 'http://api.irail.be/logs';

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(queryData => {
      // filter and pass queries
      emitSingleQueries(socket, filterQueries(queryData, inputData));
    })
    .catch(ex => {
      socket.emit('error', ex);
    });
}

// filters the queries
function filterQueries(queryData, inputData) {
  return queryData.filter(query => {
    // sometimes the query doesn't have an arrivalstop?
    try {
      if (query.querytype === 'connections' && query.query.arrivalStop['@id'] === inputData.arrivalStop) {
        return true;
      }
    } catch (ex) {
      console.log('Whoops, didn\'t expect that query!', ex);
      return false;
    }
  });
}

function emitSingleQueries(socket, data) {
  data.forEach(query => socket.emit('query', {
    origin: query.query.departureStop,
    querytime: query.querytime
  }));
}

module.exports = {
  fetchLogs
}
