import React, { useState } from "react";
import { Button, Input, Message } from "semantic-ui-react";
import firebase from "../../../../services/firebase";
import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  HeaderModalContent,
  ContainerMain,
  DescContent,
  HourContent,
  ContainerButton,
  TextAling,
  CustomOption
} from "./styles";

const ConfirmModalContent = () => {
  const dispatch = useDispatch();
  const horaInicial = useSelector(state => state.dados.hora);
  const setor = useSelector(state => state.user.usuarioSetor);

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

  const [horaFinal, setHoraFinal] = useState();
  const [nomeEvento, setNomeEvento] = useState();
  const [msgSucesso, setMsgSucesso] = useState(false);
  const [msgErro, setMsgErro] = useState(false);

  const userName = useSelector(state => state.user.usuarioNome);
  const id = useSelector(state => state.dados.id);
  const sala = useSelector(state => state.salas.currentRoom) || "Auditório";

  const db = firebase.firestore();

  const cadastrarEvento = () => {
    if (!nomeEvento || !horaFinal) {
      setMsgErro(true);
    } else {
      db.collection("salas")
        .doc(`${sala}`)
        .collection("Eventos")
        .add({
          userName: userName,
          nomeEvento: nomeEvento,
          inicio: horaInicial,
          termino: horaFinal,
          id,
          setor
        })
        .then(() => {
          setMsgSucesso(true);
          setTimeout(() => {
            dispatch({ type: "SET_MODAL", valueModal: false });
            dispatch({ type: "SET_LOADER", set_loader: true });
          }, 1000);
        })
        .catch(erro => {
          console.log("Não foi possível cadastrar uma reserva", erro);
        });
    }
  };

  return (
    <>
      <Container>
        <ContainerMain>
          <TextAling>
            <h1>RESERVA</h1>
          </TextAling>
          <HourContent>
            <p>
              <strong>De:</strong> {horaInicial}
            </p>
            <div>
              <p>
                <strong>Até:</strong>{" "}
              </p>

              <select
                onChange={e => setHoraFinal(e.target.value)}
                defaultValue={"DEFAULT"}
              >
                <CustomOption key="10" disabled hidden value="DEFAULT">
                  horas
                </CustomOption>
                {horas
                  .filter(item => item > horaInicial)
                  .map(hora => (
                    <option key={hora}>{hora}</option>
                  ))}
              </select>
            </div>
          </HourContent>
          <HeaderModalContent>
            <DescContent>
              <form method="post">
                <Input
                  focus
                  onChange={e => {
                    setNomeEvento(e.target.value);
                  }}
                  size="huge"
                  placeholder="Nome do Evento"
                  type="text"
                  name="inputEvent"
                  id="inputEvent"
                />
                {/* <Select placeholder='Select your country' options='oi' /> */}
              </form>
            </DescContent>
          </HeaderModalContent>
            <ContainerButton>
              <Button
                onClick={() => {
                  cadastrarEvento();
                  dispatch({ type: "SET_HORA_FINAL", horaFinal });
                }}  
                size="large"
                primary
                id="button"
                >
                Confirmar Reserva
              </Button>
            </ContainerButton>
            {msgSucesso && <Message header="Reserva Concluída!" color="green" icon="check" />}
            {msgErro && <Message header="Verifique os Campos Acima!" color="red" icon="dont" />}
        </ContainerMain>
      </Container>
    </>
  );
};

export default ConfirmModalContent;
