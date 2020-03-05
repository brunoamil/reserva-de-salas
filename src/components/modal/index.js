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
import CofirmModalContent from './corfirm';
import InfoModal from './reserveInfo';
import CreateRoomForm from "./createRoom";

import { Creators as ModalActions } from '../../store/ducks/modal';

const ModalUser = () => {
  const dispatch = useDispatch();

  const modalStates = useSelector(state => state.modal);

  const close = () => {
    dispatch(ModalActions.modal(false))
  }

  const ModalTop = () => {
    const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    const height = (window.innerHeight > 0) ? window.innerHeight : window.screen.height;
    if (width <= 1280 && height <= 700) {
      const topInput = document.getElementById('topInput');
      topInput.style.setProperty('transition', 'all 0.2s ease');
      topInput.style.setProperty('margin-top', '-5em');
    }
  }

  return (
    <>
      <Global id="topInput" size="tiny" open={modalStates.modal} closeOnEscape={false}
        closeOnDimmerClick={false}>
        <ContainerHeader>
          <IconExit onClick={close}><CustomIcon size="large" name='times' /></IconExit>
        </ContainerHeader>
        <CustomModalContent>
          {modalStates.login && <LoginForm ModalTop={ModalTop} />}
          {modalStates.register && <RegisterForm ModalTop={ModalTop} />}
          {modalStates.confirm && <CofirmModalContent ModalTop={ModalTop} />}
          {modalStates.info && <InfoModal />}
          {modalStates.room && <CreateRoomForm />}
        </CustomModalContent>
        {modalStates.login && (
          <FooterModal>
            <p>
              <span onClick={() => dispatch(ModalActions.register(true))}>
                Ainda não possui conta?{" "}
                Clique Aqui!
              </span>
            </p>
          </FooterModal>
        )}
      </Global>
    </>
  );
};

export default ModalUser;
