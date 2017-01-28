import {STATION} from './constants';

export const DIRECTIONS = {
  northeast: 'NORTHEAST',
  northwest: 'NORTHWEST',
  southeast: 'SOUTHEAST',
  southwest: 'SOUTHWEST'
};


/**
 * Get the direciton of a station
 * 
 * Take in account that the directions needs to be in an X-shape
 * 
 * @see DIRECTIONS
 * @returns the direction a certain station is in
 * @param {object} [{latitude, longitude}=stop]
 */
export function getDirection({latitude, longitude} = stop) {
  if (longitude > STATION.longitude) {
    // WEST
    if (latitude > STATION.latitude) {
      return DIRECTIONS.northwest;
    } else {
      return DIRECTIONS.southwest;
    }
  } else {
    // EAST
    if (latitude > STATION.latitude) {
      return DIRECTIONS.northeast;
    } else {
      return DIRECTIONS.southeast;
    }
  }
}

export function isCenter(stop) {
  return stop['@id'] === STATION.URI;
}