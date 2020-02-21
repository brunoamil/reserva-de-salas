import React from "react";
import { Bloco, FooterStatus, Title } from './styles';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'


const Disponivel = props => {
  return (
    <>
    <Bloco>
      <Title>Disponivel!</Title>
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

export default Disponivel;