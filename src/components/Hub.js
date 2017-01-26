import React, {Component} from 'react';
import styled from 'styled-components';
import hub from '../img/hub.svg'
import {STATION, colors} from '../constants';


const Wrapper = styled.div`
`;

const MainStation = styled.div`
  height: 40vh;
  width: 40vw;
  background-image: url(${hub});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
`;

const Text = styled.span`
  color: ${colors.white};
  line-height: 30vh;
`;

export default class Hub extends Component {
  render() {
    return (
      <Wrapper>
        <MainStation>
          <Text>{STATION.name}</Text>
        </MainStation>
      </Wrapper>
    );
  }
}
