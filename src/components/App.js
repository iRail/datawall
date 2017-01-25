import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import io from 'socket.io-client';

import {fetchQuery} from '../redux/actions';

import Scene from './Scene.js';
import Footer from './Footer.js';


const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Container = styled(Scene)`
  flex-basis: 75vh;
`;

const Bottom = styled(Footer)`
  flex-basis: 25vh;
`;


class App extends Component {
  componentWillMount() {
    this.startFetching();
  }

  startFetching() {
    const fetchQueryProp = this.props.fetchQuery;
    const apiBaseUrl = process.env.NODE_ENV === 'development' ? 'localhost:3001' : '/';

    const socket = io(apiBaseUrl);

    socket.emit('fetchLogs', { arrivalStop: 'http://irail.be/stations/NMBS/008892007'});
    socket.on('query', function(data) {
      fetchQueryProp(data);
    });
  }

  render() {
    return (
      <Main>
        <Container />
        <Bottom />
      </Main>
    );
  }
}

export default connect(null, {fetchQuery})(App);
