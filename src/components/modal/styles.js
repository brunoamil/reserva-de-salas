import styled from "styled-components";
import { Modal, Button,Icon } from 'semantic-ui-react';

export const Global = styled(Modal)`
  padding : 0 !important;
  /* height: 57vh; */
`


export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
  margin-bottom : -40px;
`;

export const CustomIcon = styled(Icon)`
  margin: 0.5em 0.5em 0em 0em !important;
  color: #000 !important;

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
  border-bottom: 3px solid #0d4b81 !important;
  color: #000;
  font-family: "PT Sans",sans-serif;
`;

export const FooterModal = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0d4b81;

  p {
    color: #ffffff;
    font-size: 1em;
    span{
      font-weight: bold !important;
      cursor: pointer;
    }
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
export const IconExit = styled.span`
  
`