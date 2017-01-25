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
  height: 100vh;
`;

class App extends Component {
  componentWillMount() {
    this.startFetching();
  }

  startFetching() {
    const fetchQueryProp = this.props.fetchQuery;
    const apiBaseUrl = process.env.NODE_ENV === 'development' ? 'localhost:3001' : '/';

    const socket = io(apiBaseUrl);

    socket.emit('fetchLogs', { stop: 'http://irail.be/stations/NMBS/008892007'});
    socket.on('query', function(data) {
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
