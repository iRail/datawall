const fetch = require('node-fetch');

let lastQuery;

// fetches logs using fetch
function fetchLogs(socket, inputData, callback = null) {
  const url = 'http://api.irail.be/logs';

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(queryData => {
      // pass queries to the callback
      // not the first time though, because we don't know what our lastquery is yet
      if (callback) {
        emitSingleQueries(socket, filterQueries(callback(queryData), inputData));
        // data refreshed and events emitted, start a new timeout
        refreshQueries(socket, inputData);
      }
      else {
        // initliaze lastQuery
        // at this point the first dataset has been fetched
        lastQuery = queryData[queryData.length - 1];
      }
    })
    .catch(ex => {
      socket.emit('error', ex);
    });
}

// runs fetchLogs after 1s
function refreshQueries(socket, inputData) {
  setTimeout(fetchLogs, 1000, socket, inputData, getNewData);
}

// checks for every query
function getNewData(data) {
  let newData = [];
  let lastQueryReached = false;
  data.forEach(query => {
    // push new query to the array
    if (lastQueryReached) {
      newData.push(query);
    }
    else {
      // check if query equals last query
      if (JSON.stringify(query) === JSON.stringify(lastQuery)) {
        lastQueryReached = true;
        // return because this query doesn't count
        return;
      }
    }
  });
  lastQuery = data[data.length - 1];
  return newData;
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

// emit event for every query
function emitSingleQueries(socket, data) {
  data.forEach(query => socket.emit('query', {
    origin: query.query.departureStop,
    querytime: query.querytime
  }));
}

module.exports = {
  fetchLogs,
  refreshQueries
};
