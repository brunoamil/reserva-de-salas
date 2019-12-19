import styled from "styled-components";
import { Modal, Button } from 'semantic-ui-react';

export const Global = styled(Modal)`
  padding : 0 !important;
`

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ModalHeader = styled(Modal.Header)`
  /* height: 40px; */
`;

export const TitleH1Header = styled.h1`
  margin: 6px 0px 0px 3px !important;
  font-size: 0.9em;
  color: #848484;
`;

export const ContainerModalContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainerMC = styled.h1`
  font-weight: bold;
  font-size: 2em;
  border-bottom: 3px solid #0080ff;
  color: #000;
`;

export const FooterModal = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0080ff;

  p {
    color: #ffffff;
    font-size: 1em;
  }

  a {
    text-decoration: none;
    color: #ffffff;

    &:hover {
      text-decoration: underline;
      color: #ffffff;
    }
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px 0px 0px;
`;

export const CustomModalContent = styled(Modal.Content)`
  padding: 12px !important;
`;

export const CustomButton = styled(Button)`
  margin: 15px 30px !important;
`;
