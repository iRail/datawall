import React from 'react';
import styled from 'styled-components';
import {name} from '../../config.json';
import hub from '../img/hub.svg';

import {colors, sizes} from '../constants';

const Wrapper = styled.div`
`;

const MainStation = styled.div`
  width: ${sizes.hub.width};
  height: ${sizes.hub.height};
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

export default () => {
    return (
      <Wrapper>
        <MainStation>
          <Text>{name}</Text>
        </MainStation>
      </Wrapper>
    );
}
