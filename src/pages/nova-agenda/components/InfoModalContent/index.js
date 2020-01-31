import React, { useEffect, useState } from "react";
import { Icon, Button, Modal, Segment } from "semantic-ui-react";
import firebase from "../../../../services/firebase";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../../../../components/loader";

import {
  Header,
  Container
} from "./styles";

const InfoModal = () => {
  const dispatch = useDispatch();

  const sala = useSelector(state => state.salas.currentRoom);
  const id = useSelector(state => state.dados.id);
  const loader = useSelector(state => state.load.loadInfo);
  const email = useSelector(state => state.user.usuarioEmail);
  const logado = useSelector(state => state.user.usuarioLogin)

  const [dadosReserva, setDadosReserva] = useState();
  const [loaderDel, setLoaderDel] = useState(false);
  const [open, setOpen] = useState(false);

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
    if (email !== "") {
      setLoaderDel(true);
      setOpen(false);
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
    }
  };

  const verificarLogin = () => {
    if (logado === true) {
      setOpen(true);
    }
    else {
      dispatch({ type: "SET_MODAL_LOGIN", valueLogin: true });
    }
  }
  return (
    <>
      {loader ? (
        <Container>
          <Loading size="medium">Carregando Informações...</Loading>
        </Container>
      ) : (
          <>
            {loaderDel && (
              <Loading size="medium">Deletando Informações...</Loading>
            )}
            <Header>
              <h2>Informações da Reserva</h2>
            </Header>
            <Segment.Group size="big" >
              <Segment >
                <Icon name="user" size="large" />
                <strong>Nome: </strong>
                {dadosReserva.firstName}
              </Segment>
              <Segment>
                <Icon name="building" size="large" />
                <strong>Setor: </strong>
                {dadosReserva.setor}
              </Segment>


              <Segment.Group horizontal >
                <Segment>
                  <Icon name="time" size="large" />
                  <strong>Inicio: </strong>
                  {dadosReserva.inicio}
                </Segment>
                <Segment>
                  <Icon name="stopwatch" size="large" />
                  <strong>Termino: </strong>
                  {dadosReserva.termino}
                </Segment>
              </Segment.Group>


              <Segment>
                <Icon name="calendar check" size="large" />
                <strong>Evento: </strong>
                {dadosReserva.nomeEvento}
              </Segment>

              {logado ?
                <Segment.Group>
                  <Button fluid negative icon onClick={verificarLogin} size="large">
                    Excluir reserva
                      </Button>
                </Segment.Group>
                : ""
              }

            </Segment.Group>
            <Modal size="tiny" open={open}>
              <>
                <Modal.Header>Tem certeza que deseja excluir esta reserva?</Modal.Header>
                <Modal.Actions>
                  <Button
                    content='Cancelar'
                    onClick={() => { setOpen(false) }}
                  />
                  <Button negative
                    icon='x'
                    labelPosition='right'
                    content="Sim"
                    onClick={ActionDelete} />
                </Modal.Actions>
              </>
            </Modal>
          </>
        )}
    </>
  );
};

export default InfoModal;
