import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {isCenter, getDirection, DIRECTIONS} from '../station';
import {times} from '../constants';

import pod from '../img/pod.svg';

const POSITIONS = {
  center: `translateX(0) translateY(0) scale(0.8)`
};

// moves from departure to arrival
const Wrapper = styled.div`
  transition: transform ${times.podAnimation}ms;
  position: absolute;
  left: calc(50% - 3em/2);
  top: calc(50% - 3em/2);
`;

function getPosition(stop) {
    switch (getDirection(stop)) {
      case DIRECTIONS.northeast:
        break;
      case DIRECTIONS.northwest:
        break;
      case DIRECTIONS.southeast:
        break;
      case DIRECTIONS.southwest:
        break;
      default:
        break;
    }
}

export default class Pod extends Component {
  constructor(props) {
    super(props);
    const {origin} = props;
    if (isCenter(origin)) {
      this.state = {
        position: {
          transform: `translateX(0) translateY(0) scale(-1, 1)`,
        }
      }
    } else {
      this.state = {
        position: {
          transform: `translateX(0) translateY(0) scale(0.8)`
        }
      };
    }
  }

  componentDidMount() {
    const {origin, destination} = this.props;

    let position = '';

    if (isCenter(origin)) {
      getPosition(destination);
      position = `translateX(-50vw) translateY(-50vh) scale(-1, 1)`;
    } else {
      getPosition(origin);
      this.setState({
        position: {
          transform: `translateX(-50vw) translateY(50vh) scale(1)`
        }
      });
      position = POSITIONS.center;
    }

    setTimeout(() => this.setState({
      position: {
        transform: position
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
      width: 3em;
      height: 3em;
      animation: ${buzz} ${props => .5 + props.random}s infinite;
    `;

    return (
      <Wrapper style={this.state.position}>
        <Img src={pod} alt="a lookup" random={Math.random()} />
      </Wrapper>
    );
  }
}
