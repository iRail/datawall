import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import pod from '../img/pod.svg';

import {times} from '../constants';

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
`;

export default class Pod extends Component {
  render() {
    const {departureStop, arrivalStop} = this.props;
    console.log(departureStop, arrivalStop);
    return (
      <Wrapper>
        <Img src={pod} alt="a lookup"/>
      </Wrapper>
    );
  }
}
