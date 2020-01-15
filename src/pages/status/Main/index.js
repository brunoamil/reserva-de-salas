import React from "react";
import { Bloco, Title } from './styles';
import {Button} from 'semantic-ui-react'
import { Link } from "react-router-dom";

const Main = props => {
  return (
    <Bloco>
      <Title>Faça sua reserva!</Title>
      <Link to = '/NovaAgenda'>
        <Button size='massive' color='white'>
          Reservar
      </Button>
      </Link>
    </Bloco>
  );
};

export default Main;
