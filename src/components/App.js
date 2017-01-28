import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {listenToQueries} from '../redux/actions';

import {colors} from '../constants';

import Scene from './Scene';
import Footer from './Footer';


const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${colors.red};
`;

class App extends Component {
  componentWillMount() {
    this.props.listenToQueries();
  }

  render() {
    const {queries, visible} = this.props;
    return (
      <Main>
        <Scene queries={visible} />
        <Footer queries={queries} />
      </Main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  queries: state.queries,
  visible: [{
    "departureStop": {
      "@id": "http://irail.be/stations/NMBS/008821600",
      "longitude": 4.560614,
      "latitude": 51.135758,
      "name": "Lier",
      "query": "Lier"
    },
    "arrivalStop": {
      "@id": "http://irail.be/stations/NMBS/008892007",
      "longitude": 3.710675,
      "latitude": 51.035896,
      "name": "Gent-Sint-Pieters",
      "query": "BE.NMBS.008892007"
    }
  }, {
    "departureStop": {
      "@id": "http://irail.be/stations/NMBS/008821121",
      "longitude": 4.432221,
      "latitude": 51.19923,
      "name": "Antwerp-Berchem",
      "query": "Antwerpen-Berchem"
    },
    "arrivalStop": {
      "@id": "http://irail.be/stations/NMBS/008892007",
      "longitude": 3.710675,
      "latitude": 51.035896,
      "name": "Gent-Sint-Pieters",
      "query": "BE.NMBS.008892007"
    }
  }, {
    "departureStop": {
      "@id": "http://irail.be/stations/NMBS/008892007",
      "longitude": 3.710675,
      "latitude": 51.035896,
      "name": "Gent-Sint-Pieters",
      "query": "BE.NMBS.008892007"
    },
    "arrivalStop": {
      "@id": "http://irail.be/stations/NMBS/008874609",
      "longitude": 4.608823,
      "latitude": 50.432235,
      "name": "Tamines",
      "query": {
        "@id": "http://irail.be/stations/NMBS/008874609",
        "longitude": "4.608823",
        "latitude": "50.432235",
        "name": "Tamines",
        "query": "BE.NMBS.008874609"
      }
    }
  }] // todo: make a list of the visible components in redux
});

export default connect(mapStateToProps, {listenToQueries})(App);
