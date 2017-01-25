import React, {Component} from 'react';
import styled from 'styled-components';

import {colors} from '../constants';

const Wrapper = styled.div`
  background-color: ${colors.red};
`;

export default class Scene extends Component {
  render() {
    return(
      <Wrapper className={this.props.className}>
        The complex part of the whole thing will come here
      </Wrapper>
    );
  }
}
