import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Message } from "semantic-ui-react";
import firebase from "../../../services/firebase";

import Select from './components/select';
import Loading from '../../../components/loader';

import { Creators as loadActions} from '../../../store/ducks/load';
import { Creators as ModalActions} from '../../../store/ducks/modal';

import {
  Container,
  ContainerMain,
  HourContent,
  TextAling,
  CustomButton,
} from "./styles";

const Confirm = () => {
  const dispatch = useDispatch();

  const reserveData = useSelector(state => state.ReserveData);
  
  const userName = useSelector(state => state.user.userName);
  const userEmail = useSelector(state => state.user.userEmail);

  const sala = useSelector(state => state.salas.currentRoom);

  const [nomeEvento, setNomeEvento] = useState("");
  const [msgErro, setMsgErro] = useState(false);
  const [loading, setLoading] = useState(false);

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
      id: reserveData.reserve_id,
      setor,
      userName,
      userEmail,
      nomeEvento,
      inicio: reserveData.reserve_inicial_hour,
      termino: reserveData.reserve_final_hour,
      data: reserveData.reserve_date,
      posReserva: parseInt(reserveData.reserve_id)
    };

    if (!nomeEvento || !reserveData.reserve_final_hour) {
      console.log(reserveData.reserve_final_hour);
      setMsgErro(true);
      
    } else {
      setMsgErro(false);
      db.collection("salas")
        .doc(`${sala}`)
        .collection("Eventos")
        .doc(reserveData.reserve_id)
        .set(dados)
        .then(() => {
          setLoading(false);
          setTimeout(() => {
            dispatch(ModalActions.modal(false));
            dispatch(loadActions.reserve(true));
          }, 1000);
        })
        .catch(erro => {
          console.log("Não foi possível cadastrar uma reserva", erro);
        });
    }
  };
  return (
    <>
      {loading && <Loading size="big">Carregando Reservas...</Loading>}
      <Container>
        <ContainerMain>
          <TextAling>
            <h1>Reservar horários</h1>
          </TextAling>
          <HourContent>
            <strong>De: {reserveData.reserve_inicial_hour}</strong>

            <div>
              <strong>Até: </strong>
              <Select 
                db = {db}
                room = {sala}
                date = {reserveData.reserve_date}
                inicialHour = {reserveData.reserve_inicial_hour}
                id={reserveData.reserve_id}
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
}

export default React.memo(Confirm);
