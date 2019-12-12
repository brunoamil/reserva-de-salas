import styled from "styled-components";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  Input
} from "reactstrap";

export const ButtonM = styled(Button)`
  margin-left: 15px;
`;

export const Container = styled.div`
  width: 100%;
  height: 50em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const H2Header = styled.h2`
  font-size: 1.2em;
  margin-left: 3px;
  margin-top: 2px;
`;

export const H1Header = styled.h2`
  font-size: 1.8em;
  margin: 0em 0em 1em 0em;
  font-weight: bold;
`;

export const ContainerHeader = styled.div`
  display: flex;
`;

export const InputModal = styled(Input)`
  width: 100%;

  padding: 10px;
`;

export const LabelModal = styled(Label)`
  font-size: 1.2em;
`;

export const FormModal = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 0px 50px 0px 50px;
`;

export const ButtonModal = styled(Button)`
  margin: 1em 0em 1em 0em;
`;

export const FooterModal = styled(ModalFooter)`
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: left;
  justify-content: center;
  background: #007bff;

  p {
    color: #fff;
    font-size: 1em;
    button {
      background: #007bff;
      border: none;
      color: #fff;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const H1Cadastro = styled.h1`
  font-size: 1.7em;
  margin: 0em 0em 1.2em 0em;
  font-weight: bold;
`;

export const ContainerOk = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1Conf = styled.h1`
  font-size: 1.8em;
  margin-top: 1.2em;
`;

export const ModalConf = styled(Modal)`
  height: 400px;
`;

export const ModalHeaderConf = styled(ModalHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;
