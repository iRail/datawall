import React, {Component} from 'react';
import styled from 'styled-components';
import {colors} from '../constants';

import List from './List.js';

const Header = styled.h2`
  font-weight: 600;
`;

const Thin = styled.span`
  font-weight: 300;
  font-style: normal;
`;

const Wrapper = styled.footer`
  background-color: ${colors.black};
  color: ${colors.white};
  display: flex;
`;

const Container = styled.div`
  flex-grow: 1;
`;

const Aside = styled.aside`
  background-color: ${colors.white};
  color: ${colors.black};
  flex-basis: 20vw;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Link = styled.a`
  color: ${colors.red};
`;


export default class Footer extends Component {
  render() {
    return(
      <Wrapper className={this.props.className}>
        <Container>
          <Header>Live search queries <Thin>of iRail</Thin></Header>
          <List />
        </Container>
        <Aside>
          <strong><em>See your own search request appear in gold!</em></strong>
          <em>Search on</em>
          <Link href="https://irail.be">irail.be</Link>
          <img src="#" alt="irail logo"/>
        </Aside>
      </Wrapper>
    );
  }
}
