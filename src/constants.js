/**
 * Global things that never change, colors and keyframes
 */

import {keyframes} from 'styled-components';
import {DIRECTIONS} from './station';

export const colors = {
  darkGrey: '#232323',
  lightGrey: '#353535',
  veryLightGrey: '#b5b5b5',
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

const screens = (num) => `${num * 100/7}vh`;

export const sizes = {
  pod: {
    width: '2.5em',
    height: '2.5em'
  },
  hub: {
    width: '100vw',
    height: screens(5)
  },
  scene: {
    height: screens(6)
  },
  icons: {
    height: screens(1),
  },
  labels: {
    height: screens(2),
    bottom: screens(1.7),
  },
  list: {
    height: screens(1),
    info: {
      width: '5vw',
    }
  },
  icon: {
    width: '1em',
    height: '1em',
  }
};

export const animations = {
  moveAround() {
    return keyframes`
      0%, 100% {
        transform:
          rotate(0)
          scale(1)
          translateY(5vh);
      }

      50% {
        transform:
          rotate(0)
          scale(1)
          translateY(5-${Math.random() + 2}vh);
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
    back: 1,
    doors_back_front: 3,
    jar: 4,
    doors_front_back: 5,
    doors_front_front: 7,
  }
}

export const API_BASE_URI = process.env.NODE_ENV === 'development' ? 'localhost:3001' : '/';
