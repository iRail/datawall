import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {listenToQueries} from '../redux/actions';

import {colors} from '../constants';

import Scene from './Scene';
import List from './List';


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
        <List queries={queries} />
        <Scene queries={visible} />
      </Main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  queries: state.queries,
  visible: state.visible
});

export default connect(mapStateToProps, {listenToQueries})(App);
