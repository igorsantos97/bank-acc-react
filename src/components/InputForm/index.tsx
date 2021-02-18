import React, { InputHTMLAttributes } from 'react'

import { Input } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputForm: React.FC<InputProps> = ({ children, ...props }) => {
  return (
    <Input {...props}>
      {children}
    </Input>
  )
}

export default InputForm;
