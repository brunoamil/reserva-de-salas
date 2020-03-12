import React from 'react';

import Img from "../../assets/img/ceuma.png";

const LogoCeuma = ({ Logo, Title }) => {
  return (
    <>
      <Logo src={Img}></Logo>
      <Title>Reserva de Salas</Title>
    </>
  )
}

export default LogoCeuma;
