import React, { useState } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

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
  CustomLink
} from "./styles";

import Img from "../../../../assets/img/ceuma.png";

import { useSelector, useDispatch } from 'react-redux';
import firebase from '../../../../services/firebase';

export default props => {

  
  const [nome ,setNome] = useState();
  const [loader ,setLoader] = useState(false);

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
  
  

  
  // var salas = []

  // async function popularSelectSalas(){
  //   salas = await firebase.firestore().collection('salas').where('existe', '==', true).get()
  //     .then(sucesso => {
  //       if (sucesso.empty) {
  //         console.log('Não existem salas.');
  //         return;
  //       }
  //       sucesso.forEach(doc=>{
  //         var a = doc.data()
  //         salas.push(a.nome)
  //       })
  //       return salas;
  //     })
  //     .catch(erro => {
  //       console.log('Erro ao pegar salas', erro);
  //     })

  //   }
    
  //   useEffect(() => {
  //     popularSelectSalas()
  //     console.log(salas)
  // }, [])

  const dispatch = useDispatch();
  const actionLogout = () => { 
    dispatch( {type: 'LOG_OUT'} )
    setLoader(true); 
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
                  
                  <Button type="button">
                    <CustomLink onClick={ actionLogout } to="/" >Sair</CustomLink>
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
                <option value='Reset'>Reset</option>
                <option value='Auditório'>Auditório</option>
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