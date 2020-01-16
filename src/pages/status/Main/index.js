import React from "react";
import { Bloco, Title } from './styles';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'


const Main = props => {
  return (
    <Bloco>
      <Title>Faça sua reserva!</Title>
      <Link to = '/NovaAgenda'>
        <Button size='massive'>
          Reservar
      </Button>
      </Link>
    </Bloco>
  );
};

export default Main;
