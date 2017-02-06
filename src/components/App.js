import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {listenToQueries} from '../redux/actions';

import {colors, sizes} from '../constants';

import Scene from './Scene';
import List from './List';


const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${colors.red};
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: repeating-linear-gradient(180deg,transparent,transparent 13.8vh, blue ${sizes.list.height});
  opacity: .8;
  z-index: 1000;
`;

class App extends Component {
  componentWillMount() {
    this.props.listenToQueries();
  }

  render() {
    const {queries} = this.props;
    return (
      <Main>
        <List queries={queries} />
        <Scene queries={queries} />
        {this.props.overlay ? <Overlay /> : ''}
      </Main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  queries: state.queries,
  visible: state.visible
});

export default connect(mapStateToProps, {listenToQueries})(App);
