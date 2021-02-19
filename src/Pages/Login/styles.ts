import styled from 'styled-components';

export const BoxLogin = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 140px 10px;
`;

export const Form = styled.form`
  padding: 40px 46px;
  background: #fff;
  min-height: 422px;
  border-radius: 8px;
  width: 455px;
  margin: auto;

  animation: 0.6s forwards toRight;

  a {
    color: #8c52e5;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: '>';
      display: inline-block;
      margin-left: 4px;
    }

    & + a {
      margin-top: 10px;
    }
  }

  button {
    background: #68de5a;
    margin-bottom: 38px;
    margin-top: 36px;
    padding: 10px 35px;
    color: #fff;

    svg {
      font-size: 22px;
    }
  }
`;
