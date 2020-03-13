import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { Creators as RoomActions } from "../../../store/ducks/salas";

import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import {
  Container,
  ContainerIcon,
  Ban,
  ContainerButton,
  Footer,
  Version,
  Title
} from "./styles";
import Detalhes from "./detalhes";

const Ocupado = props => {
  const dispatch = useDispatch();

  const requestRooms = useCallback(
    () => dispatch(RoomActions.getRoomsRequest()),
    [dispatch]
  );

  return (
    <>
      <Container>
        <ContainerIcon>
          <Ban name="ban" size="massive" />
        </ContainerIcon>
        <Title>Sala ocupada!</Title>
        <ContainerButton>
          <Link to="/NovaAgenda">
            <Button size="massive" onClick={requestRooms()} >Ver Horários Disponíveis</Button>
          </Link>
        </ContainerButton>
        <Version>Versão 1.2</Version>
        <Footer>
          <Detalhes />
        </Footer>
      </Container>
    </>
  );
};

export default Ocupado;
