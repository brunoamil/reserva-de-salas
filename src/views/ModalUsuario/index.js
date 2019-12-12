import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import img from "../../assets/ceuma.png";
import {
  ButtonM,
  Container,
  H2Header,
  H1Header,
  ContainerHeader,
  InputModal,
  LabelModal,
  FormModal,
  ButtonModal,
  FooterModal,
  H1Cadastro,
  ContainerOk,
  H1Conf,
  ModalConf,
  ModalHeaderConf
} from "./styles";

const ModalLC = props => {
  const { className } = props;

  const [ modal, setModal ] = useState(false);

  const [ nestedModal, setNestedModal ] = useState(false);

  const [ modalConf, setModalConf ] = useState(false);


  const toggle = () => {
    setModal(!modal);
    setNestedModal(false);
  }

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setModal(false);
  }

  const toggleAll = () => {
    setNestedModal(false);
    setModal(false);
    setModalConf(false);
  }

  const toggleModalConf = () => {
    setModalConf(!modalConf);
    setNestedModal(false);
    setModal(false);
  }



  return (
    <>
      <Container>

        {/*Modal Login*/}
        <Button color="primary" size="lg" onClick={toggle}>
          Login
        </Button>
        <div>
          <Modal isOpen={modal} toggle={toggle} className={className} centered>
            <ModalHeader toggle={toggle}>
              <ContainerHeader>
                <img src={img} alt="Logo Ceuma" width="30" height="30" />
                <H2Header className="text-muted"> - Ceuma Reservas</H2Header>
              </ContainerHeader>
            </ModalHeader>
            <ModalBody>
              <FormModal>
                <H1Header>Login</H1Header>
                <FormGroup>
                  <LabelModal for="EmailLogin">Email: </LabelModal>
                  <InputModal
                    type="email"
                    name="email"
                    placeholder="Informe seu email"
                  />
                </FormGroup>
                <FormGroup>
                  <LabelModal for="SenhaLogin">Senha: </LabelModal>
                  <InputModal
                    type="password"
                    name="email"
                    placeholder="Informe sua senha"
                  />
                </FormGroup>
                <ButtonModal color="primary" size="lg">
                  Login
                </ButtonModal>
                <p>
                  <span>Esqueceu à senha?</span>
                </p>
              </FormModal>
            </ModalBody>
            <FooterModal>
              <p>
                Ainda não tem conta? <button onClick={toggleNested}>Clique Aqui!</button>
              </p>
            </FooterModal>
          </Modal>
        </div>

        {/* Modal Cadastrar-se*/}
        <Modal isOpen={nestedModal} centered>
          <ModalHeader toggle={toggleNested}>
            <ContainerHeader>
              <img src={img} alt="Logo Ceuma" width="30" height="30" />
              <H2Header className="text-muted"> - Ceuma Reservas</H2Header>
            </ContainerHeader>
          </ModalHeader>
          <ModalBody>
            <FormModal>
              <H1Cadastro>Cadastro</H1Cadastro>
              <FormGroup>
                <LabelModal for="emailCadastro">Email:</LabelModal>
                <InputModal type="email" name="email" placeholder="Informe seu email" />
              </FormGroup>
              <FormGroup>
                <LabelModal for="senhaCadastro">Senha:</LabelModal>
                <InputModal type="password" name="password" placeholder="Informe seu email" />
              </FormGroup>
              <ButtonModal color="primary" size="lg" onClick={toggleModalConf}>
                Cadastrar
              </ButtonModal>
            </FormModal>
          </ModalBody>
          <FooterModal>
            <p>
              Já possui uma conta? <button onClick={toggle}>Clique Aqui!</button>
            </p>
          </FooterModal>
        </Modal>

        {/*Modal Confirmação*/}
        <ModalConf isOpen={modalConf} centered>
          <ModalHeaderConf toggle={toggleAll}>
          </ModalHeaderConf>
          <ModalBody>
            <ContainerOk>
              <img src={img} alt="Logo Ceuma" width="100" height="100"/>
              <H1Conf>Cadastro Confirmado</H1Conf>
            </ContainerOk>
          </ModalBody>
        </ModalConf>
      </Container>
    </>
  );
};

export default ModalLC;
