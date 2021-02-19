import React, { ButtonHTMLAttributes } from 'react';

import { ButtonSubmit } from './styles';

interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const ButtonSumit: React.FC<InputProps> = ({ children, ...props }) => {
  return (
    <ButtonSubmit {...props}>{children}</ButtonSubmit>
  )
}

export default ButtonSumit
