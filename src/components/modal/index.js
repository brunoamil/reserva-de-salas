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
import CofirmModalContent from './../../pages/nova-agenda/components/corfirmModalContent';

import img from "../../assets/img/ceuma.png";

const ModalUser = ({
  size,
  open,
  close,
  loginForm,
  registerForm,
  success,
  CofirmModal,
  showRegisterForm,
  showLoginForm,
}) => {
  return (
    <>
      <Global size={size} open={open} onClose={close}>
        <ModalHeader>
          <ContainerHeader>
            <ContainerLogo>
              <img src={img} alt="Logo Ceuma" width="40" height="38" />
              <TitleH1Header> - Ceuma Reservas</TitleH1Header>
            </ContainerLogo>
            <IconExit onClick={close}><Icon name='times' /></IconExit>
          </ContainerHeader>
        </ModalHeader>
        <CustomModalContent>
          {loginForm && <LoginForm />}
          {registerForm && <RegisterForm />}
          {success && <Success />}
          {CofirmModal && <CofirmModalContent />}
        </CustomModalContent>
        {loginForm && (
          <FooterModal>
            <p>
              Ainda não possui conta?{" "}
              <span onClick={showRegisterForm}>Clique Aqui!</span>
            </p>
          </FooterModal>
        )}
        {registerForm && (
          <FooterModal>
            <p>
              Já possui conta? <span onClick={showLoginForm}>Clique Aqui!</span>
            </p>
          </FooterModal>
        )}
      </Global>
    </>
  );
};

export default ModalUser;
