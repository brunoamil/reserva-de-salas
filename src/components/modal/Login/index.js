import React, { useState } from "react";
import { Form, Dimmer, Loader, Message, Input, Button } from "semantic-ui-react";
import firebase from "../../../services/firebase";
import "firebase/auth";
import RedefinirSenha from "../Recuperar-Senha";

//Redux
import { useDispatch } from 'react-redux';

import {
  Container,
  TitleForgot,
  CustomForm,
  CustomModalContent,
  ContainerModalContent,
  TitleContainerMC
} from "./styles";

function LoginForm() {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);
  const [msgErro, setMsgErro] = useState();

  const dispatch = useDispatch();

  function TrocarTela() {
    setLogin(false);
  }

  function Logar() {
    if (email === "" || senha === "") {
      setErro(true);
      setMsgErro("Informe email e/ou senha!");
    } else {
      setCarregando(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(sucesso => {
          // history.push("/NovaAgenda");
          setCarregando(false);

          dispatch( {type: 'LOG_IN', usuarioEmail: email} );
          dispatch({ type: "SET_MODAL_CONFIRM", valueConfirm: true});
        })
        .catch(erro => {
          setCarregando(false);
          setErro(true);
          setMsgErro("Usuário ou senha inválidos!");
        });
    }
  }

  return (
    <>
      {login ? (
        <CustomModalContent>
          <ContainerModalContent>
            <TitleContainerMC>Login</TitleContainerMC>
          </ContainerModalContent>
          <Container>
            <Form size="large" key="tiny" method="POST">
              <CustomForm>
                <Input
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  icon='mail' 
                  iconPosition='left'
                />
              </CustomForm>
              <CustomForm>
                <Input
                  onChange={e => setSenha(e.target.value)}
                  type="password"
                  placeholder="Senha"
                  icon='lock' 
                  iconPosition='left'
                />
              </CustomForm>
              <TitleForgot onClick={TrocarTela}>
                Esqueci minha senha!
              </TitleForgot>
            </Form>
            {carregando ? (
              <Dimmer active>
                <Loader size="medium">Carregando</Loader>
              </Dimmer>
            ) : (
              <Button
                onClick={Logar}
                size="large"
                content="Login"
              />
            )}
            {erro ? (
              <Message header={msgErro} color="red" icon="dont" />
            ) : (
              <div />
            )}
          </Container>
        </CustomModalContent>
      ) : (
        <RedefinirSenha />
      )}
    </>
  );
}

export default LoginForm;
