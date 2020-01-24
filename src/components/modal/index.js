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
import CreateRoomModal from "../../pages/nova-agenda/components/createRoomModal";

const ModalUser = () => {
  const dispatch = useDispatch();

  const loginForm = useSelector(state => state.modal.loginForm);
  const registerForm = useSelector(state => state.modal.registerForm);
  const confirmForm = useSelector(state => state.modal.confirmForm);
  const infoModal = useSelector(state => state.modal.infoModal);
  const createRoomModal = useSelector(state => state.modal.createRoomModal)

  const close = () => {
    dispatch({ type: "SET_MODAL", valueModal: false })
    dispatch({ type: "SET_MODAL_INFO", valueInfo: false });
    dispatch({ type: "SET_MODAL_LOGIN", valueLogin: false });
    dispatch({ type: "SET_MODAL_CONFIRM", valueConfirm: false });    
  }

  const ModalTop = () => {
    const topInput = document.getElementById('topInput');
    topInput.style.setProperty('transition', 'all 0.2s ease');
    topInput.style.setProperty('margin-top', '-5em');
  }

  return (
    <>
      <Global id="topInput" size="tiny" open={useSelector(state => state.modal.modal)} closeOnEscape={false}
          closeOnDimmerClick={false}>
        <ContainerHeader>
          <IconExit onClick={close}><CustomIcon size="large" name='times' /></IconExit>
        </ContainerHeader>
        <CustomModalContent>
          {loginForm && <LoginForm ModalTop = {ModalTop} />}
          {registerForm && <RegisterForm ModalTop = {ModalTop} />}
          {confirmForm && <CofirmModalContent ModalTop = {ModalTop} />}
          {infoModal && <InfoModal />}
          {createRoomModal && <CreateRoomModal/>}
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
