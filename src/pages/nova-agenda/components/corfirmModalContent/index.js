import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Message} from "semantic-ui-react";
import firebase from "../../../../services/firebase";

import Loading from '../../../../components/loader';

import {
  Container,
  HeaderModalContent,
  ContainerMain,
  DescContent,
  HourContent,
  ContainerButton,
  TextAling,
  CustomButton
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
  const [msgSucesso, setMsgSucesso] = useState(false);
  const [msgErro, setMsgErro] = useState(false);
  const [loader, setLoader] = useState(false);

  const db = firebase.firestore();

  const cadastrarEvento = async () => {

    let setor = '';
    
    await db.collection("usuarios")
      .get()
      .then(item => item.forEach(doc => {
        if (userEmail === doc.data().email) {
          setor = doc.data().setor;
        }
      }))
      .catch(err => console.log("Erro ao pegar o setor", err))

    const dados = {
      id,
      setor,
      userName,
      userEmail,
      nomeEvento,
      inicio: horaInicial,
      termino: horaFinal,
      data,
    };

    if (!nomeEvento) {
      setMsgErro(true);
      
    } else {
      setMsgErro(false);
      setLoader(true);
      db.collection("salas")
        .doc(`${sala}`)
        .collection("Eventos")
        .doc(id)
        .set(dados)
        .then(() => {
          setMsgSucesso(true);
          setLoader(false);
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

  useEffect(() => {
    const actionFinalHour = () => {
      setHoraFinal(`${parseInt(horaInicial) + 1}:00`);
      dispatch({ type: "SET_HORA_FINAL", horaFinal });
    };

    actionFinalHour();
  })

  return (
    <>
      {loader && <Loading size="big">Carregando Reservas...</Loading>}
      <Container>
        <ContainerMain>
          <TextAling>
            <h1>RESERVA</h1>
          </TextAling>
          <HourContent>
            <strong>De: {horaInicial}</strong>
            <strong>Até: {horaFinal}</strong>
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
              </form>
            </DescContent>
          </HeaderModalContent>
          <ContainerButton>
            <CustomButton
              onClick={() => {
                cadastrarEvento();
              }}
              size="large"
              primary
              id="button"
            >
              Confirmar Reserva
              </CustomButton>
          </ContainerButton>
          {msgSucesso && <Message header="Reserva Concluída!" color="green" icon="check" />}
          {msgErro && <Message header="Insira o nome do evento!" color="red" icon="dont" />}
        </ContainerMain>
      </Container>
    </>
  );
}

export default React.memo(ConfirmModalContent);
