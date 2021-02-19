import React, { FormEvent } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ButtonSumit from '../../components/ButtonSubmit';

import Header from '../../components/Header';
import Container from '../../components/MainContainer/styles';
import TitleForm from '../../components/TitleForm';
import InputForm from '../../components/InputForm';

import {
  MainBanner, MainBannerContentLeft, MainBannerContent, MainBannerContentRight, Form,
  About,
} from './styles';

const Landing: React.FC = () => {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

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
              <Form onSubmit={handleSubmit}>
                <TitleForm>Peça sua conta e cartão de crédito do Gama Bank</TitleForm>
                <InputForm name="cpf" placeholder="Digita seu CPF" />
                <InputForm name="username" placeholder="Escolha um nome de usuário" />
                <InputForm name="name" placeholder="Nome completo" />
                <InputForm name="password" placeholder="Digite sua senha" />
                <InputForm name="confirmPassword" placeholder="Confirme sua senha" />
                <ButtonSumit type="submit">Continuar <FaArrowRight /></ButtonSumit>
              </Form>
            </MainBannerContentRight>
          </MainBannerContent>
        </Container>
      </MainBanner>


      <About>

      </About>

    </>
  );
}

export default Landing;