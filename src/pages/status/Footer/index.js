import React, { useState, useEffect } from "react";
import { Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Modal from "../../../components/modal";


import { Rodape, ContainerTitle, ContainerButton, TitleH1, TitleH2 } from './styles';


const Footer = props => {
  // Modal
  const [modal, setModal] = useState({ open: false });
  const show = size => () => setModal({ size, open: true });
  const close = () => setModal({ open: false });

  const { open, size } = modal;

  // Login Form
  const [loginForm, setLoginForm] = useState(true);
  const showLoginForm = () => {
    setLoginForm(true);
    setRegisterForm(false);
    setSuccess(false);
  };
  // const CloseLoginForm = () => {
  //   setLoginForm(false);
  //   setRegisterForm(true);
  // };

  // Register Form
  const [registerForm, setRegisterForm] = useState(false);
  const showRegisterForm = () => {
    setRegisterForm(true);
    setLoginForm(false);
  };
  // const CloseRegisterForm = () => {
  //   setRegisterForm(false);
  //   setLoginForm(true);
  // };

  // Success Form
  const [success, setSuccess] = useState(false);
  const showSuccess = () => {
    setSuccess(true);
    setRegisterForm(false);
  };

  useEffect(() => {
    setTimeout(() => {
      close();
      showLoginForm();
    }, 2000);
  }, [success])

  return (
    <>
      <Rodape>
        <ContainerTitle>
          <TitleH1>Próximo Evento:</TitleH1>
          <TitleH2>NTI - BRUNO - 9:00 - 11:00</TitleH2>
        </ContainerTitle>
        <ContainerButton>
          <Link to="/Principal">
            <Button size='big' primary>
              Horários
            </Button>
          </Link>
          <Button onClick={show('tiny')} size='big' primary>
            Reservar
          </Button>
          <Modal
            size={size}
            open={open}
            close={close}
            loginForm={loginForm}
            registerForm={registerForm}
            success={success}
            showSuccess={showSuccess}
            showLoginForm={showLoginForm}
            showRegisterForm={showRegisterForm}
          />
        </ContainerButton>
      </Rodape>
    </>
  );
};

export default Footer;
