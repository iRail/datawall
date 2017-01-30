import io from 'socket.io-client';
import {API_BASE_URI} from '../constants';

export const RECEIVE_QUERIES = 'RECEIVE_QUERIES';
export const LISTEN_FOR_QUERIES = 'LISTEN_FOR_QUERIES';
export const DELETE_VISIBLE = 'DELETE_VISIBLE';

export const receiveQueries = (queries) => ({
  type: RECEIVE_QUERIES,
  payload: queries
});

export const listenToQueries = () => (
  dispatch => {
    const socket = io(API_BASE_URI);
    // socket.emit('fetchLogs');
    socket.on('newData', (queries) => {
      dispatch(receiveQueries(queries));
    });
  }
);

export const deleteVisible = (index) => ({
  type: DELETE_VISIBLE,
  payload: index
});