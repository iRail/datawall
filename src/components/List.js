import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {colors} from '../constants';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Heading = styled.th`
  text-transform: uppercase;
  text-align: left;
  font-size: .6em;
`;

const Item = styled.td`
  border-top: none;
  border-bottom: none;
  border-right: .2em ${colors.black} solid;
  padding: .4em;
`;

const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: ${colors.lightGrey};
  }
  &:nth-of-type(odd) {
    background-color: ${colors.darkGrey};
  }
`;


class List extends Component {

  renderQueries() {
    const {queries} = this.props;

    return queries.map((query,index) => {
      const date = new Date(query.querytime);
      const time = {
        hours: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        minutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
        seconds: date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      };
      return (
        <Row key={index}>
          <Item>{time.hours}:{time.minutes}:{time.seconds}</Item>
          <Item>{query.origin.name}</Item>
          <Item>{query.destination.name}</Item>
        </Row>
      );
    });
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <Heading>time</Heading>
            <Heading>departure</Heading>
            <Heading>destination</Heading>
          </tr>
        </thead>
        <tbody>
          {this.renderQueries()}
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {queries: state.queries};
}

export default connect(mapStateToProps)(List);
