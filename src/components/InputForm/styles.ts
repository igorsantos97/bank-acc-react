import styled from 'styled-components';

export const Input = styled.input`
  margin-top: 50px;
  border: none;
  border-bottom: 1px solid #878686;
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;

  &::placeholder {
    color: #878686;
  }

  &:focus {
    border-bottom: 1px solid #68de5a;
  }
`;
