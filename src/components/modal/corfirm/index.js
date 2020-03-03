import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Message, Form } from "semantic-ui-react";
import firebase from "../../../services/firebase";

import Loading from '../../../components/loader';

import { Creators as loadActions } from '../../../store/ducks/load';
import { Creators as ModalActions } from '../../../store/ducks/modal';
import Select from './Select';

import {
  Container,
  ContainerMain,
  HourContent,
  TextAling,
  CustomButton,
  DataDiv,
  FormFieldHora,
  LabelConfirm
} from "./styles";

const Confirm = () => {
  const dispatch = useDispatch();

  const reserveData = useSelector(state => state.ReserveData);

  const userName = useSelector(state => state.user.userName);
  const userEmail = useSelector(state => state.user.userEmail);
  var setor = useSelector(state => state.user.userSector)

  const sala = useSelector(state => state.salas.currentRoom);

  const [msgErro, setMsgErro] = useState(false);
  const [loading, setLoading] = useState(false);

  const db = firebase.database();

  const cadastrarEvento = async () => {

    await firebase.firestore().collection("usuarios")
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
      inicio: reserveData.reserve_inicial_hour,
      termino: reserveData.reserve_final_hour,
      data: reserveData.reserve_date,
      posReserva: parseInt(reserveData.reserve_id)
    };

    if (!reserveData.reserve_final_hour) {
      console.log(reserveData.reserve_final_hour);
      setMsgErro(true);

    } else {
      setMsgErro(false);
      db.ref(`salas/${sala}/Eventos/${reserveData.reserve_id}`)
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

          <Form.Field>
            <LabelConfirm >Data</LabelConfirm>
            <DataDiv textAlign='center'>
              Ter 1 fevereiro, 2020
            </DataDiv>
          </Form.Field>

          <FormFieldHora>
            <LabelConfirm >Horário</LabelConfirm>
            <HourContent>
              <div>
                De: {reserveData.reserve_inicial_hour} às
                  <Select
                  db={db}
                  room={sala}
                  date={reserveData.reserve_date}
                  inicialHour={reserveData.reserve_inicial_hour}
                  id={reserveData.reserve_id}
                />
              </div>
            </HourContent>
          </FormFieldHora>
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
              header="Selecione o termino da reserva!"
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
