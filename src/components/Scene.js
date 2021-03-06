import React, { Component } from 'react';
import styled from 'styled-components';

import { colors, sizes } from '../constants';

import icons from '../img/icons';

import Info from './Info';
import Hub from './Hub';
import Pod from './Pod';

const Wrapper = styled.div`
  flex-grow: 1;
  height: ${sizes.scene.height};
  position: relative;
  transform: translateY(0.5em);
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
  margin: 0;
  margin-bottom: 1em;
  color: ${colors.white};
  transform: rotate(${props => props.rotate}deg);
  display: flex;
  align-items: center;
`;

class Scene extends Component {
  renderPods() {
    const { queries, removePod } = this.props;
    return queries.all.map(query => (
      <Pod query={query} key={query.index} removePod={removePod} />
    ));
  }

  render() {
    return (
      <Wrapper>
        <Info />
        <div style={{ position: 'absolute' }}>{this.renderPods()}</div>
        <Hub />
        <Labels>
          <LabelsInner>
            <Label rotate={6}>
              <img
                src={icons.chevronLeft}
                alt="inbound request"
                style={{ width: sizes.icon.width, height: sizes.icon.height }}
              />
              Brugge
            </Label>
            <Label rotate={-6}>
              Antwerpen

              <img
                src={icons.chevronRight}
                alt="inbound request"
                style={{ width: sizes.icon.width, height: sizes.icon.height }}
              />
            </Label>
          </LabelsInner>
          <div style={{ flexGrow: 1 }} />
          <LabelsInner>
            <Label rotate={-19}>
              <img
                src={icons.chevronLeft}
                alt="inbound request"
                style={{ width: sizes.icon.width, height: sizes.icon.height }}
              />
              Kortrijk
            </Label>
            <Label rotate={19}>
              Brussel

              <img
                src={icons.chevronRight}
                alt="inbound request"
                style={{ width: sizes.icon.width, height: sizes.icon.height }}
              />
            </Label>
          </LabelsInner>
        </Labels>
        <Text>
          <P>Bekijk de toekomst van treinreizen</P>
          <P>zoek met <strong>irail.be</strong></P>
        </Text>
      </Wrapper>
    );
  }
}

export default Scene;
