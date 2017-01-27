import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../constants';

import Hub from './Hub';
import Pod from './Pod';

const Wrapper = styled.div`
  background-color: ${colors.red};
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

class Scene extends Component {
  renderPods() {
    const {visible} = this.props;
    return visible.map((pod,index) => {
      return (
        <Pod {...pod} key={index} random={Math.random()}/>
      );
    });
  }

  render() {
    return (
      <Wrapper>
        {this.renderPods()}
        <Hub />
      </Wrapper>
    );
  }
}

// remove when you can get the visible pods
Scene.defaultProps = {
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
  }]
}

export default Scene;
