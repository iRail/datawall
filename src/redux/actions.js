export const RECIEVE_QUERY = 'RECIEVE_QUERY';

export function fetchQuery(query) {
  return {
    type: RECIEVE_QUERY,
    payload: query
  };
}
