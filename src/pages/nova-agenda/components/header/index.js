import React from "react";

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

export default props => {
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
                  <h1>Usuário : Marcus</h1>
                  <Button type="button"><CustomLink to="/">Sair</CustomLink></Button>
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