import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import pod from '../img/pod.svg';

const moveIn = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
  width: 3em;
  height: 3em;
  animation: ${moveIn} 2s linear infinite;
`;



export default class Pod extends Component {
  render() {
    return(
      <Img src={pod} alt="a lookup"/>
    );
  }
}
