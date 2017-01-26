import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {colors} from '../constants';

const Wrapper = styled.div`
  background-color: ${colors.red};
  flex-grow: 1;
`;

class Scene extends Component {
  render() {
    const { latest } = this.props;

    return(
      <Wrapper>
        The complex part of the whole thing will come here
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return { latest: state.queries[0] };
}

export default connect(mapStateToProps)(Scene);
