import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Hub from './Hub';
import Pod from './Pod';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

class Scene extends Component {
  static defaultProps = {
    ...Component.defaultProps,
    queries: [],
  }

  renderPods() {
    const {queries} = this.props;
    return queries.map((pod,index) => {
      return (
        <Pod {...pod} key={index}/>
      );
    });
  }

  render() {
    return (
      <Wrapper>
        <Header />
        {this.renderPods()}
        <Hub />
      </Wrapper>
    );
  }
}

export default Scene;
