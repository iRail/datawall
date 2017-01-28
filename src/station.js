import {STATION} from './constants';

export const DIRECTIONS = {
  northeast: 'NORTHEAST',
  nortwest: 'NORTHWEST',
  southeast: 'SOUTHEAST',
  southwest: 'SOUTHWEST'
};

export function getDirection({latitude, longitude} = stop) {
  console.log(latitude, longitude);
}

export function isCenter(stop) {
  return stop['@id'] === STATION.URI;
}