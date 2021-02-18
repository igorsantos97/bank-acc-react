import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ButtonSumit from '../../components/ButtonSubmit';

import Header from '../../components/Header';
import Container from '../../components/MainContainer/styles';
import TitleForm from '../../components/TitleForm';
import { MainBanner, MainBannerContentLeft, MainBannerContent, MainBannerContentRight, Form, InputForm } from './styles';

const Landing: React.FC = () => {
  return (
    <>
      <Header />

      <MainBanner>
        <Container>
          <MainBannerContent>

            <MainBannerContentLeft>
              <p>Gama Bank é um projeto de nossos alunos. <span>Já tem conta?</span></p>
              <Link to="/login">
                <ButtonSumit>Acessar <FaArrowRight /></ButtonSumit>
              </Link>
            </MainBannerContentLeft>

            <MainBannerContentRight>
              <Form>
                <TitleForm>Peça sua conta e cartão de crédito do Gama Bank</TitleForm>
                <InputForm placeholder="Digita seu CPF" />
                <InputForm placeholder="Escolha um nome de usuário" />
                <InputForm placeholder="Nome completo" />
                <InputForm placeholder="Digite sua senha" />
                <InputForm placeholder="Confirme sua senha" />
                <ButtonSumit>Continuar <FaArrowRight /></ButtonSumit>
              </Form>
            </MainBannerContentRight>

          </MainBannerContent>
        </Container>
      </MainBanner>
    </>
  );
}

export default Landing;