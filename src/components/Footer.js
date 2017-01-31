import React, {Component} from 'react';
import styled from 'styled-components';

import {colors, sizes, zIndex} from '../constants';

import List from './List.js';

const Wrapper = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};
  z-index: ${zIndex.list};
  flex-basis: ${sizes.list.height};
`; // basis should be whatever's needed for this to fit or a fraction of the height (x screens)

export default class Footer extends Component {
  render() {
    const {queries} = this.props;
    return(
      <Wrapper>
        <List queries={queries} />
      </Wrapper>
    );
  }
}
