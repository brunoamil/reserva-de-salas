import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Message } from "semantic-ui-react";
import firebase from "../../../services/firebase";

import {
  CustomModalContent,
  ContainerModalContent,
  TitleContainerMC,
  Container,
  CustomForm
} from "./styles";


const CreateRoom = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [nomeSala, setNomeSala] = useState();
  const [msgErro, setMsgErro] = useState(false);

  function CreateRoom() {
    if (!nomeSala) {
      setMsgErro(true);
    } else {
      setLoading(true);
      firebase
        .firestore()
        .collection("salas")
        .add({ nome: nomeSala })
        .then(sucesso => {
          setTimeout(() => {
            dispatch({ type: "SET_MODAL_CREATE_ROOM", createRoomForm: false });
            dispatch({ type: "SET_MODAL", valueModal: false });
            dispatch({ type: "SET_LOADER", set_loader: true });
          }, 1000);
        })
        .catch(error => {
          console.log("Ocorreu um erro ao criar sala", error);
        });
    }
  }
  return (
    <>
      <CustomModalContent>
        <ContainerModalContent>
          <TitleContainerMC>Cadastro de Sala</TitleContainerMC>
        </ContainerModalContent>
        <Container>
          <Form size="large" key="tiny" method="POST">
            <CustomForm>
              <Input
                loading={loading}
                onChange={e => {
                  setNomeSala(e.target.value);
                }}
                icon="table"
                iconPosition="left"
                placeholder="Digite o nome da sala"
              />
            </CustomForm>
          </Form>
        </Container>
        <Button fluid positive onClick={CreateRoom}>
          Criar sala
        </Button>

        {msgErro ? (
          <Message
            size="small"
            header={"OPS! Você esqueceu o nome da sala"}
            color="red"
            icon="dont"
          />
        ) : (
          ""
        )}
      </CustomModalContent>
    </>
  );
};
export default CreateRoom;
