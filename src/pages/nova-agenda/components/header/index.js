import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../../../services/firebase";

import Img from "../../../../assets/img/ceuma.png";

import { Creators as LoadActions } from '../../../../store/ducks/load';
import { Creators as UsersActions } from '../../../../store/ducks/users';
import { Creators as RoomsActions } from '../../../../store/ducks/salas';
// import { Creators as ModalActions } from '../../../../store/ducks/modal';

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
  ContainerLeftHeader,
  ViewSelect,
  ButtonVoltar
} from "./styles";


export const HeaderAgenda = () => {

  const dispatch = useDispatch();

  const [nome, setNome] = useState();
  const [/*loader*/, setLoader] = useState(false);
  const [salas, setSalas] = useState([]);

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
  const email = useSelector(state => state.users.userEmail);
  firebase
    .firestore()
    .collection("usuarios")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().email === email) {
          setNome(checkName(doc.data().nome));
          dispatch(UsersActions.name(nome));
        }

        //pegando setor
        const { setor } = doc.data();
        dispatch(UsersActions.sector(setor))
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
  dispatch(RoomsActions.rooms(salas));

  const actionLogout = () => {
    actionLoader();
    setTimeout(() => {
      dispatch(UsersActions.log_out());
      dispatch(RoomsActions.roomEvents([]));
      dispatch(UsersActions.name(''))
      setLoader(false);
    }, 1000);
  };

  const roomsActions = room => {
    dispatch(RoomsActions.currentRoom(room));
    dispatch(RoomsActions.roomEvents([]));
  }

  const actionLoader = () => (
    dispatch(LoadActions.reserve(true))
  );

  return (
    <>
      <Header>
        <Container>
          <View>
            <ContainerHeader>

              {/* <ContainerVoltar>
                <Link to='/'>
                  <ButtonVoltar name='arrow left' size='large' color='black' ></ButtonVoltar>
                </Link>
              </ContainerVoltar> */}


              <ContainerLeftHeader>
                <Logo src={Img}></Logo>
                <Title>Reserva de Salas</Title>
              </ContainerLeftHeader>
            </ContainerHeader>
            <UserAling>
              {useSelector(state => state.users.userLogin) === true ? (
                <>
                  <h1>Usuário: {nome}</h1>
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
};

export default HeaderAgenda;
