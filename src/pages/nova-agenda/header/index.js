import React from "react";
import firebase from '../../../services/firebase'
import {
  Logo,
  Header,
  Title,
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
  UserAling,
  Button
} from "./styles";

import Img from "../../../assets/img/ceuma.png";

export default props => {
  return (
    <div>
      <Header>
        <Container>
          <View>
            <Logo src={Img}></Logo>
            <Title>Reserva de Salas - Universidade Ceuma</Title>
            {/* <UserAling>
              <Title>Usuário : Marcus</Title>
              <Button type="submit">Sair</Button>
            </UserAling> */}
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
                {/* {
                  firebase.firestore().collection('salas').where('existe', '==', true).get()
                    .then(sucesso => {
                      if (sucesso.empty) {
                        console.log('Não existem salas.');
                        return;
                      }

                      sucesso.forEach(doc => {
                        console.log(doc.data());
                      });
                    })
                    .catch(erro => {
                      console.log('Erro ao pegar salas', erro);
                    })
                } */}
                <option value="sala1">Sala 1</option>
                <option value="sala2">Sala 2</option>
                <option value="sala3">Reset</option>
                <option value="sala4">Auditório</option>
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
    </div>
  );
};