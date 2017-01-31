import React from 'react';
import styled from 'styled-components';

import {colors} from '../constants';

import logo from '../img/logo_white.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8em;
  position: absolute;
  top: 0;
  left: 0;
`;

const Header = styled.header`
  font-weight: 600;
  margin: .4em;
  font-size: 2vh;
  color: ${colors.white};
`;

const Logo = styled.img`
  width: 5vh;
  margin: 0.4em;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

const Text = styled.p`
  margin: 0;
`

export default () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <Header>
        <Text>See your own search request</Text>
        <Text>use <Link href="https://irail.be/route" target="_blank" rel="noopener">www.irail.be</Link></Text>
      </Header>
    </Wrapper>
  );
}
