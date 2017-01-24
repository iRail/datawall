import React, {Component} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';

import './App.css';
import {fetchQuery} from '../redux/actions';

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

  renderQueries() {
    const {queries} = this.props;

    return queries.map(query => {
      return <li key={queries.indexOf(query)}>{query.origin.name} => {query.destination.name}</li>;
    });
  }

  // TODO make seperate list component jwz with all of the above methods enzu
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div>
          <ul>
            {this.renderQueries()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {queries: state.queries};
}

export default connect(mapStateToProps, {fetchQuery})(App);
