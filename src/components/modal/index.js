import React from "react";
import { useSelector, useDispatch } from 'react-redux';

import {
  Global,
  ContainerHeader,
  FooterModal,
  CustomModalContent,
  IconExit,
  CustomIcon,
} from "./styles";
import LoginForm from "./Login";
import RegisterForm from "./Cadastro";
import CofirmModalContent from './../../pages/nova-agenda/components/corfirmModalContent';
import InfoModal from './../../pages/nova-agenda/components/InfoModalContent';

import img from "../../assets/img/ceuma.png";

const ModalUser = ({
  size,
  close,
  open
}) => {
  const dispatch = useDispatch();

  const loginForm = useSelector(state => state.modal.loginForm);
  const registerForm = useSelector(state => state.modal.registerForm);
  const confirmForm = useSelector(state => state.modal.confirmForm);
  const infoModal = useSelector(state => state.modal.infoModal);
  // const open = useSelector(state => state.modal.modal);

  return (
    <>
      <Global size={size} open={open} closeOnEscape={false}
          closeOnDimmerClick={false}>
        <ContainerHeader>
          <IconExit onClick={close}><CustomIcon size="large" name='times' /></IconExit>
        </ContainerHeader>
        <CustomModalContent>
          {loginForm && <LoginForm />}
          {registerForm && <RegisterForm />}
          {confirmForm && <CofirmModalContent />}
          {infoModal && <InfoModal />}
        </CustomModalContent>
        {loginForm && (
          <FooterModal>
            <p>
              Ainda não possui conta?{" "}
              <span onClick={() => dispatch({ type: "SET_MODAL_REGISTER", valueRegister: true })}>Clique Aqui!</span>
            </p>
          </FooterModal>
        )}
      </Global>
    </>
  );
};

export default ModalUser;
