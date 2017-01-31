import React, {Component} from 'react';
import styled from 'styled-components';
import {name} from '../../config.json';
import hub from '../img/hub';

import {colors, sizes, zIndex} from '../constants';


const Wrapper = styled.div`
  width: ${sizes.hub.width};
  height: ${sizes.hub.height};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Item = styled.div`
  width: ${sizes.hub.width};
  height: ${sizes.hub.height};
  z-index: ${props => zIndex.hub[props.id]};
  background-image: url(${props => hub[props.id]});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
`;

const Images = styled.div`
  position: relative;
  top: 0;
  left: 0;
  position: absolute;
`;

const Text = styled.span`
  color: ${colors.white};
  margin-top: -9vh;
  font-size: 3vh;
`;

class Hub extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <Wrapper>
        <Text>{name}</Text>
        <Images>
          <Item id="north_front" />
          <Item id="north_back" />
          <Item id="jar" />
          <Item id="south_front" />
          <Item id="south_back" />
          <Item id="platform" />
        </Images>
      </Wrapper>
    );
  }
};

export default Hub;
