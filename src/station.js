import {stations} from '../config.json';

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
 * @param {object} [{latitude, longitude}=destination]
 * @param {object} [{latitude, longitude}=origin]
 */
export function getDirection(origin, destination) {
  if (origin.longitude < destination.longitude) {
    // EAST
    if (origin.latitude < destination.latitude) {
      return DIRECTIONS.northeast;
    } else {
      return DIRECTIONS.southeast;
    }
  } else {
    // WEST
    if (origin.latitude < destination.latitude) {
      return DIRECTIONS.northwest;
    } else {
      return DIRECTIONS.southwest;
    }
  }
}

/**
 * Checks whether a station is part of the targeted area
 * 
 * @param {object} [{'@id': url}=station] a station to check
 * @returns true if the station is being targeted as center
 */
export function isCenter(station) {
  const ids = stations.map(s => s['@id']);
  return ids.includes(station['@id']);
}