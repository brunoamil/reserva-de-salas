import React, {useCallback} from "react";
import {useDispatch} from 'react-redux';

import { Creators as RoomActions } from '../../../store/ducks/salas';

import { Container, ContainerIcon, Icone, ContainerButton, Footer, Title } from "./styles";

import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Disponivel = props => {
  const dispatch = useDispatch();

  const requestRooms = useCallback(
    () => dispatch(RoomActions.getRoomsRequest()),
    [dispatch]
  );
  return (
    <>
      <Container>
        <ContainerIcon>
          <Icone name="check" size="massive" />
        </ContainerIcon>
        <Title>Sala disponível!</Title>
        <ContainerButton>
          <Link to="/NovaAgenda">
            <Button size="massive" onClick={requestRooms} >Reservar</Button>
          </Link>
        </ContainerButton>
        <Footer>Versão 1.2</Footer>
      </Container>
    </>
  );
};

export default Disponivel;
