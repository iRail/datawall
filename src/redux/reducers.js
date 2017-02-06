import {RECEIVE_QUERIES} from './actions';
import {isCenter} from '../station';

const INITIAL_STATE = {
  queries: {
    inbound: [],
    outbound: [],
    all: []
  }
};

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
      let all = [
        ...queries,
        ...state.queries.all
      ];

      if(all.length > 40) {
        all = all.slice(0, 20);
      }

      return {
        ...state,
        queries: {
          inbound: inbound.slice(0,4),
          outbound: outbound.slice(0,4),
          all,
        }
      };
    default:
      return state;
  }
};
