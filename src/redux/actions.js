import io from 'socket.io-client';
import { API_BASE_URI, STATION_URI } from '../constants';

export const RECEIVE_QUERIES = 'RECEIVE_QUERIES';
export const LISTEN_FOR_QUERIES = 'LISTEN_FOR_QUERIES';

export const receiveQueries = (queries) => ({
  type: RECEIVE_QUERIES,
  payload: queries
});

export const listenToQueries = () => (
  dispatch => {
    const socket = io(API_BASE_URI);
    // socket.emit('fetchLogs', { stop: STATION_URI});
    socket.on(STATION_URI, function(queries) {
      dispatch(receiveQueries(queries));
    });
  }
);
