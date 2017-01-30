import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

import {isCenter, getDirection, DIRECTIONS} from '../station';
import {times, sizes, zIndex} from '../constants';

import pod from '../img/pod.svg';

const POSITIONS = {
  center: {
    x: 0,
    y: 0
  },
  [DIRECTIONS.northeast]: {
    x: 50,
    y: -50,
    scaleX: 1,
    scaleY: 1,
    rotate: 0
  },
  [DIRECTIONS.northwest]: {
    x: -50,
    y: -50,
    scaleX: -1,
    scaleY: 1,
    rotate: 0
  },
  [DIRECTIONS.southeast]: {
    x: 50,
    y: 50,
    scaleX: 1,
    scaleY: 1,
    rotate: 90
  },
  [DIRECTIONS.southwest]: {
    x: -50,
    y: 50,
    scaleX: -1,
    scaleY: 1,
    rotate: 90
  }
};

const getPosition = (origin, destination) => POSITIONS[getDirection(origin, destination)];

const offsetCenter = (position) => ({
  x: position.x + POSITIONS.center.x, 
  y: position.y + POSITIONS.center.y
});

// moves from departure to arrival
const Wrapper = styled.div`
  transition: transform ${times.pod.moveIn}ms;
  position: absolute;
  left: calc(50% - ${sizes.pod.width}/2);
  top: calc(50% - ${sizes.pod.height}/2);
  z-index: ${zIndex.pod};
`;

export default class Pod extends Component {
  constructor(props) {
    super(props);
    // original position
    let {x, y} = offsetCenter(getPosition(props.destination, props.origin));
    if(isCenter(props.origin)) {
      ({x,y} = POSITIONS.center);
    }

    // sets the right direction the bee should be facing
    let {scaleX, scaleY, rotate} = getPosition(props.origin, props.destination);
    this.state = {
      position: {
        transform: `translateX(${x}vw) translateY(${y}vh) scaleX(${scaleX}) scaleY(${scaleY}) rotate(${rotate}deg)`,
      }
    }
  }

  componentDidMount() {
    const {origin, destination} = this.props;

    // the position and direction the bee should fly to
    let {x, y, scaleX, scaleY, rotate} = getPosition(origin, destination);
    if(isCenter(origin) === false) {
      ({x,y} = POSITIONS.center);

      const moveAround = keyframes`
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

      setTimeout(() => this.setState({
        position: {
          transition: `transform ${.5 + Math.random()}ms`,
          animation: `${moveAround} ${.5 + Math.random()}s infinite`
        }
      }), times.pod.moveIn);
    }

    // won't fire when in another tab, nbd
    setTimeout(() => requestAnimationFrame(() => this.setState({
      position: {
        transform: `translateX(${x}vw) translateY(${y}vh) scaleX(${scaleX}) scaleY(${scaleY}) rotate(${rotate}deg)`
      }
    })), 0);
  }

  render() {
    const random = Math.random();

    // todo: make this look better (#12)
    const buzz = keyframes`
      0%, 100% {
        transform:
          scale(1)
          translateX(${random}vh)
          translateY(${random}vw);
      }

      50% {
        transform: 
          scale(${random * (1.4 - 0.6) + 0.6})
          translateX(${random}vh)
          translateY(${random}vw);
      }
    `;

    const Img = styled.img`
      width: ${sizes.pod.width};
      height: ${sizes.pod.height};
      animation: ${buzz} ${.5 + Math.random()}s infinite;
    `;

    return (
      <Wrapper style={this.state.position}>
        <Img src={pod} alt="a lookup" />
      </Wrapper>
    );
  }
}
