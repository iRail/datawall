import store from './store';
import {RECEIVE_QUERIES, DELETE_VISIBLE, deleteVisible} from './actions';
import {times} from '../constants';
import {isCenter} from '../station';

const INITIAL_STATE = {
  queries: {
    inbound: [],
    outbound: [],
  },
  visible: {}
};

let VISIBLE_INDEX = 0;

export const queryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_QUERIES:
      const queries = [...state.queries, action.payload];
      queries.sort((a, b) => new Date(b.querytime) - new Date(a.querytime));

      const inbound = [
        ...queries.filter((q) => isCenter(q.destination)),
        ...state.queries.inbound
      ];
      const outbound = [
        ...queries.filter((q) => isCenter(q.origin)),
        ...state.queries.outbound
      ];

      VISIBLE_INDEX++;
      setTimeout((index) => {
        store.dispatch(deleteVisible(index));
      }, times.pod.moveIn + times.pod.moveAround, VISIBLE_INDEX);

      return {
        ...state,
        queries: {
          inbound: inbound.slice(0,4),
          outbound: outbound.slice(0,4)
        },
        visible: {
          ...state.visible,
          [VISIBLE_INDEX]: queries[0]
        }
      };
    case DELETE_VISIBLE:
      const visible = Object.assign({}, state.visible);
      delete visible[action.payload];
      return {
        ...state,
        visible
      }
    default:
      return state;
  }
};
