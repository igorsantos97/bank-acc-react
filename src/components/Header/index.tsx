import React from 'react';

import { MainHeader, MainHeaderContainer } from './styles';

import mainLogo from '../../assets/main-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <MainHeader>
      <MainHeaderContainer>
        <Link to="/" className="logo">
          <img src={mainLogo} alt="Logo da Gama Academy" />
        </Link>
      </MainHeaderContainer>
    </MainHeader>
  )
}

export default Header;


