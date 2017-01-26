import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import pod from '../img/pod.svg';

import {times} from '../constants';

const moveIn = keyframes`
  from {
    transform: translateX(${0}) translateY(${0});
  }

  to {
    transform: translateX(0) translateY(0);
  }
`;

const buzz = keyframes`
  from {
    transform: scale(1) translateX(${Math.random()}) translateY(${Math.random()});
  }

  to {
    transform: scale(${1 + Math.random()}) translateX(${Math.random()}) translateY(${Math.random()});
  }
`;

const Img = styled.img`
  width: 3em;
  height: 3em;
  animation: ${buzz} ${times.podAnimation} linear 1;
`;

const Wrapper = styled.div`
  animation: ${moveIn} ${times.podAnimation} linear 1;
`;

export default class Pod extends Component {
  render() {
    return(
      <Wrapper>
        <Img src={pod} alt="a lookup"/>
      </Wrapper>
    );
  }
}
