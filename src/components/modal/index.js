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

const ModalUser = () => {
  const dispatch = useDispatch();

  const modalForm = useSelector(state=>state.modal_1)
  
  const close = () => {
    dispatch({ type: "SET_MODAL", valueModal: false })
  }

  const ModalTop = () => {
    const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    const height = (window.innerHeight > 0) ? window.innerHeight : window.screen.height;
    if(width <= 1280 && height<= 700) {
      const topInput = document.getElementById('topInput');
      topInput.style.setProperty('transition', 'all 0.2s ease');
      topInput.style.setProperty('margin-top', '-5em');
    }
  }

  return (
    <>
      <Global id="topInput" size="tiny" open={useSelector(state => state.modal.modal)} closeOnEscape={false}
          closeOnDimmerClick={false}>
        <ContainerHeader>
          <IconExit onClick={close}><CustomIcon size="large" name='times' /></IconExit>
        </ContainerHeader>
        <CustomModalContent>
          {modalForm.loginForm && <LoginForm ModalTop = {ModalTop} />}
          {modalForm.registerForm && <RegisterForm ModalTop = {ModalTop} />}
          {modalForm.confirmForm && <CofirmModalContent ModalTop = {ModalTop} />}
          {modalForm.infoModal && <InfoModal />}
        </CustomModalContent>
        {modalForm.loginForm && (
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
