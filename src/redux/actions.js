import io from 'socket.io-client';
import { API_BASE_URI } from '../constants';

export const RECEIVE_QUERIES = 'RECEIVE_QUERIES';
export const REMOVE_QUERY = 'REMOVE_QUERY';
export const LISTEN_FOR_QUERIES = 'LISTEN_FOR_QUERIES';

export const receiveQueries = queries => ({
  type: RECEIVE_QUERIES,
  payload: queries,
});

export const listenToQueries = () => dispatch => {
  const socket = io(API_BASE_URI);
  // socket.emit('fetchLogs');
  socket.on('newData', queries => {
    dispatch(receiveQueries(queries));
  });
};

export const removeQuery = query => ({
  type: REMOVE_QUERY,
  payload: query,
});
