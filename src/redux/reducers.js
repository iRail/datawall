import {RECEIVE_QUERIES, REMOVE_QUERY} from './actions';
import {isCenter} from '../station';

const INITIAL_STATE = {
  queries: {
    inbound: [],
    outbound: [],
    all: []
  }
};

let podIndex = 0;

export const queryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_QUERIES:
      const queries = [...state.queries, action.payload];
      queries.sort((a, b) => new Date(b.querytime) - new Date(a.querytime));

      const inbound = [
        ...queries.filter(q => isCenter(q.destination)),
        ...state.queries.inbound
      ];
      const outbound = [
        ...queries.filter(q => isCenter(q.origin)),
        ...state.queries.outbound
      ];

      const all = [
        ...queries.map(q => ({...q, index: podIndex})),
        ...state.queries.all
      ];

      podIndex++;
      return {
        ...state,
        queries: {
          inbound: inbound.slice(0,4),
          outbound: outbound.slice(0,4),
          all,
        }
      };
    case REMOVE_QUERY:
      const filtered = state.queries.all
        .filter(q => action.payload.querytime !== q.querytime);

      return {
        ...state,
        queries: {
          ...state.queries,
          all: filtered
        }
      };
    default:
      return state;
  }
};
