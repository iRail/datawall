import React, {Component} from 'react';
import styled from 'styled-components';

import icons from '../img/icons';
import {colors, sizes, zIndex} from '../constants';
import ListItem from './ListItem';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  color: ${colors.white};
  z-index: ${zIndex.list};
  flex-basis: ${sizes.list.height};
  flex-grow: 0;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: ${props => props.direction};
  width: 100%;
  height: 100%;
`;

const InfoItem = styled.div`
  padding: .4rem;
  min-width: ${sizes.list.info.width};
  background-color: ${colors.red};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export default class List extends Component {
  renderItems(items, type) {
    return items.map((query, i) => (
      <ListItem
        key={i}
        query={query}
        type={type}
      />
    ));
  }

  render() {
    const {inbound, outbound} = this.props.queries;

    return (
      <Wrapper>
        <Container direction="row">
          <InfoItem>
            <Img src={icons.outbound} alt="outbound requests" />
          </InfoItem>
          {this.renderItems(outbound, 'outbound')}
        </Container>
        <Container direction="row-reverse">
          <InfoItem>
            <Img src={icons.inbound} alt="outbound requests" />
          </InfoItem>
          {this.renderItems(inbound, 'inbound')}
        </Container>
      </Wrapper>
    );
  }
}
