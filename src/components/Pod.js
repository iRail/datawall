import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import pod from '../img/pod.svg';

import {times, STATION} from '../constants';

const buzz = keyframes`
  0%, 100% {
    transform: scale(1) translateX(${Math.random()}vh) translateY(${Math.random()}vw);
  }

  50% {
    transform: scale(${Math.random() * (1.4 - 0.6) + 0.6}) translateX(${Math.random()}vh) translateY(${Math.random()}vw);
  }
`;

const Img = styled.img`
  width: 3em;
  height: 3em;
  animation: ${buzz} ${.5 + Math.random()}s infinite;
  transform: scale(1);
`;

// moves from departure to arrival
const Wrapper = styled.div`
  transform: translateX(1px) translateY(1px) scale(1);
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
        transform: `translateX(0) translateY(0)`
      }
    };
  }

  render() {
    const {departureStop, arrivalStop} = this.props;

    if (isCenter(departureStop)) {
      // this.setState({
      //   position: {
      //     transform: `translateX(-10px) translateY(-10px)`
      //   }
      // });
      // requestAnimationFrame(() => {
      //   this.setState({
      //     position: {
      //       transform: `translateX(-100px) translateY(-10px)`
      //     }
      //   });
      // });
    } else {
    }

    return (
      <Wrapper style={this.state.position}>
        <Img src={pod} alt="a lookup"/>
      </Wrapper>
    );
  }
}
