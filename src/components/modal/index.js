import React from "react";
import { Icon } from "semantic-ui-react";

import {
  Global,
  ContainerHeader,
  TitleH1Header,
  FooterModal,
  ModalHeader,
  CustomModalContent,
  IconExit,
  ContainerLogo

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
            <ContainerLogo>
              <img src={img} alt="Logo Ceuma" width="40" height="38" />
              <TitleH1Header> - Ceuma Reservas</TitleH1Header>
            </ContainerLogo>
            <IconExit onClick={props.close}><Icon name='times' /></IconExit>
          </ContainerHeader>
        </ModalHeader>
        <CustomModalContent>
          {props.loginForm && <LoginForm />}
          {props.registerForm && <RegisterForm />}
          {props.success && <Success />}
        </CustomModalContent>
        {props.loginForm && (
          <FooterModal>
            <p>
              Ainda não possui conta?{" "}
              <span onClick={props.showRegisterForm}>Clique Aqui!</span>
            </p>
          </FooterModal>
        )}
        {props.registerForm && (
          <FooterModal>
            <p>
              Já possui conta? <span onClick={props.showLoginForm}>Clique Aqui!</span>
            </p>
          </FooterModal>
        )}
      </Global>
    </>
  );
};

export default ModalUser;
