import React, { useState, useMemo } from "react";
import { Button, Input } from "semantic-ui-react";
import firebase from "../../../../services/firebase";
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  HeaderModalContent,
  ContainerMain,
  DescContent,
  HourContent,
  CustomIcon,
  PointHourContent,
  ZeroHourContent,
  ContainerButton
} from "./styles";

const ConfirmModalContent = () => {
  const dispatch = useDispatch();
  const horaInicial = useSelector(state => state.dados.hora) + 1
  const horaInicialSelecionada = useSelector(state => state.dados.hora)

  const [countHour, setCountHour] = useState(useSelector(state => state.dados.hora));
  const [nomeEvento, setNomeEvento] = useState();

  const sumCountHour = () => {
    if (countHour < 18) {
      setCountHour(countHour + 1)
      if (countHour === 18) setCountHour(horaInicialSelecionada);
    };
  };
  const subCountHour = () => {
    if (countHour > 8) {
      setCountHour(countHour - 1)
      if (countHour === horaInicial) setCountHour(18);

    };
  };

  
  const userName = useSelector(state => state.user.usuarioNome);
  // const [horaInicio, setHoraInicio] = useState();
  // const [horaTermino ,setHoraTermino] = useState();
  
  // mandado evendo pro redux
  

  
  // const db = firebase.firestore();
  
  const cadastrarEvento = () => {
    
    // db.collection('reserva de salas').add( {
    //   userName: userName,
    //   nomeEvento: nomeEvento,
    //   // inicio: horaInicio,
    //   // termino: horaTermino
    // } ).then( () => {
    //   alert('Sucesso')
    // }).catch( () => {
    //   alert('Erro')
    // } )
    
  };

  return (
    <Container>
      <ContainerMain>
        <HourContent>
          <p>De: {useSelector(state => state.dados.hora)}</p>
          <div>
            <p>Até: {" "}</p>
            <div>
              <CustomIcon name="caret up" size="big" onClick={sumCountHour} />
              <div>{countHour}</div>
              <CustomIcon name="caret down" size="big" onClick={subCountHour} />
            </div>
            
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
            dispatch({ type: "SET_HORA_FINAL", horaFinal: countHour })
          }} size="tiny" primary>
            Confirmar Reserva
          </Button>
        </ContainerButton>
      </ContainerMain>
    </Container>
  );
};

export default ConfirmModalContent;
