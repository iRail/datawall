import store from './store';
import {RECEIVE_QUERIES, DELETE_VISIBLE, deleteVisible} from './actions';
import {times} from '../constants';

const INITIAL_STATE = {
  queries: [],
  visible: {}
};

let VISIBLE_INDEX = 0;

export const queryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_QUERIES:
      const queries = [...state.queries, action.payload];
      queries.sort((a, b) => new Date(b.querytime) - new Date(a.querytime));

      VISIBLE_INDEX++;

      setTimeout(() => {
        store.dispatch(deleteVisible(VISIBLE_INDEX));
      }, times.podAnimation + 10);

      return {
        ...state,
        queries: queries.slice(0,7),
        visible: {
          ...state.visible,
          [VISIBLE_INDEX]: action.payload[0]
        }
      };
    case DELETE_VISIBLE:
      const visible = state.visible;
      delete visible.action.payload;
      return {
        ...state,
        visible
      }
    default:
      return state;
  }
};
