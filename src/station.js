import {STATION} from './constants';

export function isCenter(stop) {
  return stop['@id'] === STATION.URI;
}