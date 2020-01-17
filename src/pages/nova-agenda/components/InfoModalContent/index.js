import React, {useEffect, useState} from "react";
import {Loader, Dimmer,Icon } from 'semantic-ui-react';
import firebase from '../../../../services/firebase';
import {useSelector, useDispatch} from 'react-redux';

import { Header, Container, Section, ContainerEvento } from './styles';

const InfoModal = () => {
  const dispatch = useDispatch();

  const sala = useSelector(state => state.salas.currentRoom) || "Auditório";
  const id = useSelector(state => state.dados.id);
  const loader = useSelector(state => state.load.loadInfo);

  const [dadosReserva, setDadosReserva] = useState();

  useEffect(() => {
    const getEventos = async () => {

      await firebase
        .firestore()
        .collection("salas")
        .doc(`${sala}`)
        .collection("Eventos")
        .get()
        .then(sucesso => {
          sucesso.forEach(doc => {
            if (id === doc.data().id) {
              if (!dadosReserva) {
                setDadosReserva({ ...doc.data() });
                dispatch({ type: "SET_LOAD_INFO", set_loader_info: false });
                console.log(doc.data())
              }
            }
          });
        })
        .catch(erro => {
          console.log("Erro ao pegar eventos", erro);
        });
    };

    getEventos();
  });
        
  return (
    <>
      { loader ? (<Dimmer active>
        <Loader size="medium">Carregando Informções...</Loader>
      </Dimmer>) : (
        <>
        <Container>
          <Header>
            <h2>Informações</h2>
          </Header> 
          <Section>
            <p><strong>Nome: </strong>{dadosReserva.userName}</p>
            <p><strong>Setor: </strong>{dadosReserva.setor}</p>
            <p><strong>Inicio: </strong>{dadosReserva.inicio}</p>
            <p><strong>Termino: </strong>{dadosReserva.termino}</p>
          </Section>
          <ContainerEvento>
            <p><strong>Evento: </strong>{dadosReserva.nomeEvento}</p>
          </ContainerEvento>
        </Container>
        </>
      ) }
    </>
  )
}

export default InfoModal;
