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
`;

class Scene extends Component {
  renderPods() {
    const {visible} = this.props;
    return visible.map((pod,index) => {
      return (
        <Pod {...pod} key={index}/>
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
      "longitude": "4.560614",
      "latitude": "51.135758",
      "name": "Lier",
      "query": "Lier"
    },
    "arrivalStop": {
      "@id": "http://irail.be/stations/NMBS/008833001",
      "longitude": "4.715866",
      "latitude": "50.88228",
      "name": "Leuven",
      "query": "Leuven"
    }
  }, {
    "departureStop": {
      "@id": "http://irail.be/stations/NMBS/008821121",
      "longitude": "4.432221",
      "latitude": "51.19923",
      "name": "Antwerp-Berchem",
      "query": "Antwerpen-Berchem"
    },
    "arrivalStop": {
      "@id": "http://irail.be/stations/NMBS/008813003",
      "longitude": "4.356801",
      "latitude": "50.845658",
      "name": "Brussels-Central",
      "query": "Brussel-Centraal"
    }
  }, {
    "departureStop": {
      "@id": "http://irail.be/stations/NMBS/008882206",
      "longitude": "4.190609",
      "latitude": "50.464974",
      "name": "La Louvière-Sud",
      "query": "BE.NMBS.008882206"
    },
    "arrivalStop": {
      "@id": "http://irail.be/stations/NMBS/008874609",
      "longitude": "4.608823",
      "latitude": "50.432235",
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
