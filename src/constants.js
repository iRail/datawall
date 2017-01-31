/**
 * Global things that never change, colors and keyframes
 */

import { keyframes } from 'styled-components';
import {DIRECTIONS} from './station';

export const colors = {
  darkGrey: '#232323',
  lightGrey: '#353535',
  white: '#ffffff',
  black: '#191919',
  red: '#c91f1b'
};

export const times = {
  pod: {
    moveIn: 3000,
    moveAround: 5000
  }
};

export const sizes = {
  pod: {
    width: '3em',
    height: '3em'
  },
  hub: {
    width: '40vw',
    height: '40vh'
  },
  list: {
    height: '10vh'
  }
};

export const animations = {
  moveAround() {
    return keyframes`
      0%, 100% {
        transform:
          rotate(0)
          scale(1)
          translateY(-${Math.random()}vh);
      }

      50% {
        transform: 
          rotate(0)
          scale(1)
          translateY(-${Math.random() + 2}vh);
      }
    `;
  },
  // todo: make this look better (#12)
  buzz() {
    return keyframes`
      0%, 100% {
        transform:
          scale(1)
          translateX(${Math.random()}vh)
          translateY(${Math.random()}vw);
      }

      50% {
        transform: 
          scale(${Math.random() * (1.4 - 0.6) + 0.6})
          translateX(${Math.random()}vh)
          translateY(${Math.random()}vw);
      }
    `;
  },
}

export const zIndex = {
  list: 8,
  pod: {
    [DIRECTIONS.southwest]: 2,
    [DIRECTIONS.southeast]: 2,
    [DIRECTIONS.northwest]: 6,
    [DIRECTIONS.northeast]: 6,
  },
  hub: {
    south_front: 7,
    south_back: 5,
    jar: 4,
    north_front: 3,
    north_back: 1,
    platform: 0,
  }
}

export const API_BASE_URI = process.env.NODE_ENV === 'development' ? 'localhost:3001' : '/';
