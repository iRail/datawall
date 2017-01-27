import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import pod from '../img/pod.svg';

import {times, STATION} from '../constants';

// somehow use the random here, now it's NaN 🙃
const buzz = keyframes`
  0%, 100% {
    transform:
      scale(1)
      translateX(${props => props.random}vh)
      translateY(${props => props.random}vw);
  }

  50% {
    transform: 
      scale(${props => props.random * (1.4 - 0.6) + 0.6})
      translateX(${props => props.random}vh)
      translateY(${props => props.random}vw);
  }
`;

const Img = styled.img`
  width: 3em;
  height: 3em;
  animation: ${buzz} ${props => .5 + props.random}s infinite;
  transform: scale(1);
`;

// moves from departure to arrival
const Wrapper = styled.div`
  transition: transform ${times.podAnimation}ms;
  position: absolute;
  left: calc(50% - 3em/2);
  top: calc(50% - 3em/2);
`;

function isCenter(stop) {
  return stop['@id'] === STATION.URI;
}

export default class Pod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {
        transform: `translateX(0) translateY(0) scale(0.8)`
      }
    };
  }

  componentDidMount() {
    const {departureStop, arrivalStop} = this.props;

    let position = '';

    if (isCenter(departureStop)) {
      position = `translateX(-50vw) translateY(-50vh)`;
    } else {
      this.setState({
        position: {
          transform: `translateX(-50vw) translateY(50vh) scale(1)`
        }
      });
      position = `translateX(0) translateY(0) scale(0.8)`;
    }

    requestAnimationFrame(() => {
      this.setState({
        position: {
          transform: position
        }
      });
    });
  }

  render() {
    return (
      <Wrapper style={this.state.position}>
        <Img src={pod} alt="a lookup"/>
      </Wrapper>
    );
  }
}
