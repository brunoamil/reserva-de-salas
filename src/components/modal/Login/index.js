import React, { useState } from "react";
import { Form, Message, Input } from "semantic-ui-react";
import { useDispatch } from 'react-redux';
import firebase from "../../../services/firebase";
import "firebase/auth";

import RedefinirSenha from "../Recuperar-Senha";
import Loading from '../../loader';

import { Creators as usersAction } from '../../../store/ducks/users';
import { Creators as modalActions } from '../../../store/ducks/modal';

import {
  Container,
  TitleForgot,
  CustomForm,
  CustomModalContent,
  CustomButton,
  ContainerModalContent,
  TitleContainerMC
} from "./styles";

function LoginForm({ ModalTop }) {
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
          setCarregando(false);
          
          // user
          dispatch(usersAction.email(email));
          dispatch(usersAction.log_in(true));
          dispatch(usersAction.getRequestDataUser());
          
          //modal
          dispatch(modalActions.login_modal(false));
          dispatch(modalActions.confirm(true));
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
        <CustomModalContent >
          <ContainerModalContent>
            <TitleContainerMC>Login</TitleContainerMC>
          </ContainerModalContent>
          <Container>
            <Form size="large" key="tiny" method="POST">
              <CustomForm>
                <Input
                  onClick={ModalTop}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  icon='mail'
                  iconPosition='left'
                />
              </CustomForm>
              <CustomForm>
                <Input
                  onClick={ModalTop}
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
              <Loading size='medium'>
                carregando...
              </Loading>
            ) : (
                <CustomButton
                  fluid
                  onClick={Logar}
                  size="big"
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
          <RedefinirSenha ModalTop={ModalTop} />
        )}
    </>
  );
}

export default LoginForm;
