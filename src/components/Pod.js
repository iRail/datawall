import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {isCenter, getDirection, DIRECTIONS} from '../station';
import {times} from '../constants';

import pod from '../img/pod.svg';

const POSITIONS = {
  center: {
    x: 0,
    y: 0,
    scale: 1
  },
  [DIRECTIONS.northeast]: {
    x: -50,
    y: 50,
    scale: 1 // todo: make sure direction is right
  },
  [DIRECTIONS.northwest]: {
    x: 50,
    y: 50,
    scale: 1
  },
  [DIRECTIONS.southeast]: {
    x: -50,
    y: -50,
    scale: 1
  },
  [DIRECTIONS.southwest]: {
    x: 50,
    y: -50,
    scale: 1
  }
};

function getPosition(stop) {
  return POSITIONS[getDirection(stop)];
}

const width = '3em';

// moves from departure to arrival
const Wrapper = styled.div`
  transition: transform ${times.podAnimation}ms;
  position: absolute;
  left: calc(50% - ${width}/2);
  top: calc(50% - ${width}/2);
`;

export default class Pod extends Component {
  constructor(props) {
    super(props);
    let {x, y, scale} = POSITIONS.center;
    this.state = {
      position: {
        transform: `translateX(${x}) translateY(${y}) scale(${scale})`,
      }
    }
  }

  componentDidMount() {
    const {origin, destination} = this.props;
    let position = POSITIONS.center;

    if (isCenter(origin)) {
      position = getPosition(destination);
    } else {
      let {x, y, scale} = getPosition(origin);
      this.setState({
        position: {
          transform: `translateX(${x}vw) translateY(${y}vh) scale(${scale})`
        }
      });
    }

    let {x, y, scale} = position;
    setTimeout(() => this.setState({
      position: {
        transform: `translateX(${x}vw) translateY(${y}vh) scale(${scale})`
      }
    }), 0);
  }

  render() {
    const random = Math.random();
    
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
      width: ${width};
      height: ${width};
      animation: ${buzz} ${props => .5 + props.random}s infinite;
    `;

    return (
      <Wrapper style={this.state.position}>
        <Img src={pod} alt="a lookup" random={Math.random()} />
      </Wrapper>
    );
  }
}
