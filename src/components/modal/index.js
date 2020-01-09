import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";

import { useSelector, useDispatch } from 'react-redux';

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
import CofirmModalContent from './../../pages/nova-agenda/components/corfirmModalContent';

import img from "../../assets/img/ceuma.png";

const ModalUser = ({
  size,
  open,
  close,
  modal
}) => {
  const dispatch = useDispatch();

  const loginForm = useSelector(state => state.modal.loginForm);
  const registerForm = useSelector(state => state.modal.registerForm);
  const confirmForm = useSelector(state => state.modal.confirmForm);

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
          {confirmForm && <CofirmModalContent />}
        </CustomModalContent>
        {loginForm && (
          <FooterModal>
            <p>
              Ainda não possui conta?{" "}
              <span onClick={() => dispatch({ type: "SET_MODAL_REGISTER", valueRegister: true })}>Clique Aqui!</span>
            </p>
          </FooterModal>
        )}
        {registerForm && (
          <FooterModal>
            <p>
              Já possui conta? <span onClick={() => dispatch({ type: "SET_MODAL_LOGIN", valueLogin: true })}>Clique Aqui!</span>
            </p>
          </FooterModal>
        )}
      </Global>
    </>
  );
};

export default ModalUser;
