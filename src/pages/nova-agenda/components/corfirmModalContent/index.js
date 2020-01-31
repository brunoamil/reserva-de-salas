import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Message } from "semantic-ui-react";
import firebase from "../../../../services/firebase";

import Loading from "../../../../components/loader";

import {
  Container,
  HeaderModalContent,
  ContainerMain,
  DescContent,
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
  const [msgSucesso, setMsgSucesso] = useState(false);
  const [msgErro, setMsgErro] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectHour, setSelectHour] = useState([]);

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

  const db = firebase.firestore();

  const cadastrarEvento = async () => {
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
      data,
      posReserva: parseInt(id)
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

  const actionFinalHour = finalHour => {
    dispatch({ type: "SET_HORA_FINAL", horaFinal });
    setHoraFinal(finalHour);
  };

  useEffect(() => {
    const getReserveId = async () => {
      let arrReserve = [];

      await db
        .collection("salas")
        .doc(`${sala}`)
        .collection("Eventos")
        .orderBy("posReserva", "asc")
        .get()
        .then(item =>
          item.forEach(doc => {
            if (data === doc.data().data) {
              arrReserve.push(doc.data());
            }
          })
        );

      let limitHour = arrReserve.filter(
        reserve => parseInt(reserve.id) > parseInt(id)
      )[0];

      if (!arrReserve.length) {
        setSelectHour(horas.filter(hour => hour > horaInicial));
      } else {
        setSelectHour(
          horas.filter(hour => hour > horaInicial && hour <= limitHour.inicio)
        );
      }
    };

    getReserveId();
  });

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

            <div>
              <strong>Até: </strong>
              <select
                onChange={e => actionFinalHour(e.target.value)}
                defaultValue={"DEFAULT"}
              >
                <CustomOption key="10" disabled hidden value="DEFAULT">
                  horas
                </CustomOption>
                {selectHour.map(hour => (
                  <option key={hour}>{hour}</option>
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
          {msgSucesso && (
            <Message header="Reserva Concluída!" color="green" icon="check" />
          )}
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

export default React.memo(ConfirmModalContent);
