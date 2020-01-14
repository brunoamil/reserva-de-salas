import React, { useState } from "react";
import { Button, Input, Message } from "semantic-ui-react";
import firebase from "../../../../services/firebase";
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  HeaderModalContent,
  ContainerMain,
  DescContent,
  HourContent,
  ContainerButton
} from "./styles";

const ConfirmModalContent = () => {
  const dispatch = useDispatch();
  const horaInicial = useSelector(state => state.dados.hora);

  const horas = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00"
  ];

  const [horaFinal, setHoraFinal] = useState(horaInicial);
  const [nomeEvento, setNomeEvento] = useState();
  const [msgSucesso, setMsgSucesso] = useState(false);


  const userName = useSelector(state => state.user.usuarioNome);
  const id = useSelector(state => state.dados.id);
  const sala = useSelector(state => state.salas.salaAtual) || "Auditório";

  const db = firebase.firestore();

  const cadastrarEvento = () => {
    db.collection("salas").doc(`${sala}`).collection("Eventos").add({
      userName: userName,
      nomeEvento: nomeEvento,
      inicio: horaInicial,
      termino: horaFinal,
      id
    }).then( () => {
      console.log('MANDEI!!');
      setMsgSucesso(true)
    }).catch( erro => {
      console.log(erro);
    });
    setTimeout(function () { dispatch({ type: "SET_MODAL", valueModal: false}) }, 3000);
  };

  return (
    <>
      <Container>
        <ContainerMain>
          <HourContent>
            <p>De: {horaInicial}</p>
            <div>
              <p>Até: {" "}</p>

              <select onChange={e => setHoraFinal(e.target.value)}>
                {horas.filter(item => item > horaInicial).map(hora => (
                  <option>{hora}</option>
                ))}
              </select>

            </div>
          </HourContent>
          <HeaderModalContent>
            <DescContent>
              <form method="post">
                <label htmlFor="Event">Evento</label>
                <Input onChange={(e) => {
                  setNomeEvento(e.target.value)
                }} size="big" placeholder="Evento" type="text" name="inputEvent" id="inputEvent" />
              </form>
            </DescContent>
          </HeaderModalContent>
          {
            msgSucesso ?
              <Message header="Reserva Concluída!" color="green" icon="check" />
              :
              <ContainerButton>
                <Button onClick={() => {
                  cadastrarEvento();
                  dispatch({ type: "SET_HORA_FINAL", horaFinal });
                  document.getElementById(id).style.background = 'red';
                }} size="tiny" primary>
                  Confirmar Reserva
                </Button>
              </ContainerButton>

          }
        </ContainerMain>
      </Container>
    </>
  );
};

export default ConfirmModalContent;
