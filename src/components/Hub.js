import React, {Component} from 'react';
import styled from 'styled-components';
import hub from '../img/hub.svg'
import {STATION} from '../constants';

const Img = styled.img`
  height: 20vh;
`;

export default class Hub extends Component {
  render() {
    return (
      <Img src={hub} alt={STATION.name} />
    );
  }
}
