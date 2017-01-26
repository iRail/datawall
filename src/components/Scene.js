import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {colors} from '../constants';

import Hub from './Hub';
import Pod from './Pod';

const Wrapper = styled.div`
  background-color: ${colors.red};
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Scene extends Component {
  render() {
    const { latest } = this.props;

    return(
      <Wrapper>
        <Hub />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return { latest: state.queries[0] };
}

export default connect(mapStateToProps)(Scene);
