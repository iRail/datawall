import React, {Component} from 'react';
import styled from 'styled-components';

import icons from '../img/icons';
import {isCenter} from '../station';
import {colors, sizes, zIndex} from '../constants';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  color: ${colors.white};
  z-index: ${zIndex.list};
  flex-basis: ${sizes.list.height};
  flex-grow: 0;
  border: 1px solid ${colors.black};
  overflow: hidden;
  display: flex;
`;

const Item = styled.div`
  flex-grow: 1;
  max-width: 50vw;
  display: flex;
  flex-direction: column;

  &:nth-of-type(even) {
    background-color: ${colors.lightGrey};
  }

  &:nth-of-type(odd) {
    background-color: ${colors.darkGrey};
  }
`;

const Heading = styled.div`
  text-transform: uppercase;
  text-align: right;
  font-size: .8em;
  padding: .4rem;
  background-color: ${colors.black};
`;

const Info = styled.div`
  padding: .4rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  margin: .4rem;
`;

export default class List extends Component {
  renderQueries() {
    const {queries} = this.props;

    return queries.map((query,index) => {
      const date = new Date(query.querytime);
      const time = {
        hours: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        minutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
        seconds: date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      };
      const inbound = isCenter(query.destination);

      return (
        <Item key={index}>
          <Heading>{time.hours}:{time.minutes}:{time.seconds}</Heading>
          <Info>
            <img src={inbound ? icons.inbound : icons.outbound} alt={inbound ? 'inbound' : 'outbound'} style={{width: sizes.icon.width, height: sizes.icon.height}}/>
            <Text>{inbound ? query.origin.name : query.destination.name}</Text>
          </Info>
        </Item>
      );
    });
  }

  render() {
    return (
      <Wrapper>
        {this.renderQueries()}
      </Wrapper>
    );
  }
}
