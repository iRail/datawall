import React from 'react';
import styled from 'styled-components';

import {sizes} from '../constants';

import logo from '../img/logo_white.svg';
import imec from '../img/logo_imec.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${sizes.icons.height};
  box-sizing: border-box;
  transform: translateY(-0.5em);
`;

const Logo = styled.img`
  height: 100%;
  margin: 0.4em;
`;

export default () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="iRail" />
      <Logo src={imec} alt="IMEC" />
    </Wrapper>
  );
}
