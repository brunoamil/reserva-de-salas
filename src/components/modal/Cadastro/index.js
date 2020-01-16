import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Form, Dimmer, Loader, Message, Input } from "semantic-ui-react";
import firebase from "../../../services/firebase";
import { useDispatch } from "react-redux";

import {
  Container,
  LabelReg,
  CustomButton,
  CustomModalContent,
  ContainerModalContent,
  TitleContainerMC,
  CustomForm
} from "./styles";

function RegisterForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState("");

  const history = useHistory();

  function Cadastrar() {
    if (email === "" || senha === "" || nome === "") {
      setErro(true);
      setMsgErro("Verifique se todos os campos estão preenchidos!");
    } else {
      setCarregando(true);

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
        .then(sucesso => {
          setCarregando(false);

          firebase
            .firestore()
            .collection("usuarios")
            .add({
              email: email,
              nome: nome
            })
            .then()
            .catch();

          dispatch({ type: "LOG_IN", usuarioEmail: email });
          dispatch({ type: "SET_MODAL_CONFIRM", valueConfirm: true });
        })
        .catch(erro => {
          setCarregando(false);
          setErro(true);

          switch (erro.message) {
            case "Password should be at least 6 characters":
              setMsgErro("A senha deve ter pelo menos 6 caracteres!");
              break;
            case "The email address is already in use by another account.":
              setMsgErro(
                "Este email já está sendo utilizado por outro usuário!"
              );
              break;
            case "The email address is badly formatted.":
              setMsgErro("O formato do seu email é inválido!");
              break;
            default:
              setMsgErro(
                "Não foi possível cadastrar. Tente novamente mais tarde!"
              );
              break;
          }
        });
    }
  }

  return (
    <>
      <CustomModalContent>
        <ContainerModalContent>
          <TitleContainerMC>Cadastro</TitleContainerMC>
        </ContainerModalContent>
        <Container>
          <Form size="large" key="tiny" method="POST">
            <CustomForm>
              <Input icon='mail' iconPosition='left'onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            </CustomForm>

            <Form.Group widths="equal">
              <CustomForm>
                <Input icon='user' iconPosition='left' onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
              </CustomForm>

              <CustomForm>
                <Input icon='lock' iconPosition='left' onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" />
              </CustomForm>
            </Form.Group>
          </Form>
          {carregando ? (
            <Dimmer active>
              <Loader size="medium">Carregando</Loader>
            </Dimmer>
          ) : (
            <CustomButton
              size="large"
              content="Cadastrar-se"
              onClick={Cadastrar}
            />
          )}
          {erro ? (
            <Message header={msgErro} color="red" icon="dont" />
          ) : (
            <div />
          )}
        </Container>
      </CustomModalContent>
    </>
  );
}
export default withRouter(RegisterForm);
