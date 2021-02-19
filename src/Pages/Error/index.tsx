import React, { useCallback } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import ButtonSubmit from '../../components/ButtonSubmit';
import Header from '../../components/Header';

import { CardError, BoxError } from './styles';

const Error: React.FC = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }

  return (
    <>
      <Header />

      <BoxError>
        <CardError>
          <FiAlertTriangle />
          <p>Oops, algo deu errado Confime seus dados e tente novamente!</p>
          <ButtonSubmit onClick={handleClick}>Voltar <FaArrowLeft /></ButtonSubmit>
        </CardError>
      </BoxError>
    </>
  )
}

export default Error;
