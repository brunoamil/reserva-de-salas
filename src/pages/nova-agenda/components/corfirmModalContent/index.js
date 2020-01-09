import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
import firebase from "../../../../services/firebase";
import { useSelector } from 'react-redux';

import {
  Container,
  HeaderModalContent,
  ContainerMain,
  DescContent,
  HourContent,
  CustomIcon,
  PointHourContent,
  ZeroHourContent,
  ContainerButton
} from "./styles";

const ConfirmModalContent = () => {

  const [countHour, setCountHour] = useState(8);

  const sumCountHour = () => {
    if (countHour < 18) setCountHour(countHour + 1);
    if (countHour === 18) setCountHour(8);
  };
  const subCountHour = () => {
    if (countHour > 8) setCountHour(countHour - 1);
    if (countHour === 8) setCountHour(18);
  };

  
  const userName = useSelector(state => state.user.usuarioNome);
  const [nomeEvento, setNomeEvento] = useState();
  // const [horaInicio, setHoraInicio] = useState();
  // const [horaTermino ,setHoraTermino] = useState();

  const db = firebase.firestore();

  const cadastrarEvento = (e) => {
    e.preventDefault();

    db.collection('reserva de salas').add( {
      userName: userName,
      nomeEvento: nomeEvento,
      // inicio: horaInicio,
      // termino: horaTermino
    } ).then( () => {
      alert('Sucesso')
    }).catch( () => {
      alert('Erro')
    } )

  };

  return (
    <Container>
      <ContainerMain>
        <HourContent>
          <p>De: 00:00</p>
          <div>
            <p>Até: {" "}</p>
            <div>
              <CustomIcon name="caret up" size="big" onClick={sumCountHour} />
              <div>{countHour}</div>
              <CustomIcon name="caret down" size="big" onClick={subCountHour} />
            </div>
            <PointHourContent>:</PointHourContent>
            <ZeroHourContent>00</ZeroHourContent>
          </div>
        </HourContent>
        <HeaderModalContent>
          <DescContent>
            <form method="post">
              <label htmlFor="Event">Evento</label>
              <Input onChange = {(e) => setNomeEvento(e.target.value)} size="big" placeholder="Evento" type="text" name="inputEvent" id="inputEvent" />
            </form>
          </DescContent>
        </HeaderModalContent>
        <ContainerButton>
          <Button onClick = {cadastrarEvento} size="tiny" primary>
            Confirmar Reserva
          </Button>
        </ContainerButton>
      </ContainerMain>
    </Container>
  );
};

export default ConfirmModalContent;
