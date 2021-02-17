import styled from 'styled-components';

import ImgBg from '../../assets/background-landing-1.png';

export const MainBanner = styled.section`
  background: url(${ImgBg}) no-repeat;
  background-size: 40%;
  background-position: center bottom;
  width: 100%;
  min-height: 100vh;
`;

export const MainBannerContentLeft = styled.div`
  background: #fff;
`;
