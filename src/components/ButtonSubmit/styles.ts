import styled from 'styled-components';
import { purple } from '../../styles/variables/colors';

export const ButtonSubmit = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  padding: 12px 16px;
  color: ${purple};

  svg {
    font-size: 20px;
  }
`;
