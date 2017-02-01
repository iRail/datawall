import React, { Component } from 'react';
import styled from 'styled-components';

import {colors} from '../constants';

import Info from './Info';
import Hub from './Hub';
import Pod from './Pod';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Text = styled.div`
  color: ${colors.white};
`;

class Scene extends Component {
  renderPods() {
    const {queries} = this.props;
    return Object.entries(queries).map(([index, pod]) => <Pod {...pod} key={index}/>);
  }

  render() {
    return (
      <Wrapper>
        <Info />
        {this.renderPods()}
        <Hub />
        <Text>
          <p>See the future of train travel</p>
          <p>search with <strong>irail.be</strong></p>
        </Text>
      </Wrapper>
    );
  }
}

export default Scene;
