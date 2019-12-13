import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import img from "../../assets/ceuma.png";
import {
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

  return (
    <>
        {/*Modal Login*/}
        <div>
          <Modal isOpen={props.modal} toggle={props.toggle} className={props.className} centered>
            <ModalHeader toggle={props.toggle}>
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
                Ainda não tem conta? <button onClick={props.toggleNested}>Clique Aqui!</button>
              </p>
            </FooterModal>
          </Modal>
        </div>

        {/* Modal Cadastrar-se*/}
        <Modal isOpen={props.nestedModal} centered>
          <ModalHeader toggle={props.toggleNested}>
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
              <ButtonModal color="primary" size="lg" onClick={props.toggleModalConf}>
                Cadastrar
              </ButtonModal>
            </FormModal>
          </ModalBody>
          <FooterModal>
            <p>
              Já possui uma conta? <button onClick={props.toggle}>Clique Aqui!</button>
            </p>
          </FooterModal>
        </Modal>

        {/*Modal Confirmação*/}
        <ModalConf isOpen={props.modalConf} centered>
          <ModalHeaderConf toggle={props.toggleAll}>
          </ModalHeaderConf>
          <ModalBody>
            <ContainerOk>
              <img src={img} alt="Logo Ceuma" width="100" height="100"/>
              <H1Conf>Cadastro Confirmado</H1Conf>
            </ContainerOk>
          </ModalBody>
        </ModalConf>
    </>
  );
};

export default ModalLC;
