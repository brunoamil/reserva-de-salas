import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Message } from "semantic-ui-react";
import firebase from "../../../../services/firebase";

import {
  Container,
  ContainerMain,
  HourContent,
  ContainerButton,
  TextAling,
  CustomButton,
  CustomOption
} from "./styles";

const ConfirmModalContent = () => {
  const dispatch = useDispatch();

  const horaInicial = useSelector(state => state.dados.hora);
  const userName = useSelector(state => state.user.usuarioNome);
  const userEmail = useSelector(state => state.user.usuarioEmail);
  const id = useSelector(state => state.dados.id);
  const data = useSelector(state => state.dados.data);
  const sala = useSelector(state => state.salas.currentRoom);

  const [horaFinal, setHoraFinal] = useState("");
  const [nomeEvento, setNomeEvento] = useState("");
  const [msgErro, setMsgErro] = useState(false);
  const [limitFinalHour, setlimitFinalHour] = useState(false);
  const [loading, setLoading] = useState(false)

  const db = firebase.firestore();

  const cadastrarEvento = async () => {
    setLoading(true)
    let setor = "";

    await db
      .collection("usuarios")
      .get()
      .then(item =>
        item.forEach(doc => {
          if (userEmail === doc.data().email) {
            setor = doc.data().setor;
          }
        })
      )
      .catch(err => console.log("Erro ao pegar o setor", err));

    const dados = {
      id,
      setor,
      userName,
      userEmail,
      nomeEvento,
      inicio: horaInicial,
      termino: horaFinal,
      data
    };

    if (!nomeEvento) {
      setMsgErro(true);
    } else {
      setMsgErro(false);
      // console.log('hora inicial: ',horaInicial);
      // console.log('hora final: ',horaFinal);
      db.collection("salas")
        .doc(`${sala}`)
        .collection("Eventos")
        .doc(id)
        .set(dados)
        .then(() => {
          setTimeout(() => {
            setLoading(false)
            dispatch({ type: "SET_MODAL_CONFIRM", valueConfirm: false });
            dispatch({ type: "SET_MODAL", valueModal: false });
            dispatch({ type: "SET_LOADER", set_loader: true });
          }, 1000);
        })
        .catch(erro => {
          console.log("Não foi possível cadastrar uma reserva", erro);
        });
    }
  };

  const getDateEvent = async () => {
    await db
      .collection("salas")
      .doc(`${sala}`)
      .collection("Eventos")
      .get()
      .then(event => event.forEach(
        doc => {
          if (data === doc.data().data) {
            setlimitFinalHour(doc.data().inicio);
          }
        }
      ))
      .catch()
  }

  getDateEvent();

  const actionFinalHour = () => {
    dispatch({ type: "SET_HORA_FINAL", horaFinal });
  };

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

  return (
    <>
      <Container>
        <ContainerMain>
          <TextAling>
            <h1>RESERVA</h1>
          </TextAling>
          <HourContent>
            <strong>De: {horaInicial}</strong>

            <div>
              <strong>Até: </strong>
              <select
                onChange={e => setHoraFinal(e.target.value)}
                defaultValue={"DEFAULT"}
              >
                <CustomOption key="10" disabled hidden value="DEFAULT">
                  horas
                </CustomOption>
                {limitFinalHour ?
                  horas.filter(item => item > horaInicial && item < limitFinalHour)
                    .map(hora => (
                      <option key={hora}>{hora}</option>
                    ))
                  :
                  horas
                    .filter(item => item > horaInicial)
                    .map(hora => (
                      <option key={hora}>{hora}</option>
                    ))
                }
              </select>
            </div>
          </HourContent>
          <Input
            onChange={e => {setNomeEvento(e.target.value);}}
            size="huge"
            placeholder="Nome do Evento"
            type="text"
            icon="book"
            iconPosition="left"
            loading = {loading}
            disabled = {loading}
          />
          <ContainerButton>
            <CustomButton
              onClick={() => {
                cadastrarEvento();
                actionFinalHour();
              }}
              size="large"
              primary
              id="button"
              fluid
            >
              Confirmar Reserva
            </CustomButton>
          </ContainerButton>
          {msgErro && (
            <Message
              header="Insira o nome do evento!"
              color="red"
              icon="dont"
            />
          )}
        </ContainerMain>
      </Container>
    </>
  );
};

export default ConfirmModalContent;
