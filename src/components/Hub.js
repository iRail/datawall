import React from 'react';
import styled from 'styled-components';
import { name } from '../../config.json';
import hub from '../img/hub';

import { colors, sizes, zIndex } from '../constants';

const Wrapper = styled.div`
  width: ${sizes.hub.width};
  height: ${sizes.hub.height};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Item = styled.div`
  width: ${sizes.hub.width};
  height: ${sizes.hub.height};
  z-index: ${props => zIndex.hub[props.id]};
  background-image: url(${props => hub[props.id]});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Images = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
`;

const Text = styled.span`
  color: ${colors.white};
  margin-top: -30vh;
  font-size: 4vh;
`;

export default () => (
  <Wrapper>
    <Text>{name}</Text>
    <Images>
      <Item id="back" />
      <Item id="doors_back_front" />
      <Item id="jar" />
      <Item id="doors_front_back" />
      <Item id="doors_front_front" />
    </Images>
  </Wrapper>
);
