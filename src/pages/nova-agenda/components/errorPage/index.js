import React from 'react';
import { Icon } from 'semantic-ui-react';

import {ContainerError, Title} from './styles'

export const ErrorPage = () => {
  return(
    <>
      <ContainerError>
        <Icon name="ban" size="massive" color="red"/>
        <Title>Ops! Estamos trabalhando nisso</Title>
      </ContainerError>
    </>
  )
};

export default ErrorPage;