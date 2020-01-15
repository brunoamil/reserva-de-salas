import React from "react";
import { Bloco, Title, CustomButton } from './styles';
import { Link } from "react-router-dom";

const Main = props => {
  return (
    <Bloco>
      <Title>Faça sua reserva!</Title>
      <Link to = '/NovaAgenda'>
        <CustomButton size='massive' color='white'>
          Reservar
      </CustomButton>
      </Link>
    </Bloco>
  );
};

export default Main;
