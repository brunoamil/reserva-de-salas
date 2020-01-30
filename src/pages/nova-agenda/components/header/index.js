import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../../../services/firebase";

import Img from "../../../../assets/img/ceuma.png";

import { Button, Modal } from 'semantic-ui-react';
import {
  Logo,
  Header,
  Title,
  UserAling,
  Select,
  SelectAling,
  Container,
  CircleAling,
  Circle,
  Circle2,
  Legenda,
  View,
  ContainerHeader,
  ContainerVoltar,
  ContainerLeftHeader,
  ViewSelect,
  ButtonVoltar,
  ContainerAdmin
} from "./styles";


export const HeaderAgenda = () => {

  const dispatch = useDispatch();

  const [nome, setNome] = useState();
  const [/*loader*/, setLoader] = useState(false);
  const [salas, setSalas] = useState([]);
  const [open, setOpen] = useState(false);

  const room = useSelector(state => state.salas.currentRoom)

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

  //Verifica o email e pega o nome
  const email = useSelector(state => state.user.usuarioEmail);
  firebase
    .firestore()
    .collection("usuarios")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().email === email) {
          setNome(checkName(doc.data().nome));
          dispatch({ type: 'USER_NAME', usuarioNome: nome });
        }

        //pegando setor
        const { setor } = doc.data();
        dispatch({ type: 'USER_SETOR', usuarioSetor: setor })
      });
    })
    .catch(err => {
      console.log("Erro ao obter o nome do usuario! ", err);
    });

  useEffect(() => {
    const arrSalas = [];

    const getSalas = async () => {
      await firebase
        .firestore()
        .collection("salas")
        .get()
        .then(sucesso => {
          sucesso.forEach(doc => {
            arrSalas.push(doc.data().nome);
          });
        })
        .catch(erro => {
          console.log("Erro ao pegar salas", erro);
        });
      setSalas(arrSalas);
    };
    getSalas();
  }, []);

  // mandando as salas para o redux
  dispatch({ type: 'REG_SALAS', arrSalas: salas });

  const actionLogout = () => {
    actionLoader();
    setTimeout(() => {
      dispatch({ type: "LOG_OUT" });
      dispatch({ type: "SET_EVENTOS_SALA", event: [] });
      dispatch({ type: 'USER_NAME', usuarioNome: '' })
      setLoader(false);
    }, 1000);
  };

  const roomsActions = room => {
    dispatch({ type: "GET_SALA", sala: room });
    dispatch({ type: "SET_EVENTOS_SALA", event: [] });
  }

  const actionLoader = () => (
    dispatch({ type: "SET_LOADER", set_loader: true })
  );

  const createRoom = () => {
    // alert('funcionalidade nao disponivel')
    dispatch({ type: "SET_MODAL", valueModal: true })
    dispatch({ type: "SET_MODAL_CREATE_ROOM", createRoomForm: true });
  }

  const clearReservation = () => {
    setOpen(false)
    firebase
      .firestore()
      .collection("salas")
      .doc(room)
      .collection('Eventos')
      .get()
      .then(sucesso => {
        sucesso.forEach(doc => {
          firebase.firestore().collection('salas').doc(room).collection('Eventos').doc(doc.data().id).delete().then(sucesso => {
          })
        })
        dispatch({ type: "SET_MODAL", valueModal: false });
        dispatch({ type: "SET_EVENTOS_SALA", event: [] });
        dispatch({ type: "SET_LOADER", set_loader: true });
      })
  }


  return (
    <>
      <Modal closeOnEscape size="tiny" open={open}>
        <Modal.Header>Deseja excluir todas as reservas desta sala?</Modal.Header>
        <Modal.Actions>
          <Button
            content='Não'
            onClick={() => { setOpen(false) }}
          />
          <Button negative
            icon='x'
            labelPosition='right'
            content="Sim"
            onClick={clearReservation}
          />
        </Modal.Actions>
      </Modal>
      <Header>
        <Container>
          <View>
            <ContainerHeader>
              <ContainerVoltar>
                <Link to='/'>
                  <ButtonVoltar name='arrow left' size='large' color='black' onClick={actionLogout}></ButtonVoltar>
                </Link>
              </ContainerVoltar>
              <ContainerLeftHeader>
                <Logo src={Img}></Logo>
                <Title>Reserva de Salas</Title>
              </ContainerLeftHeader>
            </ContainerHeader>
            <UserAling>
              {useSelector(state => state.user.usuarioLogin) === true ? (
                <>
                  {email === "admin@ceuma.com" ? (
                    <>
                      <ContainerAdmin>
                        <Button size='small' positive onClick={createRoom}>Criar sala</Button>
                        <Button size='small' negative onClick={() => { setOpen(true) }}>Limpar reservas</Button>
                      </ContainerAdmin>
                    </>
                  ) : ''
                  }
                  <h1>{nome}</h1>
                  <ButtonVoltar name='sign-out' size='large' onClick={actionLogout}></ButtonVoltar>
                </>
              ) : ''
              }
            </UserAling>
          </View>
          <ViewSelect>
            <CircleAling>
              <Circle></Circle>
              <Legenda>Indisponível</Legenda>
              <Circle2></Circle2>
              <Legenda>Disponível</Legenda>
            </CircleAling>
            <SelectAling>
              <Select onChange={e => {
                roomsActions(e.target.value);
                actionLoader();
              }}>
                {salas.map(sala => (
                  <option key={sala}>{sala}</option>
                ))}
              </Select>
            </SelectAling>
          </ViewSelect>
        </Container>
      </Header>
    </>
  );
}

export default HeaderAgenda;
