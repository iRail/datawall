import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import bee from '../img/bee.svg';

const Img = styled.img`
  width: 3em;
  height: 3em;
`;

export default class Pod extends Component {
  render() {
    return(
      <Img src={bee} alt="a lookup"/>
    );
  }
}
