import React, { Component } from 'react';
import styled from 'styled-components';

import {colors, sizes} from '../constants';

import Info from './Info';
import Hub from './Hub';
import Pod from './Pod';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${sizes.scene.height};
  position: relative;
`;

const Text = styled.div`
  color: ${colors.white};
  text-align: center;
  margin: 2em 0;
  position: absolute;
  bottom: 0;
  width: 50vw;
  left: calc(50% - 25vw);
  right: calc(50% - 25vw);
`;

const P = styled.p`
  margin: .2em;
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
        <div style={{position: 'absolute'}}>{this.renderPods()}</div>
        <Hub />
        <Text>
          <P>See the future of train travel</P>
          <P>search with <strong>irail.be</strong></P>
        </Text>
      </Wrapper>
    );
  }
}

export default Scene;
