import React, {useEffect, useState} from "react";
import {Loader, Dimmer} from 'semantic-ui-react';
import firebase from '../../../../services/firebase';
import {useSelector, useDispatch} from 'react-redux';

import { Header, Container, Section, ContainerEvento } from './styles';

const InfoModal = () => {
  const dispatch = useDispatch();

  const sala = useSelector(state => state.salas.currentRoom) || "Auditório";
  const id = useSelector(state => state.dados.id);
  const loader = useSelector(state => state.load.loadInfo);

  const [dadosReserva, setDadosReserva] = useState();

  const checkName = name => {
    if (name) {
      if(name.indexOf(" ") > -1) {
        let firstName = name.split(" ");
        return firstName[0];
      } else {
        return name;
      }
    }
  }

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
                const {userName, setor, inicio, termino, nomeEvento} = doc.data();

                const firstName = checkName(userName);
                setDadosReserva({ firstName, setor, inicio, termino, nomeEvento });
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
            <p><strong>Nome: </strong>{dadosReserva.firstName}</p>
            <p><strong>Setor: </strong>{dadosReserva.setor}</p>
            <p><strong>Inicio: </strong>{dadosReserva.inicio}</p>
            <p><strong>Termino: </strong>{dadosReserva.termino}</p>
          </Section>
          <ContainerEvento>
            <p><strong>Evento: </strong></p>
            <span>{dadosReserva.nomeEvento}</span>
          </ContainerEvento>
        </Container>
        </>
      ) }
    </>
  )
}

export default InfoModal;
