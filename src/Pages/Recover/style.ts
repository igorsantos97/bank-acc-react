import styled from 'styled-components';

export const Form = styled.form`
  padding: 40px 46px;
  background: #fff;
  min-height: 422px;
  border-radius: 8px;
  width: 455px;
  margin: auto;
  text-align: center;

  animation: 0.6s forwards toRight;

  h2 {
    margin-bottom: 16px;
  }

  input:nth-child(2) {
    margin-top: 0;
  }

  input + input {
    margin-top: 30px;
  }

  button {
    background: #d8d8d8;
    color: #9b9b9b;
    margin-top: 30px;
  }

  button {
    background: #68de5a;
    color: #fff;
  }
`;

export const BoxRecover = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 140px 10px;
`;
