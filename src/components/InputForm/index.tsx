import React from 'react'

import { Input } from './styles';

const InputForm: React.FC = ({ children, ...props }) => {
  return (
    <Input {...props}>
      {children}
    </Input>
  )
}

export default InputForm;
