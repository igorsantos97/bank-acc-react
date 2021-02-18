import React from 'react';

import MainContainerFluid from '../MainContainerFluid'
import { MainHeader } from './styles';

import mainLogo from '../../assets/main-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <MainHeader>
      <MainContainerFluid>
        <Link to="/">
          <img src={mainLogo} alt="Logo da Gama Academy" />
        </Link>
      </MainContainerFluid>
    </MainHeader>
  )
}

export default Header;


