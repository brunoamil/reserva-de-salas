import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Message, Form } from "semantic-ui-react";
import firebase from "../../../services/firebase";
import moment from "moment";

import { Creators as loadActions } from '../../../store/ducks/load';
import { Creators as ModalActions } from '../../../store/ducks/modal';
import SelectHora from './Select';

import {
  Container,
  ContainerMain,
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
  const setor = useSelector(state => state.user.userSector);

  const sala = useSelector(state => state.salas.currentRoom);

  const [msgErro, setMsgErro] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState()

  const db = firebase.database();

  const reservaData = reserveData.reserve_date;
  useEffect(() => {

    let splitData = reservaData.split('/')
    var now = moment();
    var ano = now.year();

    switch (splitData[1]) {
      case '1':
        setData(`${splitData[0]}, janeiro de ${ano} `)
        break;
      case '2':
        setData(`${splitData[0]}, fevereiro de ${ano} `)
        break;
      case '3':
        setData(`${splitData[0]}, março de ${ano} `)
        break;
      case '4':
        setData(`${splitData[0]}, abril de ${ano} `)
        break;
      case '5':
        setData(`${splitData[0]}, maio de ${ano} `)
        break;
      case '6':
        setData(`${splitData[0]}, junho de ${ano} `)
        break;
      case '7':
        setData(`${splitData[0]}, julho de ${ano} `)
        break;
      case '8':
        setData(`${splitData[0]}, agosto de ${ano} `)
        break;
      case '9':
        setData(`${splitData[0]}, setembro de ${ano} `)
        break;
      case '10':
        setData(`${splitData[0]}, outubro de ${ano} `)
        break;
      case '11':
        setData(`${splitData[0]}, novembro de ${ano} `)
        break;
      case '12':
        setData(`${splitData[0]}, dezembro de ${ano} `)
        break;
      default:
        console.log('erro');
    }
    return (() => { '' })
  }, [reservaData, data])

  const cadastrarEvento = async () => {
    
    // await firebase.firestore().collection("usuarios")
    //   .get()
    //   .then(item => item.forEach(doc => {
    //     if (userEmail === doc.data().email) {
    //       setor = doc.data().setor;
    //     }
    //   }))
    //   .catch(err => console.log("Erro ao pegar o setor", err))

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
      db.ref(`salas/${sala}/Eventos/${reserveData.reserve_day_of_week}/${reserveData.reserve_id}`)
        .set(dados)
        .then(() => {
          setTimeout(() => {
            dispatch(ModalActions.modal(false));
            setLoading(false);
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
      {/* {loading && <Loading size="big">Carregando Reservas...</Loading>} */}
      <Container>
        <ContainerMain>
          <TextAling>
            <h1>Reservar horários</h1>
          </TextAling>

          <Form loading = {loading}>
          <Form.Field>
            <LabelConfirm >Data</LabelConfirm>
            <DataDiv>
              {data}
            </DataDiv>
          </Form.Field>

          <FormFieldHora>
            <LabelConfirm >Horário</LabelConfirm>
              <SelectHora
                db={db}
                room={sala}
                date={reserveData.reserve_date}
                inicialHour={reserveData.reserve_inicial_hour}
                id={reserveData.reserve_id}
                dayOfWeek={reserveData.reserve_day_of_week}
              />
          </FormFieldHora>
          </Form>
          <CustomButton
            onClick={() => cadastrarEvento()}
            size="big"
            id="button"
            fluid
            disabled = {loading}
          >
            Confirmar Reserva
          </CustomButton>
          {msgErro && (
            <Message
              header="Escolha o horário da sua reserva!"
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
