import React from 'react';
import styled from 'styled-components';

import {colors} from '../constants';

import logo from '../img/logo_white.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8em;
`;

const Header = styled.h2`
  font-weight: 600;
  margin: .4em;
  color: ${colors.white};
`;

const Logo = styled.img`
  width: 12vw;
  margin: 0.4em;
`;

export default () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <Header>
        See your own search request <br/>use www.irail.be
      </Header>
    </Wrapper>
  );
}
