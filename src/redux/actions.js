export const RECEIVE_QUERIES = 'RECEIVE_QUERIES';

export function fetchQuery(query) {
  return {
    type: RECEIVE_QUERIES,
    payload: query
  };
}
