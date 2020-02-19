import React, { useEffect, useState } from "react";
import { Icon, Button, Modal, Segment } from "semantic-ui-react";
import firebase from "../../../services/firebase";
import { useSelector, useDispatch } from "react-redux";

import Loading from "../../loader";

import { Creators as LoadActions } from '../../../store/ducks/load';
import { Creators as ModalActions } from '../../../store/ducks/modal';
import { Creators as RoomsActions } from '../../../store/ducks/salas';

import {
  Header,
  Container
} from "./styles";

const InfoModal = () => {
  const dispatch = useDispatch();

  const sala = useSelector(state => state.salas.currentRoom);
  const id = useSelector(state => state.ReserveData.reserve_id);
  const loader = useSelector(state => state.load.loadInfo);

  const user = useSelector(state => state.user);

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
        .database()
        .ref(`salas/${sala}/Eventos`)
        .on('value', sucesso => {
          sucesso.forEach(doc => {
            if (id === doc.val().id) {
              if (!dadosReserva) {
                const {
                  userName,
                  setor,
                  inicio,
                  termino,
                  nomeEvento,
                  userEmail
                } = doc.val();

                const firstName = checkName(userName);
                setDadosReserva({
                  firstName,
                  setor,
                  inicio,
                  termino,
                  nomeEvento,
                  userEmail
                });
                dispatch(LoadActions.info(false));
                // console.log(doc.data());
              }
            }
          });
        })
    };

    getEventos();
  });

  //Delete reserva
  const ActionDelete = () => {
    if (user.userEmail !== "") {
      setLoaderDel(true);
      setOpen(false);
      firebase
        .database()
        .ref(`salas/${sala}/Eventos/${id}`)
        .remove()
        .then(() => {
          setTimeout(() => {
            setLoaderDel(false);
            dispatch(ModalActions.modal(false));
            dispatch(RoomsActions.roomEvents([]));
            dispatch(LoadActions.reserve(true));
          }, 1500);
        })
        .catch(erro => console.log("Erro ao EXCLUIR Reserva!", erro));
    }
  };

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

              {user.userLogin ?
                <Segment.Group>
                  <Button fluid negative icon size="large" onClick={() => setOpen(true)}>
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