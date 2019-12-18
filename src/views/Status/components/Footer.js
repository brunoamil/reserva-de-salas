import React, { useState } from "react";
import Styled from "styled-components";
import { ButtonToggle } from "reactstrap";
import { Link } from "react-router-dom";
import Modal from "../../ModalUsuario/index";

const Rodape = Styled.footer`
  background-color: #e6e8fa;
  padding-top: 10px;
  bottom: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerTitle = Styled.div`
  padding: 30px;
  margin-left: 100px;
`;

const ContainerButton = Styled.div`
  padding: 30px;
  margin-right: 100px;

  button {
    margin-left: 20px;
  }
`;

const Footer = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const [nestedModal, setNestedModal] = useState(false);

  const [modalConf, setModalConf] = useState(false);

  const toggle = () => {
    setModal(!modal);
    setNestedModal(false);
  };

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setModal(false);
  };

  const toggleAll = () => {
    setNestedModal(false);
    setModal(false);
    setModalConf(false);
  };

  const toggleModalConf = () => {
    setModalConf(!modalConf);
    setNestedModal(false);
    setModal(false);
  };
  return (
    <>
      <Rodape>
        <ContainerTitle>
          <h1 className="text-dark display-4 text-center">Próxima Reunião:</h1>
          <h2 className="text-dark text-center">NTI - BRUNO - 9:00 - 11:00</h2>
        </ContainerTitle>
        <ContainerButton>
          <Link to="/Principal">
            <ButtonToggle color="primary" size="lg" className="mb-3">
              Horários
            </ButtonToggle>
          </Link>
          <ButtonToggle onClick={toggle} color="primary" size="lg" className="mb-3">
            Reservar
          </ButtonToggle>
          <Modal
            className={className}
            modal={modal}
            nestedModal={nestedModal}
            toggle={toggle}
            toggleNested={toggleNested}
            toggleAll={toggleAll}
            toggleModalConf={toggleModalConf}
            modalConf={modalConf}
          />
        </ContainerButton>
      </Rodape>
    </>
  );
};

export default Footer;
