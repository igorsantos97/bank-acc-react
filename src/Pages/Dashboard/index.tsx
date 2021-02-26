import React from 'react';

import logo from '../../assets/logo-dashboard.png';
import pixIcon from '../../assets/pix.svg';
import { ContainerDashboard, MenuAside, MenuNav, MenuNavLink } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <ContainerDashboard>
        <MenuAside>
          <img src={logo} alt="" />
          <MenuNav>
            <MenuNavLink href="#">
              <img src={pixIcon} alt="Icone do Pix" />
              <span>Depositos</span>
            </MenuNavLink>
            <MenuNavLink href="#">
              <img src={pixIcon} alt="Icone do Pix" />
              <span>Planos</span>
            </MenuNavLink>
            <MenuNavLink href="#">
              <img src={pixIcon} alt="Icone do Pix" />
              <span>Pagamentos</span>
            </MenuNavLink>
            <MenuNavLink href="#">
              <img src={pixIcon} alt="Icone do Pix" />
              <span>Transações</span>
            </MenuNavLink>
          </MenuNav>
        </MenuAside>
      </ContainerDashboard>
    </>
  );
}

export default Dashboard;