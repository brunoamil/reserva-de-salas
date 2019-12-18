import styled from "styled-components";
import { Modal } from 'semantic-ui-react';

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
  justify-content: right;
  margin: 5px 0px 5px 30px;
`;

export const TitleContainerMC = styled.h1`
  font-weight: bold;
  font-size: 2em;
  margin-right: 20px;
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
  margin: 15px 30px 0px 30px;
`;
