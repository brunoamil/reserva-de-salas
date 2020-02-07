import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../../../services/firebase";
import { Icon } from 'semantic-ui-react'

import Img from "../../../../assets/img/ceuma.png";

import {
  Logo,
  Header,
  Title,
  UserAling,
  Select,
  SelectAling,
  Container,
  View,
  ContainerHeader,
  ContainerVoltar,
  ContainerLeftHeader,
  ContainerRightHeader,
  ContainerLogo,
  ContainerUser,
  ContainerLogout,
  CustomLabel,
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

        <ContainerRightHeader>
            {useSelector(state => state.user.usuarioLogin) === true ? (
              <>
                <UserAling>
                  <Icon name='user circle' size='big'></Icon>
                  <ContainerUser>
                    <h1>{nome}</h1>
                    <h2>NTI</h2>
                  </ContainerUser>
                  <ContainerLogout>
                    <Icon name='sign-out' size='large' onClick={actionLogout}></Icon>
                  </ContainerLogout>
                </UserAling>
              </>
            ) : ''
            }
        </ContainerRightHeader>
      </Header>
      {/* <Header>
        <Container>
          <View>
            <ContainerHeader>

              <ContainerVoltar>
                <Link to='/'>
                  <ButtonVoltar name='arrow left' size='large' color='black' ></ButtonVoltar>
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
                  <h1>Usuário: {nome}</h1>
                  <ButtonVoltar name='sign-out' size='large' onClick={actionLogout}></ButtonVoltar>
                </>
              ) : ''
              }
            </UserAling>
          </View>
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
        </Container>
      </Header> */}
    </>
  );
};

export default HeaderAgenda;
