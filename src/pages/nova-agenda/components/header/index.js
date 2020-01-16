import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../../../services/firebase";

import Img from "../../../../assets/img/ceuma.png";

import {
  Logo,
  Header,
  Title,
  UserAling,
  Button,
  Select,
  SelectAling,
  Container,
  CircleAling,
  Circle,
  Circle2,
  Legenda,
  View,
  ViewSelect
} from "./styles";


export const HeaderAgenda = () => {

  const dispatch = useDispatch();

  const [nome, setNome] = useState();
  const [loader, setLoader] = useState(false);
  const [salas, setSalas] = useState([]);

  //Verifica o email e pega o nome
  const email = useSelector(state => state.user.usuarioEmail);
  firebase
    .firestore()
    .collection("usuarios")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().email === email) {
          setNome(doc.data().nome);
          dispatch({ type: 'USER_NAME', usuarioNome: nome })
        }
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
    setLoader(true);
    setTimeout(() => {
      dispatch({ type: "LOG_OUT" });
      setLoader(false);
    }, 1000);
  };

  return (
    <>
      <Header>
        <Container>
          <View>
            <div>
              <Logo src={Img}></Logo>
              <Title>Reserva de Salas</Title>
            </div>
            <UserAling>
              {useSelector(state => state.user.usuarioLogin) > 0 ? (
                <h1>Usuário: {nome}</h1>
              )
                : ''}
              <Link to='/'>
                <Button type="button" onClick={actionLogout}>
                  Voltar
                </Button>
              </Link>
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
                dispatch({ type: "GET_SALA", sala: (e.target.value) })
                }}>
                {salas.map(sala => (
                  <option onClick={() => dispatch({ type: "SET_LOADER", set_loader: true })} value={sala}>{sala}</option>
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
