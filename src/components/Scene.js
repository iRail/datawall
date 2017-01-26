import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../constants';

import Hub from './Hub';
import Pod from './Pod';

const Wrapper = styled.div`
  background-color: ${colors.red};
  flex-grow: 1;
`;

class Scene extends Component {
  render() {
    return(
      <Wrapper>
        <Pod />
        <Hub />
      </Wrapper>
    );
  }
}

export default Scene;
