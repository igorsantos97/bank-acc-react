import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import InputForm from '../../components/InputForm';

import { Form, FormTitle, FormButtonSubmit } from './styles';

const Login: React.FC = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Form>
          <FormTitle>Faça o login</FormTitle>

          <InputForm name="user" placeholder="Digite seu usuário" />
          <InputForm name="password" placeholder="Digite sua senha" type="password" />

          <FormButtonSubmit>
            Continuar<FaArrowRight />
          </FormButtonSubmit>

          <Link to="#">Esqueci minha senha</Link>
          <Link to="#">Ainda não sou cliente</Link>

        </Form>
      </div>
    </>
  )
}

export default Login;


