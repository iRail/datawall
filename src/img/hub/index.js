import all from './all.svg';
import jar from './jar.svg';
import north_back from './north_back.svg';
import north_front from './north_front.svg';
import platform from './platform.svg';
import south_back from './south_back.svg';
import south_front from './south_front.svg';

export default {
  all,
  jar,
  north: {
    back: north_back,
    north: north_front,
  },
  platform,
  south: {
    back: south_back,
    front: south_front,
  }
}