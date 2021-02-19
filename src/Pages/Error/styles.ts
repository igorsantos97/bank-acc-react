import styled from 'styled-components';
import { purple } from '../../styles/variables/colors';

export const BoxError = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 140px 10px;
`;

export const CardError = styled.div`
  padding: 40px 46px;
  background: #fff;
  color: ${purple};
  min-height: 422px;
  border-radius: 8px;
  width: 455px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: 0.6s forwards toRight;

  > svg {
    font-size: 100px;
  }

  p {
    text-align: center;
    margin: 0 auto;
    max-width: 200px;
    margin-bottom: 30px;
    margin-top: 10px;
  }

  button {
    background: #68de5a;
    color: #fff;
  }
`;
