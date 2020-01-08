import React, { useState, useEffect } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { withRouter, useHistory } from "react-router-dom";

import {
  Logo,
  Header,
  Title,
  UserAling,
  Button,
  Select,
  SelectAling,
  Texto,
  Container,
  CircleAling,
  Circle,
  Circle2,
  Legenda,
  View,
  ViewSelect,
} from "./styles";

import Img from "../../../../assets/img/ceuma.png";

import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../../../services/firebase';

<<<<<<< HEAD
export default props => {
  const [ salas, setSalas ] = useState([]);
=======
export const HeaderAgenda = () => {

  const history = useHistory()
  
>>>>>>> origin/marcus-nova-agenda
  const [nome ,setNome] = useState();
  const [loader ,setLoader] = useState(false);
  

  const dispatch = useDispatch();

  //Verifica o email e pega o nome
  const email = useSelector(state => state.usuarioEmail);
  firebase.firestore().collection('usuarios').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      if ( doc.data().email === email ) { 
        setNome( doc.data().nome )
      }
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });

  useEffect(() => {
    const arrSalas = [];

    const getSalas = async () => {
      await firebase.firestore().collection('salas').get()
        .then(sucesso => {
          sucesso.forEach(doc => {
            arrSalas.push(doc.data().nome);
          })
        })
        .catch(erro => {
          console.log('Erro ao pegar salas', erro);
        })
        setSalas(arrSalas);
    }
    getSalas();

  }, []);

  // mandando as salas para o redux
  // dispatch({ type: 'REG_SALAS', arrSalas });

<<<<<<< HEAD
  const actionLogout = () => { 
    dispatch( {type: 'LOG_OUT'} )
=======
  const dispatch = useDispatch();
  const actionLogout = () => {

>>>>>>> origin/marcus-nova-agenda
    setLoader(true); 
    

    setTimeout( () => {
      
      history.push("/")
      dispatch( {type: 'LOG_OUT'} )
    },1000) 

  }

  return (
    <>
      <Header>
        <Container>
          <View>
            <div>
              <Logo src={Img}></Logo>
              <Title>Reserva de Salas - Universidade Ceuma</Title>
            </div>
            {
              useSelector( state => state.usuarioLogin) > 0 ?
              <UserAling>
                  <h1>Usuário : { nome }</h1>
<<<<<<< HEAD
                  <Button type="button">
                    <CustomLink onClick={ actionLogout } to="/" >Sair</CustomLink>
=======
                  
                  <Button type="button" onClick={ actionLogout }>
                    Sair
>>>>>>> origin/marcus-nova-agenda
                  </Button>
                  { loader && 
                  <Dimmer active>
                    <Loader size="big">Carregando</Loader>
                  </Dimmer>
                  }
              </UserAling>
              : ''
                }
          </View>
          <ViewSelect>
            <CircleAling>
              <Circle></Circle>
              <Legenda>Indisponível</Legenda>
              <Circle2></Circle2>
              <Legenda>Disponível</Legenda>
            </CircleAling>

            <SelectAling>
              <Select>
                {salas.map(sala => ( 
                  <option value={sala}>{sala}</option>
                ))}
              </Select>
              <Texto>Semana</Texto>
              <Select>
                <option value="sala1">2 a 6, Novembro</option>
                <option value="sala2">9 a 13, Novembro</option>
                <option value="sala3">16 a 20, Novembro</option>
                <option value="sala4">23 a 27, Novembro</option>
              </Select>
            </SelectAling>
          </ViewSelect>
        </Container>
      </Header>
    </>
  );
};

export default withRouter(HeaderAgenda);