import React from 'react';
import Header from '../../components/Header';
import Container from '../../components/MainContainer/styles';

import { MainBanner, MainBannerContentLeft } from './styles';

const Landing: React.FC = () => {
  return (
    <>
      <Header />

      <MainBanner>
        <Container>
          <MainBannerContentLeft>
            <p>Oi</p>

          </MainBannerContentLeft>
        </Container>
      </MainBanner>
    </>
  );
}

export default Landing;