const fetch = require('node-fetch');

let lastQuery;

// fetches logs using fetch
function fetchLogs(socket, inputData, callback = null) {
  const url = 'http://api.irail.be/logs';

  fetch(url)
    .then(response => response.json())
    .then(queryData => {
      // pass queries to the callback
      // not the first time though, because we don't know what our lastQuery is yet
      if (callback) {
        emitSingleQueries(socket, filterQueries(callback(queryData), inputData), inputData);
        // data refreshed and events emitted, start a new timeout
        setTimeout(fetchLogs, 500, socket, inputData, getNewData);
      }
      else {
        // initialize lastQuery
        // at this point the first dataset has been fetched
        lastQuery = queryData[queryData.length - 1];
        fetchLogs(socket, inputData, getNewData);
      }
    })
    .catch(ex => {
      fetchLogs(socket, inputData, getNewData);
    });
}

function startPolling(socket, inputData) {
  fetchLogs(socket, inputData);
}

// checks for every query
function getNewData(data) {
  let newData = [];
  // this loops over the data backwards, only adds to the new array
  // when the query isn't the same as the last one
  for (let i = data.length - 1; i >= 0; i--) {
    const query = data[i];
    if (JSON.stringify(query) === JSON.stringify(lastQuery)) {
      // break the loop
      break;
    } else {
      if (JSON.stringify(query) === JSON.stringify(data[data.indexOf(query) + 1])) {
        continue;
      }
      // push new query to the array
      newData.push(query);
    }
  }
  lastQuery = data[data.length - 1];
  return newData;
}

// filters the queries
function filterQueries(queryData, inputData) {
  return queryData.filter(query => {
    // test for invalid queries
    try {
      return query.querytype === 'connections' &&
        (
          query.query.arrivalStop['@id'] === inputData.stop ||
          query.query.departureStop['@id'] === inputData.stop
        );
    } catch (ex) {
      return false;
    }
  });
}

// emit event for every query
function emitSingleQueries(socket, data, inputData) {
  data.forEach(request => socket.emit(inputData.stop, {
    origin: request.query.departureStop,
    destination: request.query.arrivalStop,
    querytime: request.hasOwnProperty('querytime') ? request.querytime : new Date(),
    useragent: request.user_agent,
    journey: request.query.journeyoptions
  }));
}

module.exports = {
  startPolling
};
