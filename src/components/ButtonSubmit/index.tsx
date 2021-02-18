import React from 'react';

import { ButtonSubmit } from './styles'

const ButtonSumit: React.FC = ({ children, ...props }) => {
  return (
    <ButtonSubmit {...props}>{children}</ButtonSubmit>
  )
}

export default ButtonSumit
