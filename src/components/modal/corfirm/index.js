import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Message } from "semantic-ui-react";
import firebase from "../../../services/firebase";

import Select from './Select';

import {
  Container,
  ContainerMain,
  HourContent,
  TextAling,
  CustomButton,
} from "./styles";

const Confirm = () => {
  const dispatch = useDispatch();

  const inicialHour = useSelector(state => state.dados.hora);
  const finalHour = useSelector(state => state.dados.horaFinal);
  const userName = useSelector(state => state.user.usuarioNome);
  const userEmail = useSelector(state => state.user.usuarioEmail);
  const id = useSelector(state => state.dados.id);
  const data = useSelector(state => state.dados.data);
  const sala = useSelector(state => state.salas.currentRoom);

  const [nomeEvento, setNomeEvento] = useState("");
  const [msgErro, setMsgErro] = useState(false);
  const [loading, setLoading] = useState(false);

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
      inicio: inicialHour,
      termino: finalHour,
      data,
      posReserva: parseInt(id)
    };

    if (!nomeEvento || !finalHour) {
      console.log(finalHour)
      setMsgErro(true);
    } else {
      setMsgErro(false);
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
  return (
    <>
      <Container>
        <ContainerMain>
          <TextAling>
            <h1>Reservar horários</h1>
          </TextAling>
          <HourContent>
            <strong>De: {inicialHour}</strong>

            <div>
              <strong>Até: </strong>
              <Select 
                db = {db}
                room = {sala}
                date = {data}
                inicialHour = {inicialHour}
                id = {id}
              />
            </div>
          </HourContent>
          <Input
            onChange={e => { setNomeEvento(e.target.value); }}
            size="huge"
            placeholder="Nome do Evento"
            type="text"
            icon="calendar check outline"
            iconPosition="left"
            loading={loading}
            disabled={loading}
          />
          <CustomButton
            onClick={() => cadastrarEvento()}
            size="big"
            id="button"
            fluid
          >
            Confirmar Reserva
          </CustomButton>
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

export default React.memo(Confirm);
