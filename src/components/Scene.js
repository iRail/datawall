import React, { Component } from 'react';
import styled from 'styled-components';

import {colors, sizes} from '../constants';

import Info from './Info';
import Hub from './Hub';
import Pod from './Pod';

const Wrapper = styled.div`
  flex-grow: 1;
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

const Labels = styled.div`
  position: absolute;
  bottom: ${sizes.labels.bottom};
  left: 0;
  height: ${sizes.labels.height};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LabelsInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.p`
  font-weight: 700;
  margin: 0 .4em;
  color: ${colors.white};
  transform: rotate(${props => props.rotate}deg);
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
        <Labels>
          <LabelsInner>
            <Label rotate={6}>Brugge</Label>
            <Label rotate={-6}>Antwerpen</Label>
          </LabelsInner>
          <div style={{flexGrow: 1}}></div>
          <LabelsInner>
            <Label rotate={-19}>Kortrijk</Label>
            <Label rotate={19}>Brussel</Label>
          </LabelsInner>
        </Labels>
        <Text>
          <P>See the future of train travel</P>
          <P>search with <strong>irail.be</strong></P>
        </Text>
      </Wrapper>
    );
  }
}

export default Scene;
