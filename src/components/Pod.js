import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import bee from '../img/bee.svg';

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
      <Img src={bee} alt="a lookup"/>
    );
  }
}
