import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import ButtonSumit from '../../components/ButtonSubmit';

import Header from '../../components/Header';
import InputForm from '../../components/InputForm';
import TitleForm from '../../components/TitleForm';
import { Form, BoxRecover } from './style';

const Recover: React.FC = () => {
  function handleSubmit() { }

  return (
    <>
      <Header />

      <BoxRecover>
        <Form onSubmit={handleSubmit}>
          <TitleForm>Esqueci minha senha</TitleForm>
          <p>Confirme seu CPF e escolha sua nova senha</p>

          <InputForm name="cpf" placeholder="Confirme seu CPF" />
          <InputForm name="password" placeholder="Digite sua nova senha" />
          <InputForm name="newPassword" placeholder="Confirme sua nova senha" />

          <ButtonSumit>
            Enviar<FaArrowRight />
          </ButtonSumit>
        </Form>
      </BoxRecover>
    </>
  );
}

export default Recover;
