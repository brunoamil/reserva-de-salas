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
      <Title>Este horário está reservado</Title>
      <ContainerButton>
        <Link to = '/NovaAgenda'>
          <Button size='massive'>
            Horários
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