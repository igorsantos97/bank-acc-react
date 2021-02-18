import styled from 'styled-components';

import ImgBg from '../../assets/background-landing-1.png';

export const MainBanner = styled.section`
  background: url(${ImgBg}) no-repeat;
  background-size: auto;
  background-position: 42% bottom;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const MainBannerContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const MainBannerContentLeft = styled.div`
  height: auto;
  max-width: 280px;
  color: #fff;
  font-size: 30px;

  span {
    display: block;
    margin: 40px 0 30px;
  }

  @media (max-width: 676px) {
    margin-top: 160px;
    margin-bottom: 22px;
    text-align: center;
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const InputForm = styled.input`
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

  & + input {
    margin-top: 30px;
  }
`;

export const Form = styled.form`
  padding: 40px 46px;
  background: #fff;
  min-height: 450px;
  border-radius: 8px;
  width: 350px;

  button {
    background: #d8d8d8;
    color: #9b9b9b;
    margin-top: 30px;
  }
`;

export const MainBannerContentRight = styled.div`
  @media (max-width: 676px) {
    margin: 0 auto;
    max-width: 100%;
  }

  form {
    @media (max-width: 676px) {
      width: 100%;
    }
  }
`;
