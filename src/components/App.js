import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {listenToQueries} from '../redux/actions';

import {colors} from '../constants';

import Header from './Header';
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
    const {queries} = this.props;
    return (
      <Main>
        <Header />
        <Scene queries={queries} />
        <Footer queries={queries} />
      </Main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  queries: state.queries
});

export default connect(mapStateToProps, {listenToQueries})(App);
