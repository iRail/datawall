import React from 'react';
import styled from 'styled-components';

// import {colors} from '../constants';

import logo from '../img/logo_white.svg';
import imec from '../img/logo_imec.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: space-between;
  padding: 0.8em;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 100%;
  margin: 0.4em;
`;

// const Link = styled.a`
//   color: inherit;
//   text-decoration: none;
// `;

// const Text = styled.p`
//   margin: 0;
// `

export default () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="iRail" />
      <Logo src={imec} alt="IMEC" />
    </Wrapper>
  );
}
