import React from "react";
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
  ViewSelect
} from "./styles";

import Img from "../../../../assets/img/ceuma.png";

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