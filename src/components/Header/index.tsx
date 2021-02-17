import React from 'react';

import MainContainerFluid from '../MainContainerFluid'
import { MainHeader } from './styles';

import mainLogo from '../../assets/main-logo.png';

const Header = () => {
  return (
    <MainHeader>
      <MainContainerFluid>
        <img src={mainLogo} alt="Logo da Gama Academy" />
      </MainContainerFluid>
    </MainHeader>
  )
}

export default Header;


