import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

import icons from '../img/icons';
import {colors, sizes} from '../constants';


const appear = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Item = styled.div`
  flex-grow: 1;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  animation: ${appear} 0.6s ease-in;
  &:nth-of-type(even) {
    background-color: ${colors.lightGrey};
  }

  &:nth-of-type(odd) {
    background-color: ${colors.darkGrey};
  }
`;

const Heading = styled.div`
  font-size: .8em;
  padding: .4rem;
  padding-bottom: 0;
  color: ${colors.veryLightGrey};
  white-space: nowrap;
`;

const Img = styled.img`
  width: ${sizes.icon.width};
  height: ${sizes.icon.height};
`;

const Info = styled.div`
  padding: 0 .4rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  margin: 0 .4rem;
  font-weight: 700;
  white-space: nowrap;
`;

export default class ListItem extends Component {
  render() {
    const {query, type} = this.props;

    return (
      <Item>
        <Heading>{query.origin.name}</Heading>
        <Info>
          <Img src={icons.right} alt={`${type} request`} />
          <Text>{query.destination.name}</Text>
        </Info>
      </Item>
    );
  }
}
