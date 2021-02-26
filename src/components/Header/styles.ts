import styled from 'styled-components';

export const MainHeader: React.FC = styled.header`
  width: 100%;
  margin-top: 50px;
  position: absolute;
`;

export const MainHeaderContainer: React.FC = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 16px;
  z-index: 100;

  .logo {
    display: inline-block;
  }
`;
