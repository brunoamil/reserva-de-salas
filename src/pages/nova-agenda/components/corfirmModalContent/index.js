import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
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

  
  const userName = useSelector(state => state.user.usuarioNome);
  
  const db = firebase.firestore();
  
  const cadastrarEvento = () => {
    
    db.collection('reserva de salas').add( {
      userName: userName,
      nomeEvento: nomeEvento,
      inicio: horaInicial,
      termino: horaFinal
    } ).then( () => {
      console.log('MANDEI!!');
    }).catch( erro => {
      console.log(erro);
    } )
    
  };

  return (
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
              <Input onChange = {(e) => {
                setNomeEvento(e.target.value)
              }} size="big" placeholder="Evento" type="text" name="inputEvent" id="inputEvent" />
            </form>
          </DescContent>
        </HeaderModalContent>
        <ContainerButton>
          <Button onClick = {() => {
            cadastrarEvento();
            dispatch({ type: "SET_HORA_FINAL", horaFinal })
          }} size="tiny" primary>
            Confirmar Reserva
          </Button>
        </ContainerButton>
      </ContainerMain>
    </Container>
  );
};

export default ConfirmModalContent;
