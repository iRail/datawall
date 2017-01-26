import React, {Component} from 'react';
import styled from 'styled-components';
import hub from '../img/hub.svg'
import {STATION} from '../constants';

const Img = styled.img`
  height: 20vh;
`;

const Wrapper = styled.div`
`;

const Text = styled.span`
`;

export default class Hub extends Component {
  render() {
    return (
      <Wrapper>
        <Text>{STATION.name}</Text>
        <Img src={hub} alt={STATION.name} />
      </Wrapper>
    );
  }
}
