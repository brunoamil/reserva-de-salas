import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'
import { Bloco, FooterStatus, Title } from './styles';
import Detalhes from './detalhes'


const Ocupado = props => {
  return (
    <>
    <Bloco>
      <Title>Ocupado!</Title>
      <Detalhes></Detalhes>
      <Link to = '/NovaAgenda'>
        <Button size='massive'>
          Reservar
      </Button>
      </Link>
      <FooterStatus>Versão 1.0</FooterStatus>
    </Bloco>
    </>
  );
};

export default Ocupado;