import React from 'react';

import { Title } from './styles'

const TitleForm: React.FC = ({ children }) => {
  return (
    <Title>{children}</Title>
  )
}

export default TitleForm;
