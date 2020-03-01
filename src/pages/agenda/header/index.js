import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../../services/firebase";
import { Icon, Responsive } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import Img from "../../../assets/img/ceuma.png";

import { Creators as LoadActions } from '../../../store/ducks/load';
import { Creators as UsersActions } from '../../../store/ducks/users';
import { Creators as RoomsActions } from '../../../store/ducks/salas';

import {
  Logo,
  Header,
  Title,
  UserAling,
  Select,
  SelectAling,
  ContainerLeftHeader,
  ContainerVoltar,
  ButtonVoltar,
  ContainerCenterHeader,
  ContainerRightHeader,
  ContainerLogo,
  ContainerUser,
  ContainerLogout,
  ViewSelect,
} from "./styles";


const HeaderAgenda = () => {

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
  const email = useSelector(state => state.user.userEmail);
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
        <ContainerLeftHeader>
          <ContainerVoltar>
            <Link to='/'>
              <ButtonVoltar name='arrow left' size='large' color='black' ></ButtonVoltar>
            </Link>
          </ContainerVoltar>
          <ContainerLogo>
            <Logo src={Img}></Logo>
            <Title>Reserva de Salas</Title>
          </ContainerLogo>
        </ContainerLeftHeader>

        <ContainerCenterHeader>
          <h1>Auditorio</h1>
        </ContainerCenterHeader>

        <ContainerRightHeader>
          <Responsive {...Responsive.onlyComputer}>
            <ViewSelect>
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
          </Responsive>
          {useSelector(state => state.user.userLogin) === true ? (
            <>
              <UserAling>
                <Icon color='black' name='user circle' size='big'></Icon>
                <ContainerUser>
                  <h1>{nome}</h1>
                  <h2>NTI</h2>
                </ContainerUser>
                <ContainerLogout>
                  <Icon name='sign-out' size='large' onClick={actionLogout}></Icon>
                </ContainerLogout>
              </UserAling>
            </>
          ) : <span></span>
          }
        </ContainerRightHeader>
      </Header>
    
    </>
  );
};

export default HeaderAgenda;
