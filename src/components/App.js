import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import io from 'socket.io-client';

import {fetchQuery} from '../redux/actions';
import {API_BASE_URI, STATION_URI} from '../constants';

import Scene from './Scene.js';
import Footer from './Footer.js';


const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

class App extends Component {
  componentWillMount() {
    this.startFetching();
  }

  startFetching() {
    const fetchQueryProp = this.props.fetchQuery;

    const socket = io(API_BASE_URI);

    // socket.emit('fetchLogs', { stop: STATION_URI});
    socket.on(STATION_URI, function(data) {
      fetchQueryProp(data);
    });
  }

  render() {
    return (
      <Main>
        <Scene />
        <Footer />
      </Main>
    );
  }
}

export default connect(null, {fetchQuery})(App);
