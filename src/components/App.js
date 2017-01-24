import React, {Component} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';

import './App.css';
import {fetchQuery} from '../redux/actions';

import List from './List.js';

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
        <div>
          <List />
        </div>
    );
  }
}

export default connect(null, {fetchQuery})(App);
