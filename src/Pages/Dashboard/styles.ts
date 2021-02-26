import styled from 'styled-components';
import { purple } from '../../styles/variables/colors';

export const ContainerDashboard = styled.section`
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: stretch;
  height: 100vh;
`;

export const MenuAside = styled.aside`
  background: #68de5a;
  padding: 20px 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuNav = styled.ul`
  margin-top: 25px;
`;

export const MenuNavLink = styled.a`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  width: 91px;
  height: 91px;
  background: ${purple};
  border-radius: 5px;
  padding: 12px 6px;
  color: #fff;

  & + a {
    margin-top: 25px;
  }

  span {
    font-size: 14px;
  }
`;
