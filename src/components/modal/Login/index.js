import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Form, Dimmer, Loader, Message } from "semantic-ui-react";
import firebase from "../../../services/firebase";
import "firebase/auth";
import RedefinirSenha from "../Recuperar-Senha";

//Redux
import { useDispatch } from 'react-redux';

import {
  Container,
  LabelReg,
  TitleForgot,
  CustomButton,
  CustomModalContent,
  ContainerModalContent,
  TitleContainerMC
} from "./styles";

function LoginForm({ history }) {
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
          history.push("/NovaAgenda");
          
          dispatch( {type: 'LOG_IN', usuarioEmail : email} );
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
            <TitleContainerMC>LOGIN</TitleContainerMC>
          </ContainerModalContent>
          <Container>
            <Form size="tiny" key="tiny" method="POST">
              <Form.Field>
                <LabelReg>Email:</LabelReg>
                <input
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </Form.Field>
              <Form.Field>
                <LabelReg>Senha:</LabelReg>
                <input
                  onChange={e => setSenha(e.target.value)}
                  type="password"
                  placeholder="Senha"
                />
              </Form.Field>
              <TitleForgot onClick={TrocarTela}>
                Esqueci minha senha!
              </TitleForgot>
            </Form>
            {carregando ? (
              <Dimmer active>
                <Loader size="medium">Carregando</Loader>
              </Dimmer>
            ) : (
              <CustomButton
                onClick={Logar}
                size="large"
                primary
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

export default withRouter(LoginForm);
