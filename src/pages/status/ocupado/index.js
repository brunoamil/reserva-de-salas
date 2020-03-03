import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'
import { Container, ContainerIcon, Ban, ContainerButton, Footer, Title } from './styles';
import Detalhes from './detalhes'


const Ocupado = props => {
  return (
    <>
    <Container>
      <ContainerIcon>
        <Ban name='ban'size='massive'/>
      </ContainerIcon>
      <Title>Esta sala está reservada</Title>
      <ContainerButton>
        <Link to = '/NovaAgenda'>
          <Button size='massive'>
            Ver Horários Disponíveis
          </Button>
        </Link>
      </ContainerButton>
      <Footer>
        <Detalhes />
      </Footer>
    </Container>
    </>
  );
};

export default Ocupado;