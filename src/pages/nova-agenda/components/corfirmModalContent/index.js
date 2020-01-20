import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Message, Dimmer, Loader } from "semantic-ui-react";
import firebase from "../../../../services/firebase";

import {
  Container,
  HeaderModalContent,
  ContainerMain,
  DescContent,
  HourContent,
  ContainerButton,
  TextAling,
  CustomOption,
  CustomButton
} from "./styles";

const ConfirmModalContent = () => {

  const dispatch = useDispatch();
  const horaInicial = useSelector(state => state.dados.hora);
  const userName = useSelector(state => state.user.usuarioNome);
  const userEmail = useSelector(state => state.user.usuarioEmail);
  const id = useSelector(state => state.dados.id);
  const sala = useSelector(state => state.salas.currentRoom);
  
  const [horaFinal, setHoraFinal] = useState("");
  const [nomeEvento, setNomeEvento] = useState();
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
    
    const data = {
      id,
      setor,
      userName,
      userEmail,
      nomeEvento,
      inicio: horaInicial,
      termino: horaFinal,
    };

    if (!nomeEvento || !horaFinal) {
      setMsgErro(true);
    } else {
      setMsgErro(false);
      setLoader(true);
      db.collection("salas")
        .doc(`${sala}`)
        .collection("Eventos")
        .doc(id)
        .set(data)
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

  const actionFinalHour = () => {
    dispatch({ type: "SET_HORA_FINAL", horaFinal });
  };

  return (
    <>
    { loader && ( 
      <Dimmer active>
        <Loader size="medium">Cadastrando Reserva...</Loader>
      </Dimmer>) }
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
              </form>
            </DescContent>
          </HeaderModalContent>
            <ContainerButton>
              <CustomButton
                onClick={() => {
                  cadastrarEvento();
                  actionFinalHour();
                }}
                size="large"
                primary
                id="button"
                >
                Confirmar Reserva
              </CustomButton>
            </ContainerButton>
            {msgSucesso && <Message header="Reserva Concluída!" color="green" icon="check" />}
            {msgErro && <Message header="Verifique os Campos Acima!" color="red" icon="dont" />}
        </ContainerMain>
      </Container>
    </>
  );
}

export default ConfirmModalContent;
