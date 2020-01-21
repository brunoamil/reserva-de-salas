import React, {useEffect, useState} from "react";
import {Loader, Dimmer, Icon, Message, Button } from 'semantic-ui-react';
import firebase from '../../../../services/firebase';
import {useSelector, useDispatch} from 'react-redux';

import {
  Header,
  Container,
  Section,
  ContainerEvento,
  ContainerInfo,
  ContainerExit
} from "./styles";

const InfoModal = () => {
  const dispatch = useDispatch();

  const sala = useSelector(state => state.salas.currentRoom);
  const id = useSelector(state => state.dados.id);
  const loader = useSelector(state => state.load.loadInfo);
  const email = useSelector(state => state.user.usuarioEmail);

  const [dadosReserva, setDadosReserva] = useState();
  const [msgErro, setMsgErro] = useState(false);
  const [loaderDel, setLoaderDel] = useState(false);

  const checkName = name => {
    if (name) {
      if (name.indexOf(" ") > -1) {
        let firstName = name.split(" ");
        return firstName[0];
      } else {
        return name;
      }
    }
  };

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
                const {
                  userName,
                  setor,
                  inicio,
                  termino,
                  nomeEvento,
                  userEmail
                } = doc.data();

                const firstName = checkName(userName);
                setDadosReserva({
                  firstName,
                  setor,
                  inicio,
                  termino,
                  nomeEvento,
                  userEmail
                });
                dispatch({ type: "SET_LOAD_INFO", set_loader_info: false });
                // console.log(doc.data());
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

  //Delete reserva
  const ActionDelete = () => {
    if (dadosReserva.userEmail === email) {
      setLoaderDel(true);
      firebase
        .firestore()
        .collection("salas")
        .doc(`${sala}`)
        .collection("Eventos")
        .doc(`${id}`)
        .delete()
        .then(() => {
          setTimeout(() => {
            setLoaderDel(false);
            dispatch({ type: "SET_MODAL", valueModal: false });
            dispatch({ type: "SET_EVENTOS_SALA", event: [] });
            dispatch({ type: "SET_LOADER", set_loader: true });
          }, 1500);
        })
        .catch(erro => console.log("Erro ao EXCLUIR Reserva!", erro));
    } else {
      setMsgErro(true);
    }
  };

  return (
    <>
      {loader ? (
        <Container>
          <Dimmer active>
            <Loader size="medium">Carregando Informações...</Loader>
          </Dimmer>
        </Container>
      ) : (
        <>
          <Header>
            <h2>Informações da Reserva</h2>
          </Header>
          <ContainerInfo>
            <Section>
              <p>
                <Icon name="user" size="small" />
                <strong>Nome: </strong>
                {dadosReserva.firstName}
              </p>
              <p>
                <Icon name="building" size="small" />
                <strong>Setor: </strong>
                {dadosReserva.setor}
              </p>
              <p>
                <Icon name="time" size="small" />
                <strong>Inicio: </strong>
                {dadosReserva.inicio}
              </p>
              <p>
                <Icon name="stopwatch" size="small" />
                <strong>Termino: </strong>
                {dadosReserva.termino}
              </p>
            </Section>

            <ContainerEvento>
              <p>
              <Icon name="file" size="small" />
                <strong>Evento: </strong>
              </p>
              <span>{dadosReserva.nomeEvento}</span>
            </ContainerEvento>

            {loaderDel && (
              <Dimmer active>
                <Loader size="medium">Deletando Reserva...</Loader>
              </Dimmer>
            )}

            {email && (
              <ContainerExit>
                <Button negative icon onClick={ActionDelete} size="big">
                  Excluir reserva
                </Button>
              </ContainerExit>
            )}

            {msgErro && (
              <Message header="Essa Reserva não é sua!" color="red" icon="dont" />
            )}
          </ContainerInfo>
        </>
      )}
    </>
  );
};

export default InfoModal;
