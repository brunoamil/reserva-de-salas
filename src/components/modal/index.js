import React from "react";
import { Button, Modal } from "semantic-ui-react";

import {
  Global,
  ContainerHeader,
  TitleH1Header,
  ContainerModalContent,
  TitleContainerMC,
  FooterModal,
  ContainerForm,
  ModalHeader
} from "./styles";
import LoginForm from "./Login";
import RegisterForm from "./Cadastro";
import Success from "./Success";

import img from "../../assets/img/ceuma.png";

const ModalUser = props => {
  return (
    <>
      <Global size={props.size} open={props.open} onClose={props.close}>
        <ModalHeader>
          <ContainerHeader>
            <img src={img} alt="Logo Ceuma" width="40" height="38" />
            <TitleH1Header> - Ceuma Reservas</TitleH1Header>
          </ContainerHeader>
        </ModalHeader>
        <Modal.Content>
          <ContainerModalContent>
            {props.loginForm && <TitleContainerMC>Login</TitleContainerMC>}
            {props.registerForm && (
              <TitleContainerMC>Cadastra-se</TitleContainerMC>
            )}
          </ContainerModalContent>

          {props.loginForm && <LoginForm />}
          {props.registerForm && <RegisterForm />}
          {props.success && <Success />}

          <ContainerForm>
            {props.loginForm && <Button size="large" primary content="Login" />}
            {props.registerForm && (
              <Button
                size="large"
                primary
                content="Cadastrar-se"
                onClick={props.showSuccess}
              />
            )}
          </ContainerForm>
        </Modal.Content>
        {props.loginForm && (
          <FooterModal>
            <p>
              Ainda não possui conta?{" "}
              <a onClick={props.showRegisterForm}>Clique Aqui!</a>
            </p>
          </FooterModal>
        )}
        {props.registerForm && (
          <FooterModal>
            <p>
              Já possui conta? <a onClick={props.showLoginForm}>Clique Aqui!</a>
            </p>
          </FooterModal>
        )}
      </Global>
    </>
  );
};

export default ModalUser;
