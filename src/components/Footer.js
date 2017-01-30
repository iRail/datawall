import React, {Component} from 'react';
import styled from 'styled-components';

import {colors, sizes, zIndex} from '../constants';

import List from './List.js';

const Wrapper = styled.footer`
  background-color: ${colors.black};
  color: ${colors.white};
  z-index: ${zIndex.footer};
  display: flex;
  flex-basis: ${sizes.footer.height};
`; // basis should be whatever's needed for this to fit or a fraction of the height (x screens)

const Container = styled.div`
  flex-grow: 1;
  padding: 1em;
`;

export default class Footer extends Component {
  render() {
    const {queries} = this.props;
    return(
      <Wrapper>
        <Container>
          <List queries={queries} />
        </Container>
      </Wrapper>
    );
  }
}
