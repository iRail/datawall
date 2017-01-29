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
 * @param {object} [{latitude, longitude}=destinationStop]
 * @param {object} [{latitude, longitude}=originStop]
 */
export function getDirection(originStop, destinationStop) {
  const latitudeO  = originStop.latitude;
  const longitudeO = originStop.longitude;
  const latitudeD = destinationStop.latitude;
  const longitudeD = destinationStop.longitude;

  if (longitudeO < longitudeD) {
    // EAST
    if (latitudeO < latitudeD) {
      return DIRECTIONS.northeast;
    } else {
      return DIRECTIONS.southeast;
    }
  } else {
    // WEST
    if (latitudeO < latitudeD) {
      return DIRECTIONS.northwest;
    } else {
      return DIRECTIONS.southwest;
    }
  }
}

export function isCenter(originStop, centerStop) {
  return originStop['@id'] === centerStop.URI;
}