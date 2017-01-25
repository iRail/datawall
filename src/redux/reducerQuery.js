import {RECIEVE_QUERY} from './actions';

const INITIAL_STATE = {
  queries: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECIEVE_QUERY:
      // somehow limit it to X here
      // also get out double (via Set -> array ?)
      // maybe reverse here
      return {
        ...state,
        queries: [...state.queries, action.payload]
      };
    default:
      return state;
  }
}
