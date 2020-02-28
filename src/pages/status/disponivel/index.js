import React from "react";
import { Container, ContainerIcon, Icone, ContainerButton, Footer, Title } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Disponivel = props => {
  return (
    <>
      <Container>
        <ContainerIcon>
          <Icone name="calendar check outline" size="massive" />
        </ContainerIcon>
        <Title>Este horário está disponível</Title>
        <ContainerButton>
          <Link to="/NovaAgenda">
            <Button size="massive">Reservar</Button>
          </Link>
        </ContainerButton>
        <Footer>Versão 1.1.1</Footer>
      </Container>
    </>
  );
};

export default Disponivel;
