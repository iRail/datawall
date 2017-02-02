import React, {Component} from 'react';
import styled from 'styled-components';
import GSAP from 'react-gsap-enhancer';

import {isCenter, getDirection, DIRECTIONS} from '../station';
import {times, sizes, zIndex, animations} from '../constants';

import pod from '../img/pod.svg';

const POSITIONS = {
  [DIRECTIONS.northeast]: {
    rotate: 0
  },
  [DIRECTIONS.northwest]: {
    rotate: 0
  },
  [DIRECTIONS.southeast]: {
    rotate: 90
  },
  [DIRECTIONS.southwest]: {
    rotate: 90
  }
};

class Pod extends Component {
  constructor(props) {
  }

  componentDidMount() {

  }

  render() {
    const Img = styled.img`
      width: ${sizes.pod.width};
      height: ${sizes.pod.height};
      animation: ${animations.buzz()} 1s infinite;
    `;

    return (
      <Img src={pod} alt="An irail query represented by a pod" />
    );
  }
}

export default GSAP()(Pod);
