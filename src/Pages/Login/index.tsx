import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ButtonSumit from '../../components/ButtonSubmit';
import Header from '../../components/Header';
import InputForm from '../../components/InputForm';
import TitleForm from '../../components/TitleForm';

import { Form, BoxLogin } from './styles';

const Login: React.FC = () => {
  return (
    <>
      <Header />

      <BoxLogin>
        <Form>
          <TitleForm>Faça o login</TitleForm>

          <InputForm name="user" placeholder="Digite seu usuário" />
          <InputForm name="password" placeholder="Digite sua senha" type="password" />

          <ButtonSumit>
            Continuar<FaArrowRight />
          </ButtonSumit>

          <Link to="/recover">Esqueci minha senha</Link>
          <Link to="/">Ainda não sou cliente</Link>
        </Form>
      </BoxLogin>
    </>
  )
}

export default Login;


