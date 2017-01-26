import {RECEIVE_QUERIES} from './actions';

const INITIAL_STATE = {
  queries: []
};

export const queryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_QUERIES:
      const queries = [...state.queries, action.payload];
      queries.sort((a, b) => new Date(b.querytime) - new Date(a.querytime));
      return {...state, queries: queries.slice(0,7)};
    default:
      return state;
  }
};
