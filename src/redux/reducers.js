import { RECIEVE_QUERY } from './actions';

const INITIAL_STATE = {
  queries: []
};

export const queryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECIEVE_QUERY:
      let queries = [...state.queries, action.payload];

      queries.sort((a,b) => {
        if (a.querytime === b.querytime) {
          return 0;
        }
        if (a.querytime < b.querytime) {
          return 1;
        }
        return -1;
      });

      return {
        ...state,
        queries: queries.slice(0,7) // limit to 7 newest
      };
    default:
      return state;
  }
}
